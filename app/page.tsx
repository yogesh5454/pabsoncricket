'use client'
import React, {useState} from 'react';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { PointsTable } from './components/Pointstable/Pointstable';
import { Schedule } from './components/Shedule/Shedule';
import { Teams } from './components/Teams/Teams';
import { Sponsors } from './components/Sponsors/Sponsors';
import { About } from './components/About/About';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';
import { Results } from './components/Results/Results';
import NewsPopup from './components/News/NewsPopup';

const Home: React.FC = () => {
  const [showNews, setShowNews] = useState(true); // control popup

  const newsImages = [
    '/news/news1.jpeg',
    '/news/news2.jpeg',
    '/news/news3.jpeg',
  ];

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* News Popup */}
      {showNews && <NewsPopup images={newsImages} />}

      <Navbar />

      {/* Sections with IDs for smooth scrolling */}
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="teams">
        <Teams />
      </section>
      <section id="schedule">
        <Schedule />
      </section>
      <section id="results">
        <Results />
      </section>
      <section id="points">
        <PointsTable />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
