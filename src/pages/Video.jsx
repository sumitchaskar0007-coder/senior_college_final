import { useEffect, useState } from 'react';
import { FiExternalLink, FiPlay, FiX } from 'react-icons/fi';
import api from '../api';

const FALLBACK = '/images/default-video-thumbnail.svg';

const playerFor = (value) => {
  try {
    const url = new URL(value);
    const host = url.hostname.replace('www.', '');
    if (host === 'youtu.be') return { type: 'embed', url: `https://www.youtube.com/embed/${url.pathname.split('/').filter(Boolean)[0]}` };
    if (host === 'youtube.com' || host.endsWith('.youtube.com')) {
      const id = url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).pop();
      if (id) return { type: 'embed', url: `https://www.youtube.com/embed/${id}` };
    }
    if (host === 'vimeo.com' || host.endsWith('.vimeo.com')) {
      const id = url.pathname.split('/').filter(Boolean).pop();
      if (/^\d+$/.test(id)) return { type: 'embed', url: `https://player.vimeo.com/video/${id}` };
    }
    if (/\.(mp4|webm|ogg|mov|m4v)(\?|$)/i.test(value) || host.includes('cloudinary.com')) return { type: 'native', url: value };
  } catch {
    // Invalid legacy URLs are displayed with the external-link fallback.
  }
  return { type: 'external', url: value };
};

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/videos')
      .then((response) => setVideos(response.data))
      .catch(() => setError('Unable to load videos. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  const player = selected ? playerFor(selected.videoUrl) : null;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[#0a2a66]">Videos</h1>
        <p className="text-center text-gray-600 mt-3 mb-12">College events, activities and memorable moments.</p>
        {loading && <p className="text-center">Loading videos...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && videos.length === 0 && <p className="text-center text-gray-500">No videos added yet.</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <article key={video._id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button type="button" onClick={() => setSelected(video)} className="relative block w-full group" aria-label={`Play ${video.title}`}>
                <img src={video.thumbnailUrl || FALLBACK} onError={(event) => { event.currentTarget.src = FALLBACK; }} alt={`${video.title} thumbnail`} className="w-full aspect-video object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition"><span className="rounded-full bg-white p-5 text-[#0a2a66] shadow"><FiPlay size={30} /></span></span>
              </button>
              <div className="p-5"><h2 className="text-xl font-semibold">{video.title}</h2>{video.description && <p className="mt-2 text-gray-600 line-clamp-3">{video.description}</p>}</div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[70] bg-black/80 p-4 flex items-center justify-center" onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden" onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute right-3 top-3 z-10 rounded-full bg-black/70 text-white p-2" aria-label="Close"><FiX size={24} /></button>
            {player.type === 'embed' && <iframe src={player.url} title={selected.title} className="w-full aspect-video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
            {player.type === 'native' && <video src={player.url} poster={selected.thumbnailUrl || FALLBACK} className="w-full max-h-[80vh]" controls autoPlay />}
            {player.type === 'external' && <div className="relative aspect-video flex flex-col items-center justify-center text-white text-center p-8"><img src={selected.thumbnailUrl || FALLBACK} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" /><p className="relative mb-5">This video provider does not allow playback inside the website.</p><a href={player.url} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-2 bg-white text-[#0a2a66] px-5 py-3 rounded-lg font-semibold">Open video <FiExternalLink /></a></div>}
          </div>
        </div>
      )}
    </main>
  );
};

export default Video;
