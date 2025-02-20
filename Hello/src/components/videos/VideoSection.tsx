import React, { useState } from 'react';
import { Play } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    title: 'Global Nexus Institute is Accredited by NCC',
    duration: '3:45',
    link: 'https://www.youtube.com/embed/su_vds3i8hA', // Embed link
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    title: 'Unlock Your Potential: Enroll With Us Today',
    duration: '1:24',
    link: 'https://www.youtube.com/embed/lAGO8RgqE8c?start=60', // Embed link
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    title: 'How we Teach at Global Nexus Institute  ',
    duration: '5:15',
    link: 'https://www.youtube.com/embed/QdaAd4E0gSg', // Embed link
  },
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Videos"
          subtitle="Watch our students and instructors in action"
        />

        {/* Video Player */}
        {selectedVideo && (
          <div className="mb-8">
            <iframe
              src={selectedVideo}
              title="Selected Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-lg"
            ></iframe>
          </div>
        )}

        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedVideo(video.link)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 text-white text-sm rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
