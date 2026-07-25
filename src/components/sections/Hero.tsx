import React from 'react';
import { ArrowRight, Star, ShieldCheck, Play, Code2, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { useCountUp } from '../../hooks/useCountUp';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Hero.css';

export const Hero: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const projectsCount = useCountUp(250, 2000, isVisible);
  const retentionCount = useCountUp(97, 2000, isVisible);
  const ratingCount = useCountUp(49, 1500, isVisible);

  return (
    <section id="hero" className="hero-section bg-grid-pattern" ref={elementRef}>
      {/* Background Ambient Glow Filters */}
      <div className="ambient-glow ambient-glow-cyan hero-glow-1" />
      <div className="ambient-glow ambient-glow-violet hero-glow-2" />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Hero Text Content */}
          <div className="hero-text-content">
            <Badge variant="cyan" pulse icon={<Sparkles size={14} className="badge-sparkle" />}>
              Next-Gen Digital & AI Engineering
            </Badge>

            <h1 className="hero-headline">
              We Engineer <span className="gradient-accent-text">Digital Products</span> That Scale Beyond Limits.
            </h1>

            <p className="hero-description">
              NorthPeak Digital builds bespoke web applications, high-converting UI/UX design systems, and enterprise AI integrations for ambitious tech leaders.
            </p>

            {/* Dual CTAs */}
            <div className="hero-cta-group">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={20} />}
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Project
              </Button>

              <Button
                variant="glass"
                size="lg"
                leftIcon={<Play size={18} />}
                onClick={() => {
                  document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <ShieldCheck size={18} className="trust-icon" />
                <span>100% On-Time Delivery Guarantee</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <Star size={18} className="trust-icon-star" />
                <span>4.9/5 Rating across 250+ Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic Showcase / Glass Card Widget */}
          <div className="hero-graphic-content">
            <div className="hero-preview-card glass-panel">
              {/* Card Window Header */}
              <div className="preview-card-header">
                <div className="window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="window-title">
                  <Code2 size={14} /> northpeak-app.config.ts
                </div>
                <span className="window-badge">PROD ACTIVE</span>
              </div>

              {/* Code / Visual Interactive Preview */}
              <div className="preview-card-body">
                <div className="code-block">
                  <p><span className="code-keyword">import</span> &#123; createEngine &#125; <span className="code-keyword">from</span> <span className="code-string">'@northpeak/core'</span>;</p>
                  <p><span className="code-keyword">const</span> app = <span className="code-function">createEngine</span>(&#123;</p>
                  <p className="code-indent"><span className="code-property">framework</span>: <span className="code-string">'React 19 + AI-RAG'</span>,</p>
                  <p className="code-indent"><span className="code-property">performance</span>: <span className="code-string">'100/100 Lighthouse'</span>,</p>
                  <p className="code-indent"><span className="code-property">architecture</span>: <span className="code-string">'Edge Distributed'</span></p>
                  <p>&#125;);</p>
                  <p>app.<span className="code-function">deployToProduction</span>();</p>
                </div>

                {/* Floating Metric Pill overlay */}
                <div className="floating-metric-card glass-panel">
                  <div className="metric-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Avg. Revenue Lift</span>
                    <span className="metric-value">+184.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counter Stats Bar */}
        <div className="hero-stats-wrapper glass-panel">
          <div className="stat-card">
            <span className="stat-number">{projectsCount}+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-card">
            <span className="stat-number">{retentionCount}%</span>
            <span className="stat-label">Client Retention</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-card">
            <span className="stat-number">{(ratingCount / 10).toFixed(1)}★</span>
            <span className="stat-label">Average Rating</span>
          </div>

          <div className="stat-divider" />

          <div className="stat-card">
            <span className="stat-number">$120M+</span>
            <span className="stat-label">Client Revenue Lift</span>
          </div>
        </div>
      </div>
    </section>
  );
};
