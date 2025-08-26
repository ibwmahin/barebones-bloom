import { useEffect, useRef } from 'react';

interface Service {
  title: string;
  description: string;
  variant?: 'default' | 'highlight';
}

interface ServicesGridProps {
  services?: Service[];
}

const ServicesGrid = ({
  services = [
    {
      title: 'Social Ads',
      description: 'Strategic and creative social media advertising to reach right audience, increase engagement and drive conversions.'
    },
    {
      title: 'Search Engineer',
      description: 'Optimize your website visibility and ranking with effective SEO strategies'
    },
    {
      title: 'Content Marketing',
      description: 'We create strategic and engaging content to build brand awareness, increase engagement and drive conversions.',
      variant: 'highlight'
    },
    {
      title: 'Saas Marketing',
      description: 'We help your SaaS product reach the right audience with a data-driven marketing strategy'
    }
  ]
}: ServicesGridProps) => {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.2 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services"
      ref={servicesRef}
      className="section-padding animate-fade-up"
    >
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xs font-medium bg-[hsl(var(--muted-light))] px-4 py-2 rounded-full border border-[hsl(var(--border))]">
                Services
              </span>
            </div>
            
            <h2 className="text-h1 leading-tight">
              A Comprehensive look at what we offer and how we deliver
            </h2>
            
            <p className="text-[hsl(var(--muted))] leading-relaxed">
              A comprehensive look at our services and how we deliver them
            </p>
            
            <button className="btn btn-primary mt-8">
              Sign In
            </button>
          </div>

          {/* Right Column - Services Grid */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`p-6 rounded-[var(--radius-lg)] transition-all hover:shadow-lg group ${
                  service.variant === 'highlight' 
                    ? 'bg-[hsl(var(--dark))] text-white' 
                    : 'bg-white border border-[hsl(var(--border-light))]'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`font-semibold text-lg ${
                    service.variant === 'highlight' ? 'text-white' : 'text-[hsl(var(--foreground))]'
                  }`}>
                    {service.title}
                  </h3>
                  <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={service.variant === 'highlight' ? 'text-white' : 'text-[hsl(var(--foreground))]'}>
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${
                  service.variant === 'highlight' 
                    ? 'text-white/80' 
                    : 'text-[hsl(var(--muted))]'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;