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
  aboutText = "Design is not just a job for me, it's a passion that drives me. I believe in creating experiences that not only look beautiful but also solve real problems and make people's lives easier.",
  stats = [
    { value: '+320', label: 'Projects' },
    { value: '50+', label: 'Clients' },
    { value: '5+', label: 'Years' }
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
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2 mb-8">
              <span className="text-xs font-medium bg-[hsl(var(--muted-light))] px-3 py-1 rounded-full">
                About Me
              </span>
            </div>
            
            <h2 className="text-h1">
              Design has always been more than just a job - it's my passion.
            </h2>
            
            <p className="text-lg text-muted leading-relaxed max-w-2xl">
              {aboutText}
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-h1 font-bold">{stat.value}</div>
                <div className="text-muted text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;