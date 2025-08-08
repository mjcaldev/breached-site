'use client';

import React, { useState } from 'react';
import { Play, Eye, Calendar } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoId: string;
  duration: string;
  views: string;
  date: string;
  featured: boolean;
}

const VideoShowcase = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const videos = [
    {
      id: 1,
      title: 'Finding Purpose in Your 20s',
      description: 'A powerful message about discovering God\'s plan for your life during your young adult years.',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoId: 'dQw4w9WgXcQ', // Replace with actual YouTube video IDs
      duration: '32:15',
      views: '2.1K',
      date: 'Jan 8, 2025',
      featured: true,
    },
    {
      id: 2,
      title: 'Community & Belonging',
      description: 'Why community matters and how to build meaningful relationships.',
      thumbnail: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoId: 'dQw4w9WgXcQ',
      duration: '28:42',
      views: '1.8K',
      date: 'Dec 25, 2024',
      featured: false,
    },
    {
      id: 3,
      title: 'Navigating Career & Calling',
      description: 'Balancing professional ambitions with spiritual calling.',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoId: 'dQw4w9WgXcQ',
      duration: '35:20',
      views: '1.5K',
      date: 'Dec 18, 2024',
      featured: false,
    },
    {
      id: 4,
      title: 'Dating & Relationships',
      description: 'Biblical principles for healthy relationships in your twenties.',
      thumbnail: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800',
      videoId: 'dQw4w9WgXcQ',
      duration: '41:18',
      views: '2.9K',
      date: 'Dec 11, 2024',
      featured: false,
    },
  ];

  const handleVideoPlay = (video: Video) => {
    setSelectedVideo(video);
  };

  return (
    <section id="videos" className="py-20 bg-gradient-to-br from-paynes-gray-50 to-verdigris-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black-olive mb-6 animate-fadeInUp">
            Latest Messages
          </h2>
          <p className="text-xl text-black-olive/70 max-w-3xl mx-auto animate-fadeInUp">
            Watch our recent teachings and testimonies that speak directly to the young adult experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Featured Video */}
          <div className="order-2 lg:order-1">
            {videos.filter(video => video.featured).map((video) => (
              <div key={video.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative group cursor-pointer" onClick={() => handleVideoPlay(video)}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-verdigris hover:bg-verdigris-400 text-white p-4 rounded-full shadow-lg transform group-hover:scale-110 transition-all duration-300">
                      <Play size={32} fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-verdigris text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Latest
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black-olive mb-4">{video.title}</h3>
                  <p className="text-black-olive/70 mb-6 text-lg leading-relaxed">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-black-olive/60 text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye size={16} />
                        <span>{video.views} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Grid */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-black-olive mb-8">More Messages</h3>
            <div className="space-y-6">
              {videos.filter(video => !video.featured).map((video) => (
                <div key={video.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => handleVideoPlay(video)}>
                  <div className="flex">
                    <div className="relative flex-shrink-0 w-40 h-24 group">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-verdigris/80 text-white p-2 rounded-full">
                          <Play size={16} fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white px-2 py-0.5 rounded text-xs">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4 flex-grow">
                      <h4 className="font-semibold text-black-olive mb-1 line-clamp-2">{video.title}</h4>
                      <p className="text-black-olive/60 text-sm mb-2 line-clamp-2">{video.description}</p>
                      
                      <div className="flex items-center gap-3 text-black-olive/50 text-xs">
                        <div className="flex items-center gap-1">
                          <Eye size={12} />
                          <span>{video.views}</span>
                        </div>
                        <span>•</span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedVideo(null)}>
            <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black-olive mb-2">{selectedVideo.title}</h3>
                <p className="text-black-olive/70">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoShowcase;