import { useState } from 'react';
import { useEffect, useRef } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

interface PortfolioGridProps {
  projects?: Project[];
}

const PortfolioGrid = ({
  projects = [
    {
      id: '1',
      title: 'Mobile App Design',
      category: 'App Design',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
    },
    {
      id: '2',
      title: 'Web Dashboard',
      category: 'Web Design',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: '3',
      title: 'E-commerce Platform',
      category: 'Web Design',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      id: '4',
      title: 'SaaS Platform',
      category: 'Web Design',
      imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
    },
    {
      id: '5',
      title: 'Social Media Dashboard',
      category: 'Dashboard',
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
      id: '6',
      title: 'Real Estate Platform',
      category: 'Web Design',
      imageUrl: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop'
    }
  ]
}: PortfolioGridProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const portfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.2 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section 
        id="portfolio"
        ref={portfolioRef}
        className="section-padding animate-fade-up"
      >
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Header */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-xs font-medium bg-[hsl(var(--muted-light))] px-4 py-2 rounded-full border border-[hsl(var(--border))]">
                  Portfolio
                </span>
              </div>
              
              <h2 className="text-h1 leading-tight">
                Explore my portfolio of creative solutions
              </h2>
              
              <p className="text-[hsl(var(--muted))] text-sm leading-relaxed max-w-sm">
                Explore my portfolio full of creative solutions.
              </p>
            </div>

            {/* Right Column - Portfolio Grid */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="card card-interactive cursor-pointer overflow-hidden group aspect-square"
                  onClick={() => openModal(project)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="font-semibold text-sm mb-1">{project.title}</h3>
                        <p className="text-xs opacity-80">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-[var(--radius-xl)] p-8 max-w-2xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-h2">{selectedProject.title}</h3>
                <p className="text-muted">{selectedProject.category}</p>
              </div>
              <button 
                onClick={closeModal}
                className="text-2xl text-muted hover:text-[hsl(var(--foreground))] transition-colors"
              >
                ×
              </button>
            </div>
            
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full rounded-[var(--radius)] mb-6"
            />
            
            <p className="text-muted leading-relaxed">
              This is a detailed view of {selectedProject.title}. Here you would typically include project details, 
              technologies used, challenges overcome, and results achieved.
            </p>
            
            <div className="mt-6 pt-6 border-t border-[hsl(var(--border-light))]">
              <button className="btn btn-primary">
                View Live Project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGrid;