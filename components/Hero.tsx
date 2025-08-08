'use client';

import React from 'react';
import { ArrowRight, Users, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-paynes-gray/80 via-verdigris/70 to-paynes-gray-700/80"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-isabelline to-timberwolf">
              Purpose
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-isabelline/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join a community of young adults seeking God's heart, building meaningful relationships, and making a difference in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-verdigris hover:bg-verdigris-400 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
              Join Us This Week
              <ArrowRight size={20} />
            </button>
            
            <button className="border-2 border-isabelline text-isabelline hover:bg-isabelline hover:text-paynes-gray font-semibold py-4 px-8 rounded-full transition-all duration-300">
              Watch Online
            </button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <Users className="text-paynes-gray mb-4 mx-auto" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Community</h3>
              <p className="text-isabelline/80 text-sm">Ages 18-30 gathering for friendship, growth, and faith</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <MapPin className="text-paynes-gray mb-4 mx-auto" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
              <p className="text-isabelline/80 text-sm">Main Campus - Room 205<br />Every Sunday</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <Clock className="text-paynes-gray mb-4 mx-auto" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Time</h3>
              <p className="text-isabelline/80 text-sm">6:00 PM - 8:00 PM<br />Dinner included</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;