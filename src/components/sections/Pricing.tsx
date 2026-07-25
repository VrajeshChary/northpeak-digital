import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Card } from '../common/Card';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Pricing.css';

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  monthlyPrice: number | string;
  annualPrice: number | string;
  description: string;
  features: string[];
  ctaText: string;
}

export const Pricing: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [isAnnual, setIsAnnual] = useState(true);
  const [showComparison, setShowComparison] = useState(false);

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      monthlyPrice: 4900,
      annualPrice: 3900,
      description: 'Ideal for early-stage startups needing a high-performance MVP or redesign.',
      features: [
        'Complete React 19 / Next.js Landing Page',
        'Handcrafted Design System Tokens',
        'Mobile Responsive across 8 breakpoints',
        'Basic SEO & Meta Tag Setup',
        '100/100 Lighthouse Performance',
        '2 Weeks Post-Launch Support',
      ],
      ctaText: 'Get Started with Starter',
    },
    {
      id: 'growth',
      name: 'Growth',
      badge: 'Most Popular',
      highlighted: true,
      monthlyPrice: 9900,
      annualPrice: 7900,
      description: 'Designed for scaling SaaS & tech brands requiring full platform engineering.',
      features: [
        'Multi-page Web App & Marketing Site',
        'Advanced Micro-Animations & WebGL',
        'Programmatic SEO & Schema Pipelines',
        'WCAG AA Accessibility Guarantee',
        'Custom CMS & Headless Integration',
        'Dedicated Staff Engineer & Slack Channel',
        '30-Day Money Back Guarantee',
      ],
      ctaText: 'Accelerate with Growth',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      badge: 'Besopke AI & Cloud',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      description: 'Tailored for Fortune 500 & enterprise scale applications with custom AI agents.',
      features: [
        'Full Product Architecture & Design Suite',
        'Custom Fine-Tuned RAG & LLM Agents',
        'Multi-Region Cloud Infrastructure (AWS)',
        'SLA 99.99% Uptime Guarantee',
        '24/7 Dedicated Support & Code Audits',
        'SOC2 & HIPAA Compliance Readiness',
      ],
      ctaText: 'Contact Enterprise Team',
    },
  ];

  const featureMatrix = [
    { name: 'Core Framework', starter: 'React / Next.js', growth: 'Next.js 15 App Router', enterprise: 'Custom Edge Microservices' },
    { name: 'Design System', starter: 'Standard Tokens', growth: 'Full Custom Design System', enterprise: 'Global Brand Guidelines Suite' },
    { name: 'Performance SLA', starter: '90+ Lighthouse', growth: '100/100 Guaranteed', enterprise: 'Sub-50ms Global TTFB' },
    { name: 'AI Integration', starter: 'Add-on', growth: 'Basic LLM Chatbot', enterprise: 'Custom RAG & Multi-Agent Workflow' },
    { name: 'Accessibility', starter: 'Basic Semantic HTML', growth: 'Full WCAG AA Audit', enterprise: 'Full WCAG AAA & VPAT Certificate' },
    { name: 'Support', starter: 'Email (48h)', growth: 'Shared Slack Channel (4h)', enterprise: '24/7 Dedicated Engineer & Phone' },
  ];

  return (
    <section id="pricing" className="pricing-section" ref={elementRef}>
      <div className="container">
        <SectionHeading
          badgeText="Transparent Investment"
          badgeVariant="emerald"
          title="Predictable Pricing for"
          titleGradientText="Uncompromising Quality"
          description="Flexible engagement tiers with no hidden fees. Every plan includes our 100/100 Lighthouse performance guarantee."
        />

        {/* Monthly / Annual Toggle */}
        <div className="billing-toggle-wrapper">
          <span className={`billing-label ${!isAnnual ? 'active' : ''}`}>Monthly Billing</span>
          
          <button
            className="toggle-switch"
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Toggle Annual Billing"
            role="switch"
            aria-checked={isAnnual}
          >
            <span className={`toggle-thumb ${isAnnual ? 'annual' : 'monthly'}`} />
          </button>

          <span className={`billing-label ${isAnnual ? 'active' : ''}`}>
            Annual Billing <Badge variant="emerald" pulse>Save 20%</Badge>
          </span>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className={`pricing-grid ${isVisible ? 'fade-in-up' : ''}`}>
          {plans.map((plan) => (
            <Card
              key={plan.id}
              interactive
              glowOnHover
              className={`pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {plan.badge && (
                <div className="plan-badge-wrapper">
                  <Badge variant={plan.highlighted ? 'cyan' : 'violet'} pulse icon={<Sparkles size={12} />}>
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.description}</p>

              <div className="plan-price-wrapper">
                {typeof plan.monthlyPrice === 'number' ? (
                  <>
                    <span className="price-currency">$</span>
                    <span className="price-amount">
                      {(isAnnual ? (plan.annualPrice as number) : (plan.monthlyPrice as number)).toLocaleString()}
                    </span>
                    <span className="price-period">/ month</span>
                  </>
                ) : (
                  <span className="price-amount-custom">{plan.monthlyPrice}</span>
                )}
              </div>

              <div className="plan-features-list">
                <span className="features-header">Included Deliverables:</span>
                {plan.features.map((feat) => (
                  <div key={feat} className="feature-item">
                    <div className="check-box">
                      <Check size={14} />
                    </div>
                    <span className="feature-text">{feat}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                size="lg"
                fullWidth
                rightIcon={<ArrowRight size={18} />}
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="plan-cta"
              >
                {plan.ctaText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Feature Matrix Toggle Button */}
        <div className="comparison-toggle-container">
          <Button
            variant="glass"
            size="md"
            rightIcon={<Zap size={16} />}
            onClick={() => setShowComparison(!showComparison)}
          >
            {showComparison ? 'Hide Feature Comparison Table' : 'View Detailed Feature Matrix'}
          </Button>
        </div>

        {/* Interactive Feature Comparison Table */}
        {showComparison && (
          <div className="comparison-table-wrapper glass-panel fade-in-up">
            <h3 className="table-title">Full Technical Capability Comparison</h3>
            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>Starter</th>
                    <th className="th-highlight">Growth</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureMatrix.map((row) => (
                    <tr key={row.name}>
                      <td className="row-title">{row.name}</td>
                      <td>{row.starter}</td>
                      <td className="td-highlight">{row.growth}</td>
                      <td>{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
