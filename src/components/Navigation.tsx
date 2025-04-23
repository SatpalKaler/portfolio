import { Link, useLocation } from 'react-router-dom';
import { Mail, FileText, LinkedinIcon, Menu, X, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [state, handleSubmit] = useForm("xeogjykq");

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsContactOpen(true);
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/film-documentary', label: 'Film & Documentary' },
    { path: '/writing', label: 'Writing' },
    { path: '/webdev', label: 'Web Development' },
  ];

  const socialButtons = [
    { 
      icon: <Mail className="w-5 h-5 text-black" />, 
      href: 'mailto:satpalkaler.sk@gmail.com',
      label: 'Email',
      onClick: handleEmailClick
    },
    { 
      icon: <Instagram className="w-5 h-5 text-black" />,
      href: 'https://instagram.com/satpal.kaler',
      label: 'Instagram'
    },
    { 
      icon: <FileText className="w-5 h-5 text-black" />, 
      href: '/001 Satpal Kaler Resume.pdf',
      label: 'CV'
    },
    { 
      icon: <LinkedinIcon className="w-5 h-5 text-black" />,
      href: 'https://linkedin.com/in/satpalkaler',
      label: 'LinkedIn'
    },
  ];

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50" style={{ backgroundColor: `hsla(var(--navbar-background) / 0.95)` }}>
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex flex-col items-center py-4">
            {/* Social buttons and hamburger menu in one row */}
            <div className={`flex items-center w-full mt-2 mb-4 ${isMobile ? 'justify-between mt-4' : 'justify-center'}`}>
              <div className="flex gap-2">
                {socialButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-black/20 transition-colors"
                    style={{ backgroundColor: `hsla(var(--navbar-background) / 0.1)` }}
                    aria-label={button.label}
                    onClick={button.onClick}
                  >
                    {React.cloneElement(button.icon, {
                      className: "w-5 h-5",
                      style: { color: `hsl(var(--navbar-icon))` }
                    })}
                  </a>
                ))}
              </div>
              
              {/* Mobile Menu Button */}
              {isMobile && (
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md hover:bg-black/20 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X style={{ color: `hsl(var(--navbar-icon))` }} />
                  ) : (
                    <Menu style={{ color: `hsl(var(--navbar-icon))` }} />
                  )}
                </button>
              )}
            </div>

            {/* Navigation links */}
            <div className={`${isMobile ? 'flex flex-col items-center space-y-4' : 'flex items-center justify-center space-x-8'} ${
              isMobile && !isMenuOpen ? 'hidden' : ''
            }`}>
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navigation-link text-center ${
                    location.pathname === link.path ? 'text-black underline underline-offset-4' : ''
                  }`}
                  onClick={() => {
                    isMobile && setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    
      {/* Contact Form Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold" style={{ color: `hsl(var(--navbar-foreground))` }}>
                Contact Me
              </h2>
              <button
                onClick={() => setIsContactOpen(false)}
                className="p-2 rounded-full hover:bg-black/10 transition-colors"
              >
                <X className="w-5 h-5" style={{ color: `hsl(var(--navbar-icon))` }} />
              </button>
            </div>
            
            {state.succeeded ? (
              <div className="text-center py-8">
                <p className="font-medium">Thanks for your message! I'll get back to you soon.</p>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="mt-4 px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email" 
                    name="email"
                    className="mt-1 block w-full rounded-md border border-gray-200 p-2 hover:border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-200 p-2 hover:border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-2 px-4 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors disabled:opacity-50"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
