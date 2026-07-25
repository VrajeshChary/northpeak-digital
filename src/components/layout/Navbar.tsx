import React, { useState } from 'react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';
import { Button } from '../common/Button';
import { MobileMenu } from './MobileMenu';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const { scrollPosition, activeSection } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = scrollPosition > 20;

  const navLinks = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Results', href: '#results', id: 'results' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
        role="banner"
      >
        <div className="container navbar-container">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            aria-label="NorthPeak Digital Home"
          >
            <div className="logo-icon-wrapper">
              <Zap size={22} className="logo-icon" />
            </div>
            <span className="logo-text">
              NorthPeak <span className="logo-text-accent">Digital</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="navbar-menu" role="navigation" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="active-pill" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="navbar-actions">
            <Button
              variant="primary"
              size="sm"
              rightIcon={<ArrowRight size={16} />}
              onClick={() => handleNavClick('#contact')}
            >
              Start Project
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
};
