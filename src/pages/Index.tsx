
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollAnimations from "@/components/ScrollAnimations";
import PageTransition from "@/components/PageTransition";
import LazySection from "@/components/LazySection";

// Lazy load components
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
      <p className="text-gray-400 text-sm">Cargando...</p>
    </div>
  </div>
);

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative bg-black apple-black-bg">
        <AnimatedBackground />
        <ScrollAnimations />
        <div className="relative z-20">
          <Header />
          <Hero />
          
          <LazySection>
            <Suspense fallback={<LoadingFallback />}>
              <Services />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          </LazySection>
          
          <LazySection>
            <Suspense fallback={<LoadingFallback />}>
              <Footer />
            </Suspense>
          </LazySection>
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
