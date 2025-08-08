import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VideoImageSection from '@/components/VideoImageSection';
import Events from '@/components/Events';
import AllEvents from '@/components/AllEvents';
import VideoShowcase from '@/components/VideoShowcase';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <VideoImageSection />
      <Events />
      <AllEvents />
      <VideoShowcase />
      <Connect />
      <Footer />
    </main>
  );
}