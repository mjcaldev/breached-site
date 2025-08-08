import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black-olive text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <Heart className="text-verdigris mr-2" size={24} />
              <span className="text-2xl font-bold">Breached Young Adults Ministry</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Empowering young adults to discover their purpose, build community, and grow in faith together.
            </p>
            <p className="text-white/60 text-sm">
              Ages 18-30 • All backgrounds welcome
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-verdigris transition-colors duration-200">Home</a></li>
              <li><a href="#events" className="text-white/80 hover:text-verdigris transition-colors duration-200">Events</a></li>
              <li><a href="#videos" className="text-white/80 hover:text-verdigris transition-colors duration-200">Messages</a></li>
              <li><a href="#connect" className="text-white/80 hover:text-verdigris transition-colors duration-200">Connect</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <MapPin className="text-verdigris mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">123 Church Street<br />City, ST 12345</span>
              </div>
              <div className="flex items-center text-white/80">
                <Phone className="text-verdigris mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center text-white/80">
                <Mail className="text-verdigris mr-3 flex-shrink-0" size={18} />
                <span className="text-sm">ya@church.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Young Adults Ministry. Made with <Heart className="inline text-verdigris" size={16} /> for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;