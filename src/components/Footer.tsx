interface FooterProps {
  logoText?: string;
  aboutText?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}

const Footer = ({
  logoText = "Alex Chen",
  aboutText = "A passionate designer creating beautiful and functional digital experiences.",
  contactEmail = "hello@alexchen.dev",
  contactPhone = "+1 (555) 123-4567",
  address = "San Francisco, CA",
  socialLinks = [
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Twitter", url: "#", icon: "twitter" },
    { name: "Dribbble", url: "#", icon: "dribbble" },
    { name: "GitHub", url: "#", icon: "github" }
  ]
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderSocialIcon = (iconName: string) => {
    const iconProps = {
      width: "20",
      height: "20",
      fill: "currentColor",
      viewBox: "0 0 20 20"
    };

    switch (iconName) {
      case 'linkedin':
        return (
          <svg {...iconProps}>
            <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg {...iconProps}>
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
          </svg>
        );
      case 'dribbble':
        return (
          <svg {...iconProps}>
            <path d="M10 0C4.477 0 0 4.484 0 10.017 0 15.55 4.477 20.034 10 20.034s10-4.484 10-10.017C20 4.484 15.523 0 10 0zm6.452 4.831c1.364 1.666 2.201 3.785 2.201 6.117-.18-.04-1.988-.36-3.815-.16-.08-.18-.16-.38-.26-.58-.3-.66-.64-1.32-1.01-1.96 1.73-.7 2.604-1.717 2.884-2.417zm-1.44-1.135c-.25.64-1.065 1.577-2.725 2.197-.844-1.537-1.766-2.795-1.906-2.975 1.44-.34 2.944-.217 4.631.778zM8.3 1.617c.16.2 1.102 1.438 1.946 3.035-2.445.647-4.611.627-4.851.627-.32-1.877.777-3.627 2.905-3.662zM1.592 6.05c.24 0 2.963.04 5.548-.647.12.24.24.48.34.74.12.24.22.48.32.72-2.325.66-4.430 2.518-4.430 2.518s-.04-.22-.04-.44c0-1.14.264-2.227.704-3.191zm.957 4.676c.4-.627 2.205-2.258 4.770-2.719.671 1.757 1.222 3.674 1.362 4.055-1.863.78-3.887.537-6.132-.336v-.996zm7.761 3.536c-.1-.58-.52-2.218-1.14-3.815 1.863-.26 3.815.16 3.815.16s-.3 1.617-1.315 2.956c-.5.66-1.08 1.26-1.36 1.499z"/>
          </svg>
        );
      case 'github':
        return (
          <svg {...iconProps}>
            <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[hsl(var(--dark))] text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">{logoText}</h3>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              {aboutText}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="inline-flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white/70 hover:bg-white/20 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-white/70">
              <div>
                <div className="text-sm text-white/50">Email</div>
                <a 
                  href={`mailto:${contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {contactEmail}
                </a>
              </div>
              <div>
                <div className="text-sm text-white/50">Phone</div>
                <a 
                  href={`tel:${contactPhone}`}
                  className="hover:text-white transition-colors"
                >
                  {contactPhone}
                </a>
              </div>
              <div>
                <div className="text-sm text-white/50">Location</div>
                <span>{address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/70 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p>&copy; {currentYear} {logoText}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;