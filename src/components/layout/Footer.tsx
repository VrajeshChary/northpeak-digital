import React from 'react';
import { Zap, Github, Twitter, Linkedin, Dribbble, ExternalLink } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerNav = [
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#services' },
        { name: 'UI/UX Design', href: '#services' },
        { name: 'SEO & Growth', href: '#services' },
        { name: 'Brand Identity', href: '#services' },
        { name: 'Automation', href: '#services' },
        { name: 'AI Integration', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About NorthPeak', href: '#hero' },
        { name: 'Client Results', href: '#results' },
        { name: 'Pricing Tiers', href: '#pricing' },
        { name: 'Careers', href: '#contact' },
        { name: 'Contact Us', href: '#contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Design System', href: '#services' },
        { name: 'Case Studies', href: '#results' },
        { name: 'API Reference', href: '#pricing' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Grid */}
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <div className="footer-logo-icon">
                <Zap size={22} />
              </div>
              <span className="footer-logo-text">
                NorthPeak <span className="logo-text-accent">Digital</span>
              </span>
            </a>

            <p className="footer-tagline">
              Engineering high-impact digital products, elite web applications, and enterprise AI integrations for market leaders.
            </p>

            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                <Dribbble size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-grid">
            {footerNav.map((col) => (
              <div key={col.title} className="footer-nav-col">
                <h3 className="footer-nav-title">{col.title}</h3>
                <ul className="footer-nav-list">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="footer-nav-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider & Copyright + Mandatory Digital Heroes Credit Line */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} NorthPeak Digital Inc. All rights reserved.
          </div>

          {/* MANDATORY CREDIT REQUIREMENT */}
          <div className="footer-credit">
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="digital-heroes-link"
            >
              <span>Built for Digital Heroes Training Task</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
