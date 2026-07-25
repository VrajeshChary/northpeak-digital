import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '../common/Button';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import './MobileMenu.css';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string; id: string }[];
  activeSection: string;
  onNavClick: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
  activeSection,
  onNavClick,
}) => {
  const modalRef = useFocusTrap(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="mobile-menu-drawer"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu Navigation</span>
          <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(link.href);
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={18} className="mobile-link-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            rightIcon={<ArrowRight size={18} />}
            onClick={() => onNavClick('#contact')}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};
