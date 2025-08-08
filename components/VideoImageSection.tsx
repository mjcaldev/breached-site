'use client';

import React from 'react';
import { Play } from 'lucide-react';

const VideoImageSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* YouTube Video Embed */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Breached Young Adults Ministry Welcome Video"
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-black-olive mb-3">
                Welcome to Our Community
              </h3>
              <p className="text-black-olive/70 leading-relaxed">
                Watch our welcome video to get a glimpse of what makes our young adults ministry special. 
                Discover the heart behind our community and see how we're making a difference together.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Young adults in fellowship and community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-olive/20 to-transparent"></div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-black-olive mb-3">
                Building Lasting Friendships
              </h3>
              <p className="text-black-olive/70 leading-relaxed">
                Our ministry is built on authentic relationships and genuine community. 
                Come as you are and discover friendships that will last a lifetime while growing in faith together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoImageSection;