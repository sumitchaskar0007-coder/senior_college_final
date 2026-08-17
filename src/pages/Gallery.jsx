import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import api from '../api';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  const fetchImages = async () => {
    try {
      const response = await api.get('/gallery');
      setImages(response.data);
      setError('');
    } catch (error) {
      console.error('Failed to fetch images:', error);
      setError('Unable to load gallery images. Please check your API connection.');
    } finally {
      setLoading(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>
        
        {error && <p className="text-center text-red-500 mb-6">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <article
              key={image._id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => openModal(image)}
                className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden group"
                aria-label={`Zoom ${image.title}`}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium">
                  Click to zoom
                </span>
              </button>
              <div className="p-5 h-36 flex flex-col">
                <h3 className="text-lg font-semibold mb-2 line-clamp-1">{image.title}</h3>
                {image.description && (
                  <p className="text-gray-600 line-clamp-3">{image.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        {images.length === 0 && (
          <p className="text-center text-gray-500">No images in the gallery yet.</p>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 flex items-center justify-center p-4 z-[70]"
            onClick={closeModal}
          >
            <Motion.div
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.82 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[92vh] bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="bg-black flex items-center justify-center max-h-[72vh]">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full max-h-[72vh] object-contain"
                />
              </div>
              <div className="p-5 max-h-48 overflow-y-auto">
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">
                  {selectedImage.description || 'No description available for this image.'}
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/70 text-white text-3xl leading-none hover:bg-black"
                aria-label="Close image preview"
              >
                &times;
              </button>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
