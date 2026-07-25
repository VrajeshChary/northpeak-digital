import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Building, User, DollarSign } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Input, Textarea } from '../common/Input';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { Toast } from '../common/Toast';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Contact.css';

export interface FormState {
  name: string;
  email: string;
  company: string;
  budget: string;
  services: string[];
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    budget: '$25k-$50k',
    services: ['Web Development'],
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastState, setToastState] = useState<{ isOpen: boolean; message: string; type: 'success' | 'error' }>({
    isOpen: false,
    message: '',
    type: 'success',
  });

  const budgetOptions = ['$10k-$25k', '$25k-$50k', '$50k-$100k', '$100k+'];
  const serviceOptions = ['Web Development', 'UI/UX Design', 'SEO & Growth', 'Brand Identity', 'Automation', 'AI Integration'];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g. alex@company.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your project scope.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setToastState({
        isOpen: true,
        message: 'Please resolve the highlighted errors before submitting.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setToastState({
        isOpen: true,
        message: 'Thank you! Your project request has been submitted successfully. We will reply within 4 hours.',
        type: 'success',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '$25k-$50k',
        services: ['Web Development'],
        message: '',
      });
      setErrors({});
    }, 1500);
  };

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      const updated = exists
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updated };
    });
  };

  return (
    <section id="contact" className="contact-section bg-grid-pattern" ref={elementRef}>
      <div className="container">
        <SectionHeading
          badgeText="Let's Build Together"
          badgeVariant="cyan"
          title="Start Your Project with"
          titleGradientText="NorthPeak Digital"
          description="Have an ambitious project in mind? Fill out the form below or book a discovery session with our engineering leads."
        />

        <div className={`contact-layout ${isVisible ? 'fade-in-up' : ''}`}>
          {/* Left Info Card */}
          <div className="contact-info-card glass-panel">
            <h3 className="info-heading">Direct Communication</h3>
            <p className="info-desc">
              We respond to all technical inquiries within 4 business hours. No account managers or call centers — speak directly with Staff Engineers.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon"><Mail size={18} /></div>
                <div>
                  <span className="info-label">Direct Email</span>
                  <span className="info-val">hello@northpeakdigital.com</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Building size={18} /></div>
                <div>
                  <span className="info-label">Headquarters</span>
                  <span className="info-val">San Francisco, CA & Remote Global</span>
                </div>
              </div>
            </div>

            {/* Response Time SLA Pill */}
            <div className="sla-pill glass-panel">
              <CheckCircle2 size={18} className="sla-check" />
              <div>
                <span className="sla-title">4-Hour Response SLA</span>
                <span className="sla-sub">Guaranteed reply from our engineering leads</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Contact Form Card */}
          <Card className="contact-form-card">
            <form onSubmit={handleSubmit} noValidate aria-label="Project Proposal Form">
              <div className="form-grid">
                {/* Name */}
                <Input
                  label="Full Name"
                  required
                  placeholder="e.g. Alex Mercer"
                  leftIcon={<User size={18} />}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                />

                {/* Email */}
                <Input
                  label="Work Email"
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  leftIcon={<Mail size={18} />}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                />
              </div>

              {/* Company */}
              <div className="form-row">
                <Input
                  label="Company Name"
                  placeholder="e.g. Acme Tech Solutions"
                  leftIcon={<Building size={18} />}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {/* Budget Selector Pills */}
              <div className="form-row">
                <label className="input-label">
                  Estimated Budget Range <DollarSign size={14} className="budget-icon" />
                </label>
                <div className="budget-pills-group" role="radiogroup" aria-label="Select Budget Range">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      role="radio"
                      aria-checked={formData.budget === option}
                      className={`budget-pill ${formData.budget === option ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, budget: option })}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services Checkboxes */}
              <div className="form-row">
                <label className="input-label">Service Interest</label>
                <div className="services-checkbox-grid">
                  {serviceOptions.map((service) => (
                    <label key={service} className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => toggleService(service)}
                        className="checkbox-input"
                      />
                      <span className="checkbox-custom" />
                      <span className="checkbox-label">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="form-row">
                <Textarea
                  label="Project Details & Scope"
                  required
                  placeholder="Tell us about your project goals, timelines, and technical requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  error={errors.message}
                />
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isSubmitting}
                  rightIcon={<Send size={18} />}
                >
                  Submit Project Request
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        isOpen={toastState.isOpen}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState({ ...toastState, isOpen: false })}
      />
    </section>
  );
};
