import React, { useState, useEffect } from 'react';
import { Briefcase, Code, Cloud, Cpu, Star, Menu, X, User, Globe, ShoppingCart, BookOpen, Banknote, Home, Layers, FolderOpen, Mail } from 'lucide-react';

// Data Profile (Translated to English)
const profile = {
  name: "Eko Wahyu Saputro",
  title: "Senior Software Engineer",
  yearsOfExperience: 10,
  tagline: "Leveraging 10 Years of Experience in Building High-Scale Digital Solutions Across Diverse Industries.",
  imageUrl: "/public/profile.jpg", // Dark theme placeholder
  expertise: [
    { icon: Code, title: "Web Development", details: "Full-Stack frontend and backend development using React, Next.js, Node.js, and TypeScript." },
    { icon: Briefcase, title: "Mobile Development", details: "Expertise in cross-platform development using **Flutter** and React Native, alongside Native Development (Swift/Kotlin) for high-performance iOS and Android applications." },
    { icon: Cloud, title: "Cloud Setup & DevOps", details: "Infrastructure management on AWS/GCP, containerization (Docker, Kubernetes), and automated CI/CD pipelines." },
    { icon: Cpu, title: "AI Automation", details: "Implementation of simple AI/ML models for business process automation and data optimization." },
    { icon: Star, title: "Architecture Design", details: "Designing scalable and resilient microservices and monolithic architectures for high-transaction systems (Digital Bank, E-commerce)." },
  ],
  portfolio: [
    { 
      title: "Internal Application Development & Maintenance (Telkomsel)", 
      category: "Telecommunication", 
      icon: Globe, 
      description: "Provided comprehensive support and feature development for mission-critical internal applications at Telkomsel, ensuring operational continuity and efficiency for large-scale enterprise use." 
    },
    { 
      title: "B2B Marketplace and Automotive E-commerce Platforms", 
      category: "E-commerce", 
      icon: ShoppingCart, 
      description: "Developed and maintained high-transaction e-commerce platforms, including Bizzy.com (B2B marketplace) and Garasi.id (used car buying/selling with integrated retail). Focused on scalability, transaction security, and user experience." 
    },
    { 
      title: "Digital Transformation for Educational Institutions (Al-Azhar Group)", 
      category: "Education Startup", 
      icon: BookOpen, 
      description: "Spearheaded the digitization of school management and learning systems for the Al-Azhar group, implementing robust solutions to enhance administrative efficiency and deliver modern learning experiences." 
    },
    { 
      title: "Core Digital Banking System Contribution (Bank Jago)", 
      category: "Digital Bank", 
      icon: Banknote, 
      description: "Played a vital role in developing and securing core banking services for Bank Jago, focusing on high availability, regulatory compliance, and pioneering modern digital banking functionalities." 
    },
  ]
};

// Header/Navbar Component
const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    // Updated with specific Lucide icons for visual appeal
    { id: 'home', label: 'Home', icon: Home },
    { id: 'expertise', label: 'Expertise', icon: Layers },
    { id: 'portfolio', label: 'Portfolio', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm shadow-xl border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400 tracking-tight">
          <User className="inline mr-2" size={24} />
          {profile.name}
        </h1>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-blue-400 transition duration-300 font-medium tracking-wider flex items-center" // Added flex items-center
            >
              <item.icon className="w-4 h-4 mr-2" /> {/* Icon added */}
              {item.label.toUpperCase()}
            </button>
          ))}
        </nav>
        <button className="md:hidden text-gray-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute w-full bg-gray-900 shadow-xl transition-all duration-300`}
      >
        <nav className="flex flex-col space-y-2 p-4 border-t border-blue-800">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsOpen(false);
              }}
              className="text-left py-3 px-4 text-gray-200 hover:bg-blue-900 rounded-lg transition duration-300 font-medium flex items-center" // Added flex items-center
            >
              <item.icon className="w-5 h-5 mr-3 text-blue-400" /> {/* Icon added */}
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

// Home Section Component
const HomeSection = () => (
  <section id="home" className="pt-24 min-h-screen flex items-center bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
      <div className="flex justify-center mb-8">
        <img
          src={profile.imageUrl}
          alt={`Photo of ${profile.name}`}
          className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight">
        {/* Added prominent Star icon for impact */}
        <Star className="inline w-8 h-8 sm:w-12 sm:h-12 text-yellow-400 mr-2 sm:mr-4 align-middle" />
        {profile.name}
      </h2>
      <p className="text-2xl sm:text-3xl text-blue-400 font-semibold mb-6">
        {profile.title}
      </p>
      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
        {profile.tagline}
      </p>
      <div className="flex justify-center space-x-4">
        <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-lg text-gray-900 bg-blue-400 hover:bg-blue-300 transition duration-300">
          <Briefcase className="w-5 h-5 mr-2" />
          {profile.yearsOfExperience} Years of Experience
        </span>
      </div>
    </div>
  </section>
);

// Expertise Section Component
const ExpertiseSection = () => (
  <section id="expertise" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white text-center mb-4">
        Technical Expertise Areas
      </h2>
      <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Cross-platform and cross-industry skills to deliver robust end-to-end solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profile.expertise.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border-t-4 border-blue-500"
          >
            <item.icon className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Portfolio Section Component
const PortfolioSection = () => (
  <section id="portfolio" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white text-center mb-4">
        Selected Project Portfolio
      </h2>
      <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Case studies from my experience in Telecommunication, E-commerce, Education, and Digital Banking.
      </p>

      <div className="space-y-8">
        {profile.portfolio.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-xl flex flex-col md:flex-row items-start hover:shadow-2xl transition duration-300 border border-gray-700"
          >
            <div className={`flex-shrink-0 w-2 h-full md:h-auto md:w-2 rounded-full ${index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'} md:mr-6`}></div>
            <div className="flex-grow mt-4 md:mt-0">
              {/* Using inline-flex to align the new icon with the category text */}
              <span className="inline-flex items-center bg-blue-900 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <item.icon className="w-3 h-3 mr-1" /> 
                {item.category}
              </span>
              <h3 className="2xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Footer/Contact Section Component
const FooterSection = () => (
  <footer id="contact" className="bg-gray-900 text-white py-12 border-t border-blue-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h3 className="text-2xl font-bold mb-4 text-blue-400">Ready for Collaboration?</h3>
      <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
        I am always open to discussing new opportunities in software development, architecture consulting, or AI projects.
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Replace with your actual links and email */}
        <a
          href="mailto:saputro.ekowayz@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-gray-900 bg-blue-400 hover:bg-blue-300 transition duration-300"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/ekowahyus"
          className="inline-flex items-center justify-center px-6 py-3 border border-blue-500 text-base font-medium rounded-full shadow-sm text-white bg-transparent hover:bg-blue-800 transition duration-300"
        >
          View LinkedIn
        </a>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-700">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {profile.name}. Built by Eko wahyu saputro.
        </p>
      </div>
    </div>
  </footer>
);

// Main Application Component
const App = () => {
  // Function to smooth scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset to compensate for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Effect to handle URL hash changes and set document title
  useEffect(() => {
    // Set document title for SEO
    document.title = `${profile.name} - ${profile.title}`;

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToSection(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased bg-gray-900">
      {/* Note: In a real app, external libraries like React-Helmet would manage meta tags */}
      <Header scrollToSection={scrollToSection} />
      <main>
        <HomeSection />
        <ExpertiseSection />
        <PortfolioSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default App;
