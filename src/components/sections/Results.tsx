import React, { useState } from 'react';
import { Star, TrendingUp, Zap, Users, ShieldCheck, Quote } from 'lucide-react';
import { Card } from '../common/Card';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Results.css';

export interface Testimonial {
  id: string;
  category: 'SaaS' | 'FinTech' | 'E-Commerce';
  name: string;
  role: string;
  company: string;
  avatar: string;
  impactMetric: string;
  impactLabel: string;
  quote: string;
  rating: number;
}

export const Results: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<'All' | 'SaaS' | 'FinTech' | 'E-Commerce'>('All');

  const testimonials: Testimonial[] = [
    {
      id: 't1',
      category: 'SaaS',
      name: 'Elena Rostova',
      role: 'VP of Product',
      company: 'Synthetix AI',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      impactMetric: '+184% Conversions',
      impactLabel: 'Qualified Lead Growth',
      quote: 'NorthPeak rebuilt our web platform in 6 weeks. The speed, animations, and conversion pipeline exceeded every KPI we set. Our organic leads doubled overnight.',
      rating: 5,
    },
    {
      id: 't2',
      category: 'FinTech',
      name: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'AetherPay Global',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      impactMetric: '3.4x Faster',
      impactLabel: 'Page Load Benchmark',
      quote: 'In the high-stakes world of fintech, millisecond delays cost millions. NorthPeak brought our Core Web Vitals to a perfect 100/100 across all global regions.',
      rating: 5,
    },
    {
      id: 't3',
      category: 'E-Commerce',
      name: 'Sophia Chen',
      role: 'Head of Growth',
      company: 'Lumiere Commerce',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      impactMetric: '42% More Leads',
      impactLabel: 'Checkout Conversion Lift',
      quote: 'The handcrafted design system they delivered gave our brand an instant enterprise feel. Our customer retention rates spiked 42% within 90 days.',
      rating: 5,
    },
    {
      id: 't4',
      category: 'SaaS',
      name: 'David Sterling',
      role: 'Founder & CEO',
      company: 'CloudPulse Systems',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      impactMetric: '99.99% Uptime',
      impactLabel: 'Edge Reliability',
      quote: 'Working with NorthPeak felt like having a Staff-level frontend team inside our company. Their attention to detail, keyboard UX, and accessibility is unmatched.',
      rating: 5,
    },
  ];

  const filteredTestimonials = activeTab === 'All'
    ? testimonials
    : testimonials.filter((item) => item.category === activeTab);

  return (
    <section id="results" className="results-section bg-grid-pattern" ref={elementRef}>
      <div className="container">
        <SectionHeading
          badgeText="Proven Impact"
          badgeVariant="violet"
          title="Transforming Growth for"
          titleGradientText="Industry Giants"
          description="Don't just take our word for it. Here is how our engineering directly moves revenue metrics."
        />

        {/* Impact Metric Banner */}
        <div className="impact-banner glass-panel">
          <div className="impact-stat-item">
            <TrendingUp size={24} className="impact-icon-cyan" />
            <div>
              <span className="impact-value">+180%</span>
              <span className="impact-name">Avg. Conversion Increase</span>
            </div>
          </div>

          <div className="impact-divider" />

          <div className="impact-stat-item">
            <Zap size={24} className="impact-icon-violet" />
            <div>
              <span className="impact-value">3x</span>
              <span className="impact-name">Speed Optimization</span>
            </div>
          </div>

          <div className="impact-divider" />

          <div className="impact-stat-item">
            <Users size={24} className="impact-icon-emerald" />
            <div>
              <span className="impact-value">42%</span>
              <span className="impact-name">More Qualified Pipeline</span>
            </div>
          </div>

          <div className="impact-divider" />

          <div className="impact-stat-item">
            <ShieldCheck size={24} className="impact-icon-amber" />
            <div>
              <span className="impact-value">100%</span>
              <span className="impact-name">WCAG AA Compliant</span>
            </div>
          </div>
        </div>

        {/* Industry Filter Tabs */}
        <div className="results-filter-tabs" role="tablist" aria-label="Filter testimonials by industry">
          {(['All', 'SaaS', 'FinTech', 'E-Commerce'] as const).map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className={`testimonials-grid ${isVisible ? 'fade-in-up' : ''}`}>
          {filteredTestimonials.map((item) => (
            <Card key={item.id} interactive glowOnHover className="testimonial-card">
              <div className="testimonial-header">
                <div className="impact-pill">
                  <Badge variant="cyan">{item.impactMetric}</Badge>
                </div>
                <div className="star-rating" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={14} className="star-filled" />
                  ))}
                </div>
              </div>

              <Quote size={28} className="quote-mark" />
              <p className="testimonial-quote">"{item.quote}"</p>

              <div className="testimonial-author">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="author-avatar"
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <div className="author-info">
                  <span className="author-name">{item.name}</span>
                  <span className="author-role">{item.role}, <strong className="author-company">{item.company}</strong></span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
