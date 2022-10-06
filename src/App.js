import React from "react";
import Header from "./components/Navbar/Header";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import MobileDevelopment from "./components/Services/MobileDevelopment";
import WebAppDevelopmentServices from "./components/Services/WebAppDevelopmentServices";
import WebDevelopment from "./components/Services/WebDevelopment";
import UIUXDevelopment from "./components/Services/UIUXDevelopment";
import QAServices from "./components/Services/QAServices";
import DevOpsServices from "./components/Services/DevOpsServices";
import StaffAugmentation from "./components/Services/StaffAugmentation";
import StartupServices from "./components/Services/StartupServices";
import Portfolio from "./components/Portfolio";
import Careers from "./components/Careers";
import ApplyNow from "./components/Careers/ApplyNow";

import NotFoundPage from "./NotFoundPage.js";

import Blogs from "./components/Blogs";
import LatestBlogs from "./components/Blogs/LatestBlogs";
import ClientGuides from "./components/Blogs/ClientGuides";
import TechBlogs from "./components/Blogs/Tech";
import DesignBlogs from "./components/Blogs/DesignBlogs";
import CaseStudiesBlogs from "./components/Blogs/CaseStudiesBlogs";
import NextHorizonBlogs from "./components/Blogs/NextHorizonBlogs";
// import BlogPost from "./components/Blogs/BlogPost";

import GalleryComponent from "./components/Gallery";
import IOS from "./components/Services/MobileDevelopment/IOS";
import Android from "./components/Services/MobileDevelopment/Android";
import Flutter from "./components/Services/MobileDevelopment/Flutter";
import ApplicationModernizationService from "./components/Services/ApplicationModernizationService";
import DedicatedDevelopmentTeamServices from "./components/Services/DedicatedDevelopmentTeamServices";
import DiscoveryPhaseProcess from "./components/Services/DiscoveryPhaseProcess";
import MVPDevelopment from "./components/Services/MVPDevelopment";
import CTOAsAService from "./components/Services/CTOAsaService";
import Login from "./components/Login";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-screen fixed top-0 drop-shadow-lg z-50">
        <Header />
      </div>

      <Routes>
        <Route exect path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="about" element="" />

        {/* Services Routes  */}
        <Route path="services" element={<Services />} />
        <Route
          path="services/mobile-development"
          element={<MobileDevelopment />}
        />
        <Route path="services/mobile-development/ios" element={<IOS />} />
        <Route
          path="services/mobile-development/android"
          element={<Android />}
        />
        <Route
          path="services/mobile-development/flutter"
          element={<Flutter />}
        />
        <Route
          path="services/web-application-development-services"
          element={<WebAppDevelopmentServices />}
        />
        <Route path="services/web-development" element={<WebDevelopment />} />

        <Route path="services/ui-ux-design" element={<UIUXDevelopment />} />
        <Route path="services/qa-services" element={<QAServices />} />
        <Route path="services/devops-services" element={<DevOpsServices />} />
        <Route
          path="services/staff-augmentation"
          element={<StaffAugmentation />}
        />
        <Route path="services/startup-services" element={<StartupServices />} />
        <Route
          path="services/application-modernization-service"
          element={<ApplicationModernizationService />}
        />
        <Route
          path="services/dedicated-development-team-services"
          element={<DedicatedDevelopmentTeamServices />}
        />
        <Route
          path="services/discovery-phase-process"
          element={<DiscoveryPhaseProcess />}
        />
        <Route
          path="services/mvp-development-services"
          element={<MVPDevelopment />}
        />
        <Route path="services/cto-as-a-services" element={<CTOAsAService />} />

        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />

        {/* Blogs Routes */}
        <Route exact path="blogs/" element={<Blogs />}>
          <Route
            index
            path="latest"
            element={<LatestBlogs selectedCategory="latest" />}
          />
          <Route
            path="Technologies"
            element={<TechBlogs selectedCategory="Technologies" />}
          />
          <Route
            path="Case%20Studies"
            element={<CaseStudiesBlogs selectedCategory="Case Studies" />}
          />
          <Route
            path="UI/UX%20Design"
            element={<DesignBlogs selectedCategory="UI/UX Design" />}
          />
          <Route
            path="Client%20Guides"
            element={<ClientGuides selectedCategory="Client Guides" />}
          />
          <Route
            path="Next%20Horizon"
            element={<NextHorizonBlogs selectedCategory="Next Horizon" />}
          />
        </Route>

        <Route path="gallery" element={<GalleryComponent />} />
        <Route path="careers" element={<Careers />} />
        <Route path="careers/:id" element={<ApplyNow />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* 
      <Services /> */}

      <Footer />
    </div>
  );
}

export default App;
