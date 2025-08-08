'use client';

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle, Users, Heart } from 'lucide-react';

const Connect = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'ya@church.com',
      action: 'mailto:ya@church.com',
    },
    {
      icon: Phone,
      title: 'Call/Text',
      content: '(555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Church St, City, ST 12345',
      action: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
  ];

  const connectOptions = [
    {
      icon: MessageCircle,
      title: 'Join Our Group Chat',
      description: 'Connect with other young adults throughout the week',
      action: 'Join WhatsApp Group',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: 'Find a small group that meets during the week for deeper connection',
      action: 'Find a Group',
      color: 'bg-verdigris hover:bg-verdigris-400',
    },
    {
      icon: Heart,
      title: 'Prayer Requests',
      description: 'Share your prayer needs with our caring community',
      action: 'Submit Request',
      color: 'bg-paynes-gray hover:bg-paynes-gray-400',
    },
  ];

  return (
    <section id="connect" className="py-20 bg-gradient-to-br from-black-olive to-paynes-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
            Let's Connect
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-fadeInUp">
            We'd love to hear from you! Whether you have questions, want to get involved, or just want to say hi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.action}
                  className="flex items-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-verdigris p-3 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{contact.title}</h4>
                    <p className="text-white/80">{contact.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Connection Options */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Ways to Connect</h3>
            <div className="space-y-6">
              {connectOptions.map((option, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="bg-verdigris p-3 rounded-full mr-4 flex-shrink-0">
                      <option.icon size={24} />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-lg mb-2">{option.title}</h4>
                      <p className="text-white/80 mb-4 leading-relaxed">{option.description}</p>
                      <button className={`${option.color} text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:scale-105`}>
                        {option.action}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-white/80 mb-6">Get weekly updates about events, messages, and community news.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-full bg-white/20 border border-white/30 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-verdigris"
            />
            <button className="bg-verdigris hover:bg-verdigris-400 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;