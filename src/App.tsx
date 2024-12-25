import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/hero/Hero';
import Courses from './components/courses/Courses';
import VideoSection from './components/videos/VideoSection';
import Team from './components/team/Team';
import Services from './components/services/Services';
import Partners from './components/partners/Partners';
import SuccessStories from './components/success/SuccessStories';
import DonateSection from './components/donate/DonateSection';
import FooterSection from './components/footer/FooterSection';
import ApplicationPopup from './components/application/ApplicationPopup';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Courses />
      <VideoSection />
      <Team />
      <Services />
      <Partners />
      <SuccessStories />
      <DonateSection />
      <FooterSection />
      <ApplicationPopup />
    </div>
  );
}

export default App;