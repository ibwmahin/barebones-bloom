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
      title: 'UI/UX Design',
      description: 'Creating user-centered designs that are both beautiful and functional.'
    },
    {
      title: 'Web Development',
      description: 'Building responsive websites and applications with modern technologies.'
    },
    {
      title: 'Content Strategy',
      description: 'Developing content that engages users and drives conversions.',
      variant: 'highlight'
    },
    {
      title: 'Brand Identity',
      description: 'Crafting cohesive brand experiences across all touchpoints.'
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
      className="section-padding bg-[hsl(var(--muted-light))] animate-fade-up"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-4">Services</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I offer a range of design and development services to help bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card card-interactive p-8 ${
                service.variant === 'highlight' 
                  ? 'bg-[hsl(var(--dark))] text-white' 
                  : ''
              }`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <h3 className={`text-h3 mb-4 ${
                service.variant === 'highlight' ? 'text-white' : ''
              }`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed ${
                service.variant === 'highlight' 
                  ? 'text-white/80' 
                  : 'text-muted'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;