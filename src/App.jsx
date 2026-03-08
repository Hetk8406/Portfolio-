import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AcademicsExperience from './components/AcademicsExperience';
import ProjectsGallery from './components/ProjectsGallery';
import CertificationsCourses from './components/CertificationsCourses';
import ContactFooter from './components/ContactFooter';
import userData from '../userProfileData.json';

function App() {
  const profileData = userData?.userProfileData;

  return (
    <div className="portfolio-app">
      <Navigation />
      <HeroSection userData={profileData} />
      <AcademicsExperience userData={profileData} />
      <ProjectsGallery userData={profileData} />
      <CertificationsCourses userData={profileData} />
      <ContactFooter userData={profileData} />
    </div>
  );
}

export default App;
