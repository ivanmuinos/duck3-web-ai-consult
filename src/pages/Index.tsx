
import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollAnimations from "@/components/ScrollAnimations";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <PageTransition>
        <div className="min-h-screen relative">
          <AnimatedBackground />
          <ScrollAnimations />
          <div className="relative z-20">
            <Header />
            <Hero />
            <Services />
            <About />
            <Contact />
            <Footer />
          </div>
        </div>
      </PageTransition>
    </>
  );
};

export default Index;
