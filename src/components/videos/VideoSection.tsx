import React from 'react';
import { Play } from 'lucide-react';
import SectionTitle from '../shared/SectionTitle';

const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    title: 'Professional Data Analytics Success Stories',
    duration: '3:45',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    title: ' AI & Machine Learning Webinar (Online)',
    duration: '4:20',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    title: 'Fundemental Data Analysis With Python',
    duration: '5:15',
  },
];

const VideoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Videos" 
          subtitle="Watch our students and instructors in action"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="relative group">
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