
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollAnimations from "@/components/ScrollAnimations";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative bg-black apple-black-bg">
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
  );
};

export default Index;
