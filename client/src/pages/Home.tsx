import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Modern Institutional Design System
 * - Deep Navy (#0f1729) + Gold (#d97706) color scheme
 * - Playfair Display (serif) for headlines
 * - Asymmetric layouts with left-aligned content
 * - Soft shadows and card-based components
 * - Staggered animations on scroll
 */

interface Domain {
  title: string;
  description: string;
  checkpoints: number;
  icon: string;
}

const domains: Domain[] = [
  {
    title: "Financial & Accounting",
    description: "QoE analysis, working capital normalization, and comprehensive financial health assessment",
    checkpoints: 10,
    icon: "📊",
  },
  {
    title: "Legal & Compliance",
    description: "IP protection, contract review, and regulatory exposure assessment",
    checkpoints: 10,
    icon: "⚖️",
  },
  {
    title: "Operational",
    description: "Tech stack evaluation, key person risk, and supply chain resilience",
    checkpoints: 10,
    icon: "⚙️",
  },
  {
    title: "Market & Competitive",
    description: "TAM validation, Porter's Five Forces analysis, and competitive positioning",
    checkpoints: 10,
    icon: "🎯",
  },
  {
    title: "Management & Governance",
    description: "Reference check protocol, incentive alignment, and organizational structure",
    checkpoints: 10,
    icon: "👥",
  },
  {
    title: "ESG & Reputational",
    description: "Sanctions screening, labor practices, and media/reputational risk assessment",
    checkpoints: 10,
    icon: "🌱",
  },
];

const targetAudience = [
  "M&A Analysts & Associates",
  "Private Equity Professionals",
  "Venture Capital Deal Teams",
  "Independent Sponsors",
  "Operators Evaluating Acquisitions",
];

const benefits = [
  "A repeatable system that eliminates blind spots",
  "A defensible process with clear audit trails",
  "Comprehensive framework across all critical domains",
  "Red flag callouts and risk-rated checkpoints",
  "Deal Verdict Framework (Proceed / Conditional / Walk Away)",
];

export default function Home() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Stagger animation for domain cards
    const timer = setTimeout(() => {
      domains.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 100);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold">
              DD
            </div>
            <span className="font-semibold text-lg hidden sm:inline">The Due Diligence Playbook</span>
          </div>
          <a
            href="https://geniusdownloads.gumroad.com/l/TheDueDiligence"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Get Access Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div
          className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663519901822/AEb7nWBuw5dJiq2Y6wKoxM/hero-background-VrAMSwBqFoRjhfGGVinvzD.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">
                60-Point Framework
              </span>
            </div>

            <h1 className="mb-6 text-foreground leading-tight">
              The Due Diligence <span className="text-accent">Playbook</span>
            </h1>

            <p className="text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
              A structured, risk-rated due diligence system used by senior analysts — now distilled into a
              60-checkpoint playbook across financial, legal, operational, market, management, and ESG domains.
            </p>

            <p className="text-lg text-foreground/70 mb-12 font-semibold">
              Due diligence isn't just analysis — it's <span className="text-accent">risk containment under pressure</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://geniusdownloads.gumroad.com/l/TheDueDiligence"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center justify-center gap-2"
              >
                Get The Playbook <ArrowRight className="w-5 h-5" />
              </a>
              <Button
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent/10"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-12 pt-12 border-t border-border">
              <p className="text-sm text-foreground/60 font-semibold mb-4">ONE-TIME PURCHASE</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent">$49</span>
                <span className="text-foreground/70">No subscription. No upsells. Immediate access.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-12">The Problem Most Deal Professionals Face</h2>

            <div className="space-y-4">
              {[
                "Fragmented checklists across multiple systems",
                "Inconsistent processes that vary by deal",
                "Time constraints that force critical shortcuts",
                "Blind spots that only surface after close",
              ].map((problem, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-lg text-foreground/80">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-8">What This Playbook Gives You</h2>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Framework Visualization */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="mb-4">The 6 Domains Framework</h2>
          <div className="section-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <div
                key={index}
                className={`domain-card transform transition-all duration-500 ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{domain.icon}</span>
                  <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {domain.checkpoints} Checkpoints
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{domain.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Illustration */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It All Connects</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The six domains work together as an integrated system, ensuring no critical area is overlooked.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663519901822/AEb7nWBuw5dJiq2Y6wKoxM/framework-illustration-N57zu9beTt3HWh4ThtwYK8.webp"
              alt="Framework illustration showing six interconnected domains"
              className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="mb-12">Who This Is Built For</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-foreground/80 mb-8">
                If you're involved in evaluating, structuring, or approving deals, this playbook is built for you.
              </p>

              <div className="space-y-4">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground/80">{audience}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-lg p-8 border-l-4 border-accent">
              <h3 className="text-2xl font-bold mb-4">Real-World Deal Execution</h3>
              <p className="text-foreground/80 mb-6">
                This isn't theoretical framework. It's built on patterns from senior analysts who've executed
                hundreds of deals across M&A, private equity, and venture capital.
              </p>
              <p className="text-foreground/70">
                Every checkpoint is battle-tested. Every domain reflects what actually matters when evaluating
                investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-12">What's Included</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">📋</span> 60-Point Checklist
                </h3>
                <p className="text-foreground/70">
                  Comprehensive framework across all 6 domains with 10 checkpoints per domain
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🚩</span> Red Flag Callouts
                </h3>
                <p className="text-foreground/70">
                  Critical warning signs and risk indicators throughout the framework
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚖️</span> Deal Verdict Framework
                </h3>
                <p className="text-foreground/70">
                  Proceed / Conditional / Walk Away decision framework with clear criteria
                </p>
              </div>
            </div>

            <div className="bg-accent/5 rounded-lg p-8 border border-accent/20">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-accent font-semibold mb-1">FILE SIZE</p>
                  <p className="text-lg font-semibold">199 KB</p>
                </div>
                <div>
                  <p className="text-sm text-accent font-semibold mb-1">LENGTH</p>
                  <p className="text-lg font-semibold">12 Pages</p>
                </div>
                <div>
                  <p className="text-sm text-accent font-semibold mb-1">FORMAT</p>
                  <p className="text-lg font-semibold">Clean, Professional PDF</p>
                </div>
                <div>
                  <p className="text-sm text-accent font-semibold mb-1">ACCESS</p>
                  <p className="text-lg font-semibold">Instant Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade Path Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="mb-8">The Upgrade Path</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Once you've mastered the framework, move into <span className="font-semibold">DiligenceFlow</span> to turn
              this static checklist into an operational system.
            </p>

            <div className="space-y-4 mb-12">
              {[
                "A live workflow for tracking diligence execution",
                "Repeatable deal engine for consistent processes",
                "From static checklist → to operational system",
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-foreground/70 italic">
              DiligenceFlow is free-to-try. Start with The Due Diligence Playbook, then extend it into a full workflow
              when you're ready.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h2 className="mb-8">Ready to Eliminate Risk From Your Deal Process?</h2>

            <p className="text-xl text-foreground/80 mb-12">
              Get instant access to The Due Diligence Playbook. Start using the framework on your next deal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://geniusdownloads.gumroad.com/l/TheDueDiligence"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center justify-center gap-2"
              >
                Get The Playbook Now <ArrowRight className="w-5 h-5" />
              </a>
              <div className="text-foreground/70 pt-3">
                <p className="font-semibold">$49 • One-time purchase</p>
                <p className="text-sm">Or 2 payments of $24.50</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">The Due Diligence Playbook</h4>
              <p className="text-foreground/70 text-sm">
                A 60-point framework for M&A, PE, and VC professionals.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://geniusdownloads.gumroad.com/l/TheDueDiligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Get The Playbook
                  </a>
                </li>
                <li>
                  <a
                    href="https://diligenceflow.base44.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    DiligenceFlow
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <p className="text-foreground/70 text-sm">
                Questions? Contact us through Gumroad or visit DiligenceFlow.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-foreground/60 text-sm text-center">
              © 2026 The Due Diligence Playbook. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
