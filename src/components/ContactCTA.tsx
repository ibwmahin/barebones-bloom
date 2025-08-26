import { useState } from 'react';

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  email?: string;
}

const ContactCTA = ({
  title = "Let's Connect There",
  subtitle = "Ready to bring your project to life? Let's discuss your ideas and create something amazing together.",
  email = "hello@alexchen.dev"
}: ContactCTAProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Create mailto link as fallback
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section 
      id="contact"
      className="bg-[hsl(var(--dark))] text-white section-padding"
    >
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 text-white mb-6">{title}</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - CTA */}
            <div className="space-y-6">
              <div>
                <h3 className="text-h3 text-white mb-4">Get in touch</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a company looking to hire, or you're someone looking to build something, 
                  I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-white/60 text-sm">Email</span>
                  <div className="text-white font-medium">{email}</div>
                </div>
                
                <a 
                  href={`mailto:${email}`}
                  className="btn btn-primary bg-white text-[hsl(var(--dark))] hover:bg-white/90 inline-flex"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-[var(--radius)] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 ${
                    errors.name ? 'border-red-400' : ''
                  }`}
                  placeholder="Your name"
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-[var(--radius)] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 ${
                    errors.email ? 'border-red-400' : ''
                  }`}
                  placeholder="your@email.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 py-3 rounded-[var(--radius)] bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none ${
                    errors.message ? 'border-red-400' : ''
                  }`}
                  placeholder="Tell me about your project..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary bg-white text-[hsl(var(--dark))] hover:bg-white/90 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;