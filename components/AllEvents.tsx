'use client';

import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const AllEvents = () => {
  const allEvents = [
    {
      id: 1,
      title: 'January: New Beginnings',
      date: 'January 15, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Main Campus - Fellowship Hall',
      description: 'Kick off the year with vision boarding, goal setting, and community building activities. Join us for an inspiring evening of reflection and planning as we set intentions for the new year.',
      attendees: 45,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Monthly Theme',
    },
    {
      id: 2,
      title: 'Game Night & Fellowship',
      date: 'January 22, 2025',
      time: '7:00 PM - 10:00 PM',
      location: 'Youth Center',
      description: 'Board games, video games, and great conversation over pizza and snacks. Bring your competitive spirit and get ready for an evening of fun and laughter with your community.',
      attendees: 32,
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Social',
    },
    {
      id: 3,
      title: 'Community Service Day',
      date: 'January 29, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Local Food Bank',
      description: 'Serve our community by volunteering at the local food bank and shelter. Make a tangible difference in the lives of those in need while building bonds with fellow ministry members.',
      attendees: 28,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Service',
    },
    {
      id: 4,
      title: 'Worship Night',
      date: 'February 5, 2025',
      time: '7:30 PM - 9:30 PM',
      location: 'Main Sanctuary',
      description: 'An intimate evening of worship, prayer, and reflection. Come as you are and experience God\'s presence in a relaxed, authentic atmosphere with live music and testimonies.',
      attendees: 55,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Worship',
    },
    {
      id: 5,
      title: 'Coffee & Conversations',
      date: 'February 8, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Local Coffee Shop',
      description: 'Casual meetup for coffee, pastries, and meaningful conversations. Perfect for newcomers to get acquainted and for regulars to deepen friendships in a relaxed setting.',
      attendees: 18,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Social',
    },
    {
      id: 6,
      title: 'February: Love & Relationships',
      date: 'February 12, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Main Campus - Fellowship Hall',
      description: 'Explore biblical perspectives on love, dating, and relationships. Whether you\'re single, dating, or in a relationship, join us for honest discussions and practical wisdom.',
      attendees: 42,
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Monthly Theme',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Monthly Theme':
        return 'bg-verdigris text-white';
      case 'Social':
        return 'bg-paynes-gray text-white';
      case 'Service':
        return 'bg-black-olive text-white';
      case 'Worship':
        return 'bg-timberwolf text-black-olive';
      default:
        return 'bg-isabelline text-black-olive';
    }
  };

  return (
    <section id="all-events" className="py-20 bg-gradient-to-br from-isabelline-50 to-timberwolf-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black-olive mb-6 animate-fadeInUp">
            All Events
          </h2>
          <p className="text-xl text-black-olive/70 max-w-3xl mx-auto animate-fadeInUp">
            Your complete guide to all ministry activities this month. Mark your calendars and join us for these amazing opportunities to grow, serve, and connect.
          </p>
        </div>

        <div className="space-y-8">
          {allEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/3 relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-8">
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-black-olive mb-4">{event.title}</h3>
                      <p className="text-black-olive/70 mb-6 text-lg leading-relaxed">{event.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-black-olive/80">
                          <Calendar className="text-verdigris mr-3 flex-shrink-0" size={20} />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center text-black-olive/80">
                          <Clock className="text-verdigris mr-3 flex-shrink-0" size={20} />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center text-black-olive/80">
                          <MapPin className="text-verdigris mr-3 flex-shrink-0" size={20} />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center text-black-olive/80">
                          <Users className="text-verdigris mr-3 flex-shrink-0" size={20} />
                          <span className="text-sm">{event.attendees} interested</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-black-olive/10">
                      <button className="bg-verdigris hover:bg-verdigris-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
                        Register Now
                        <ArrowRight size={18} />
                      </button>
                      <button className="border-2 border-verdigris text-verdigris hover:bg-verdigris hover:text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black-olive mb-4">
              Don't Miss Out!
            </h3>
            <p className="text-black-olive/70 mb-6">
              Stay updated with all our events and activities. Follow us on social media or join our newsletter for the latest announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-verdigris hover:bg-verdigris-400 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Join Newsletter
              </button>
              <button className="border-2 border-paynes-gray text-paynes-gray hover:bg-paynes-gray hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllEvents;