import { useEffect, useRef } from 'react';

interface Stat {
  value: string;
  label: string;
}

interface AboutProps {
  aboutText?: string;
  stats?: Stat[];
}

const About = ({
  aboutText = "Design is not just a job for me, it's a passion that drives me.",
  stats = [
    { value: '+320', label: 'Our step-by-step to simplify your Excellent Project Powerful!' },
    { value: '+280', label: 'Our step-by-step to simplify your Excellent Project.Our step-by-step to simplify' }
  ]
}: AboutProps) => {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about"
      ref={aboutRef}
      className="section-padding animate-fade-up"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About + Video */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xs font-medium bg-[hsl(var(--muted-light))] px-4 py-2 rounded-full border border-[hsl(var(--border))]">
                About Me
              </span>
            </div>
            
            <h2 className="text-h1 leading-tight max-w-lg">
              Design has always been more than just a job – it's my passion.
            </h2>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
                alt="Designer working on laptop"
                className="w-full rounded-[var(--radius-lg)] aspect-[5/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8 pt-20">
            <div className="text-right text-sm text-[hsl(var(--muted))] max-w-xs ml-auto">
              Design is not just a job for me, it's a passion that drives me.
            </div>
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-left">
                <div className="text-h1 font-bold mb-2">{stat.value}</div>
                <div className="text-[hsl(var(--muted))] text-sm leading-relaxed max-w-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;