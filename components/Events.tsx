'use client';

import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'January: New Beginnings',
      date: 'January 15, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Main Campus - Fellowship Hall',
      description: 'Kick off the year with vision boarding, goal setting, and community building activities.',
      attendees: 45,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
    },
    {
      id: 2,
      title: 'Game Night & Fellowship',
      date: 'January 22, 2025',
      time: '7:00 PM - 10:00 PM',
      location: 'Youth Center',
      description: 'Board games, video games, and great conversation over pizza and snacks.',
      attendees: 32,
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      id: 3,
      title: 'Community Service Day',
      date: 'January 29, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Local Food Bank',
      description: 'Serve our community by volunteering at the local food bank and shelter.',
      attendees: 28,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
  ];

  return (
    <section id="events" className="py-20 bg-isabelline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black-olive mb-6 animate-fadeInUp">
            Upcoming Events
          </h2>
          <p className="text-xl text-black-olive/70 max-w-3xl mx-auto animate-fadeInUp">
            Join us for exciting events designed to build community, grow in faith, and serve others together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Event */}
          <div className="lg:col-span-2">
            {events.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 md:h-80">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-verdigris text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured Event
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black-olive mb-4">{event.title}</h3>
                  <p className="text-black-olive/70 mb-6 text-lg leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-black-olive/80">
                      <Calendar className="text-verdigris mr-3" size={20} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-black-olive/80">
                      <Clock className="text-verdigris mr-3" size={20} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-black-olive/80">
                      <MapPin className="text-verdigris mr-3" size={20} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-black-olive/80">
                      <Users className="text-verdigris mr-3" size={20} />
                      <span>{event.attendees} people interested</span>
                    </div>
                  </div>

                  <button className="bg-verdigris hover:bg-verdigris-400 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2">
                    Register Now
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Events List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black-olive mb-6">More Events</h3>
            {events.filter(event => !event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-32">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-black-olive mb-2">{event.title}</h4>
                  <p className="text-black-olive/60 text-sm mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-2 text-xs text-black-olive/70 mb-4">
                    <div className="flex items-center">
                      <Calendar className="text-verdigris mr-2" size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-verdigris mr-2" size={14} />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <button className="text-verdigris hover:text-verdigris-400 font-semibold text-sm flex items-center gap-1 transition-colors duration-200">
                    Learn More
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;