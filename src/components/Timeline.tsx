import { useEffect, useRef } from 'react';

interface TimelineItem {
  title: string;
  company: string;
  description: string;
  years: string;
}

interface TimelineProps {
  items?: TimelineItem[];
}

const Timeline = ({
  items = [
    {
      title: 'Senior Product Designer',
      company: 'TechCorp Inc.',
      description: 'Led design for multiple product lines, mentored junior designers, and established design system standards.',
      years: '2021 - Present'
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      description: 'Designed web and mobile applications for clients across various industries including fintech and healthcare.',
      years: '2019 - 2021'
    },
    {
      title: 'Junior Designer',
      company: 'StartUp Co.',
      description: 'Focused on user interface design and front-end development for early-stage products.',
      years: '2017 - 2019'
    },
    {
      title: 'Design Intern',
      company: 'Agency XYZ',
      description: 'Supported senior designers with research, wireframing, and prototyping for client projects.',
      years: '2016 - 2017'
    }
  ]
}: TimelineProps) => {
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={timelineRef}
      className="section-padding animate-fade-up"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-4">Experience</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div
              key={`${item.company}-${item.years}`}
              className="grid md:grid-cols-4 gap-6 py-8 border-b border-[hsl(var(--border-light))] last:border-b-0"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Content - Left side on desktop */}
              <div className="md:col-span-3 space-y-3">
                <h3 className="text-h3">{item.title}</h3>
                <p className="font-medium text-[hsl(var(--muted))]">{item.company}</p>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
              
              {/* Years - Right aligned */}
              <div className="md:text-right">
                <span className="inline-block font-bold text-lg">{item.years}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;