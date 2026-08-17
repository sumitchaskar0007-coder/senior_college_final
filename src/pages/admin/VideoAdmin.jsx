import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiEdit2, FiPlus, FiTrash2, FiVideo, FiX } from 'react-icons/fi';
import toast from 'react-hot-toast';
import api from '../../api';

const EMPTY = { title: '', description: '', sourceType: 'upload', videoLink: '', video: null };
const FALLBACK = '/images/default-video-thumbnail.svg';

const VideoAdmin = () => {
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchVideos = async () => {
    try {
      const response = await api.get('/videos');
      setVideos(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to load videos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchVideos(); }, []);

  const closeModal = () => { setShowModal(false); setEditing(null); setForm(EMPTY); };
  const editVideo = (video) => {
    setEditing(video);
    setForm({ title: video.title, description: video.description || '', sourceType: video.sourceType, videoLink: video.sourceType === 'link' ? video.videoUrl : '', video: null });
    setShowModal(true);
  };

  const submit = async (event) => {
    event.preventDefault();
    if (form.sourceType === 'upload' && !form.video && (!editing || editing.sourceType !== 'upload')) return toast.error('Please select a video file');
    const data = new FormData();
    data.append('title', form.title);
    data.append('description', form.description);
    data.append('sourceType', form.sourceType);
    if (form.sourceType === 'link') data.append('videoLink', form.videoLink.trim());
    if (form.video) data.append('video', form.video);
    setSaving(true);
    try {
      if (editing) await api.put(`/videos/${editing._id}`, data);
      else await api.post('/videos', data);
      toast.success(`Video ${editing ? 'updated' : 'added'} successfully`);
      closeModal();
      await fetchVideos();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Unable to save video');
    } finally {
      setSaving(false);
    }
  };

  const deleteVideo = async (video) => {
    if (!window.confirm(`Delete “${video.title}”?`)) return;
    try {
      await api.delete(`/videos/${video._id}`);
      toast.success('Video deleted successfully');
      await fetchVideos();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Unable to delete video');
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm"><div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between"><div className="flex items-center gap-4"><Link to="/admin/dashboard" aria-label="Back"><FiArrowLeft size={22} /></Link><h1 className="text-2xl font-semibold">Video Management</h1></div><button onClick={() => setShowModal(true)} className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"><FiPlus /> Add Video</button></div></header>
      <section className="max-w-7xl mx-auto px-4 py-8">
        {loading && <p className="text-center">Loading...</p>}
        {!loading && videos.length === 0 && <p className="text-center text-gray-500 py-12">No videos found. Add your first video.</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => <article key={video._id} className="bg-white rounded-xl shadow overflow-hidden"><img src={video.thumbnailUrl || FALLBACK} onError={(event) => { event.currentTarget.src = FALLBACK; }} alt="" className="w-full aspect-video object-cover" /><div className="p-4"><div className="flex justify-between gap-3"><h2 className="text-lg font-semibold">{video.title}</h2><span className="text-xs uppercase bg-blue-50 text-blue-700 h-fit px-2 py-1 rounded">{video.sourceType}</span></div><p className="text-sm text-gray-600 mt-2 line-clamp-2">{video.description || 'No description'}</p><div className="flex justify-end gap-2 mt-4"><button onClick={() => editVideo(video)} className="p-2 text-blue-600 hover:bg-blue-50 rounded" aria-label="Edit"><FiEdit2 /></button><button onClick={() => deleteVideo(video)} className="p-2 text-red-600 hover:bg-red-50 rounded" aria-label="Delete"><FiTrash2 /></button></div></div></article>)}
        </div>
      </section>

      {showModal && <div className="fixed inset-0 z-[70] bg-black/50 p-4 flex items-center justify-center"><div className="bg-white rounded-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto"><div className="flex justify-between mb-5"><h2 className="text-xl font-semibold">{editing ? 'Edit Video' : 'Add Video'}</h2><button onClick={closeModal} aria-label="Close"><FiX size={22} /></button></div><form onSubmit={submit} className="space-y-4">
        <label className="block"><span className="block mb-1 font-medium">Title</span><input required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="w-full border rounded-lg px-3 py-2" /></label>
        <label className="block"><span className="block mb-1 font-medium">Description</span><textarea rows="3" value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} className="w-full border rounded-lg px-3 py-2" /></label>
        <fieldset><legend className="font-medium mb-2">Video source</legend><div className="grid grid-cols-2 gap-3"><label className={`border rounded-lg p-3 cursor-pointer ${form.sourceType === 'upload' ? 'border-blue-600 bg-blue-50' : ''}`}><input type="radio" className="mr-2" checked={form.sourceType === 'upload'} onChange={() => setForm({ ...form, sourceType: 'upload' })} />Upload</label><label className={`border rounded-lg p-3 cursor-pointer ${form.sourceType === 'link' ? 'border-blue-600 bg-blue-50' : ''}`}><input type="radio" className="mr-2" checked={form.sourceType === 'link'} onChange={() => setForm({ ...form, sourceType: 'link' })} />Link</label></div></fieldset>
        {form.sourceType === 'upload' ? <label className="block"><span className="block mb-1 font-medium">Video file</span><input type="file" accept="video/*,.mkv,.avi,.mov,.m4v" onChange={(event) => setForm({ ...form, video: event.target.files[0] || null })} className="w-full border rounded-lg p-2" />{editing?.sourceType === 'upload' && <small className="text-gray-500">Leave empty to keep the existing video.</small>}<small className="block text-gray-500 mt-1">Maximum size depends on your Cloudinary plan.</small></label> : <label className="block"><span className="block mb-1 font-medium">Video link</span><input required type="url" placeholder="https://youtube.com/... or any public video URL" value={form.videoLink} onChange={(event) => setForm({ ...form, videoLink: event.target.value })} className="w-full border rounded-lg px-3 py-2" /></label>}
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"><FiVideo size={28} className="text-[#0a2a66]" /><p className="text-sm text-gray-600">Uploaded videos automatically use a frame from the video as their thumbnail.</p></div>
        <div className="flex justify-end gap-3"><button type="button" onClick={closeModal} className="px-4 py-2 border rounded-lg">Cancel</button><button disabled={saving} className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-60">{saving ? 'Saving...' : editing ? 'Update Video' : 'Add Video'}</button></div>
      </form></div></div>}
    </main>
  );
};

export default VideoAdmin;
