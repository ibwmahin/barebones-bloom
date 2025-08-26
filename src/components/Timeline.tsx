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
      title: 'Graphic Designer at Dewa-Dewi Tech',
      company: '',
      description: 'Graphic Designer at Dewa-Dewi Tech, creating creative and functional visual designs to support brands and digital products.',
      years: '2015 - 2017'
    },
    {
      title: 'UI/UX Designer at Odama Studio',
      company: '',
      description: 'UI/UX Designer at Odama Studio, creating intuitive and engaging digital experiences through functional and aesthetic design.',
      years: '2017 - 2019'
    },
    {
      title: 'UX Researcher at Korsa Studio',
      company: '',
      description: 'UX Researcher at Korsa Studio, connecting data and design to create intuitive and effective user experiences.',
      years: '2018 - 2021'
    },
    {
      title: 'Product Designer at Apple, Inc',
      company: '',
      description: 'Product Designer at Apple Inc., designing innovative experiences that connect technology and aesthetics to create iconic products',
      years: '2021 - Now'
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
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Header */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xs font-medium bg-[hsl(var(--muted-light))] px-4 py-2 rounded-full border border-[hsl(var(--border))]">
                Experience
              </span>
            </div>
            
            <h2 className="text-h1 leading-tight">
              A Yearly snapshot of my creative growth
            </h2>
            
            <p className="text-[hsl(var(--muted))] text-sm leading-relaxed max-w-sm">
              An annual summary that summarizes my creative journey and development throughout the year.
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:col-span-3 space-y-8">
            {items.map((item, index) => (
              <div
                key={`${item.title}-${item.years}`}
                className="grid grid-cols-4 gap-8 py-6 border-b border-[hsl(var(--border-light))] last:border-b-0 group"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Content - Left side */}
                <div className="col-span-3 space-y-2">
                  <h3 className="font-semibold text-lg text-[hsl(var(--foreground))]">
                    {item.title}
                  </h3>
                  <p className="text-[hsl(var(--muted))] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Years - Right aligned */}
                <div className="text-right">
                  <span className="font-bold text-lg text-[hsl(var(--foreground))]">
                    {item.years}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;