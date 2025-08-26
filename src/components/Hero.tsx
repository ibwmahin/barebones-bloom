import { useEffect, useRef } from 'react';

interface HeroProps {
  titleLines?: [string, string];
  subtitle?: string;
  portraitUrl?: string;
  introText?: string;
}

const Hero = ({
  titleLines = ['Product', 'Designer'],
  subtitle = 'Creating Intuitive Digital Experiences',
  portraitUrl = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
  introText = "Hi, I'm Duvy. A UI/UX Designer Creating Intuitive Digital Experiences."
}: HeroProps) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center section-padding animate-fade-up"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-8 pt-8">
            <div className="space-y-4">
              <h1 className="text-display leading-[0.9]">
                <span className="block">{titleLines[0]}</span>
                <span className="block">{titleLines[1]}</span>
              </h1>
            </div>
          </div>

          {/* Right Column - Portrait + Intro */}
          <div className="space-y-8">
            <div className="card max-w-sm ml-auto">
              <img
                src={portraitUrl}
                alt="Professional portrait"
                className="w-full h-auto rounded-[var(--radius-lg)]"
                loading="lazy"
              />
            </div>
            
            {/* Author Intro Text */}
            <div className="text-right max-w-sm ml-auto space-y-2">
              <p className="text-[hsl(var(--foreground))] font-medium leading-tight">
                {introText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;