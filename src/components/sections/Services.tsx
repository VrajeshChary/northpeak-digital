import React, { useState } from 'react';
import { 
  Code, 
  Palette, 
  Search, 
  Layers, 
  Cpu, 
  Bot, 
  ArrowUpRight, 
  CheckCircle2, 
  X 
} from 'lucide-react';
import { Card } from '../common/Card';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Services.css';

export interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  features: string[];
  techStack: string[];
}

export const Services: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicesData: ServiceItem[] = [
    {
      id: 'web-dev',
      icon: <Code size={28} />,
      title: 'Web Development',
      shortDesc: 'Hyper-fast, responsive web applications engineered with React 19, Next.js, and WebGL.',
      fullDesc: 'We build ultra-scalable digital platforms tailored for maximum throughput, sub-100ms response times, zero CLS layout shifts, and bulletproof security architecture.',
      badge: 'Core Specialty',
      features: ['React 19 & Next.js App Router', 'Server Side Rendering (SSR) & ISR', 'Edge Distributed API Routes', '100/100 Lighthouse Performance'],
      techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL'],
    },
    {
      id: 'ui-ux',
      icon: <Palette size={28} />,
      title: 'UI/UX Design',
      shortDesc: 'Luxury design systems, micro-interactions, and conversion-focused interface design.',
      fullDesc: 'Crafted with pixel precision, our design systems blend human-centered usability, glassmorphic visual flair, and WCAG AA accessibility compliance.',
      badge: 'Design System',
      features: ['Atomic Design Tokens', 'Figma Component Libraries', 'Micro-Animations & Physics', 'User Testing & Heatmaps'],
      techStack: ['Figma', 'Framer', 'Design Tokens', 'Storybook'],
    },
    {
      id: 'seo-growth',
      icon: <Search size={28} />,
      title: 'SEO & Growth',
      shortDesc: 'Technical search engine dominance, Core Web Vitals optimization, and keyword ranking.',
      fullDesc: 'We transform websites into organic customer acquisition engines using automated schema generation, programmatic SEO architectures, and Core Web Vitals optimization.',
      badge: 'Growth Engine',
      features: ['Programmatic SEO Pipelines', 'JSON-LD Schema Engineering', 'Core Web Vitals Audit', 'Competitor Rank Backlinking'],
      techStack: ['Ahrefs', 'Google Search Console', 'Schema.org', 'Lighthouse'],
    },
    {
      id: 'brand-identity',
      icon: <Layers size={28} />,
      title: 'Brand Identity',
      shortDesc: 'Distinctive brand positioning, vector logo suites, typography scales, and motion guidelines.',
      fullDesc: 'We forge memorable visual identities that stand out in crowded tech markets, complete with comprehensive brand guidelines, typography hierarchies, and motion assets.',
      badge: 'Brand Strategy',
      features: ['Vector Logo Suites', 'Typography Hierarchy', 'Color Palette Tokenization', 'Brand Book & Guidelines'],
      techStack: ['Illustrator', 'After Effects', 'Design Tokens'],
    },
    {
      id: 'automation',
      icon: <Cpu size={28} />,
      title: 'Automation & Workflows',
      shortDesc: 'Streamlined CI/CD pipelines, cloud infrastructure, and serverless workflow automation.',
      fullDesc: 'Replace manual operational bottlenecks with high-throughput cloud automation pipelines, containerized deployments, and serverless infrastructure scaling.',
      badge: 'DevOps & Cloud',
      features: ['GitHub Actions & CI/CD', 'Docker & Kubernetes', 'Serverless Edge Functions', 'Database Auto-scaling'],
      techStack: ['AWS', 'Vercel', 'Docker', 'GitHub Actions'],
    },
    {
      id: 'ai-integration',
      icon: <Bot size={28} />,
      title: 'AI Integration',
      shortDesc: 'Custom LLM agent workflows, RAG knowledge retrieval, and intelligent predictive search.',
      fullDesc: 'Unlock enterprise productivity with embedded generative AI assistants, fine-tuned RAG vector databases, and multi-modal autonomous workflows.',
      badge: 'AI & ML',
      features: ['Custom RAG Architecture', 'Vector Search (Pinecone/Weaviate)', 'Multi-Modal AI Agents', 'LLM Fine-Tuning & Safeguards'],
      techStack: ['OpenAI', 'LangChain', 'Pinecone', 'Python'],
    },
  ];

  return (
    <section id="services" className="services-section" ref={elementRef}>
      <div className="container">
        <SectionHeading
          badgeText="Capabilities & Expertise"
          badgeVariant="cyan"
          title="Engineered for"
          titleGradientText="Market Dominance"
          description="Six core disciplines tailored to turn ambitious concepts into world-class digital realities."
        />

        {/* 6 Services Grid */}
        <div className={`services-grid ${isVisible ? 'fade-in-up' : ''}`}>
          {servicesData.map((service) => (
            <Card
              key={service.id}
              interactive
              glowOnHover
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
              <div className="service-card-top">
                <div className="service-icon-box">{service.icon}</div>
                <Badge variant="glass">{service.badge}</Badge>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.shortDesc}</p>

              <div className="service-card-footer">
                <span className="service-explore-text">Explore Features</span>
                <ArrowUpRight size={18} className="service-arrow" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Feature Detail Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={() => setSelectedService(null)}>
          <div
            className="service-modal-content glass-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modal-service-title"
          >
            <div className="modal-header">
              <div className="modal-title-group">
                <div className="service-icon-box">{selectedService.icon}</div>
                <div>
                  <h3 id="modal-service-title" className="modal-title">{selectedService.title}</h3>
                  <Badge variant="cyan">{selectedService.badge}</Badge>
                </div>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedService.fullDesc}</p>

              <div className="modal-section">
                <h4 className="modal-subtitle">Key Features & Deliverables</h4>
                <ul className="modal-feature-list">
                  {selectedService.features.map((feat) => (
                    <li key={feat} className="modal-feature-item">
                      <CheckCircle2 size={16} className="feature-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4 className="modal-subtitle">Tech Stack & Ecosystem</h4>
                <div className="modal-tech-pills">
                  {selectedService.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  setSelectedService(null);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Proposal for {selectedService.title}
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
