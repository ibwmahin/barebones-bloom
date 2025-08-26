import { useEffect, useRef } from 'react';
import heroPortrait from '../assets/hero-portrait.jpg';

interface HeroProps {
  titleLines?: [string, string];
  subtitle?: string;
  portraitUrl?: string;
  introText?: string;
}

const Hero = ({
  titleLines = ['Product', 'Designer'],
  subtitle = 'Creating Intuitive Digital Experiences',
  portraitUrl = heroPortrait,
  introText = "Hi, I'm Alex. A UI/UX Designer creating intuitive digital experiences."
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-display">
                <span className="block">{titleLines[0]}</span>
                <span className="block">{titleLines[1]}</span>
              </h1>
              <p className="text-xl text-muted max-w-lg">
                {subtitle}
              </p>
            </div>
            
            {/* Author Intro */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium bg-[hsl(var(--muted-light))] px-3 py-1 rounded-full">
                  About Me
                </span>
              </div>
              <p className="text-[hsl(var(--muted))] text-lg leading-relaxed max-w-md">
                {introText}
              </p>
            </div>
          </div>

          {/* Right Column - Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="card card-interactive max-w-sm">
              <img
                src={portraitUrl}
                alt="Professional portrait"
                className="w-full h-auto rounded-[var(--radius-lg)]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;