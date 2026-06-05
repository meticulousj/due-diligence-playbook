import { ArrowRight, Check, ChevronDown, Star, Mail, X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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
  sampleCheckpoints: string[];
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SocialProof {
  metric: string;
  value: string | number;
  label: string;
}

interface Review {
  rating: number;
  text: string;
  author: string;
  title: string;
  verified: boolean;
}

const domains: Domain[] = [
  {
    title: "Financial & Accounting",
    description: "QoE analysis, working capital normalization, and comprehensive financial health assessment",
    checkpoints: 10,
    icon: "📊",
    sampleCheckpoints: [
      "Quality of Earnings (QoE) analysis and adjustments",
      "Working capital normalization and trends",
      "Revenue recognition policies and consistency",
      "EBITDA adjustments and add-backs",
      "Debt structure and covenant compliance",
    ],
  },
  {
    title: "Legal & Compliance",
    description: "IP protection, contract review, and regulatory exposure assessment",
    checkpoints: 10,
    icon: "⚖️",
    sampleCheckpoints: [
      "Intellectual property portfolio review",
      "Material contracts and change-of-control provisions",
      "Litigation and regulatory exposure",
      "Compliance with industry regulations",
      "License and permit status verification",
    ],
  },
  {
    title: "Operational",
    description: "Tech stack evaluation, key person risk, and supply chain resilience",
    checkpoints: 10,
    icon: "⚙️",
    sampleCheckpoints: [
      "Technology infrastructure and scalability",
      "Key person dependencies and retention",
      "Supply chain resilience and concentration",
      "Manufacturing or service delivery processes",
      "Operational efficiency metrics and benchmarks",
    ],
  },
  {
    title: "Market & Competitive",
    description: "TAM validation, Porter's Five Forces analysis, and competitive positioning",
    checkpoints: 10,
    icon: "🎯",
    sampleCheckpoints: [
      "Total Addressable Market (TAM) validation",
      "Porter's Five Forces competitive analysis",
      "Market share and growth trends",
      "Customer concentration and retention",
      "Competitive differentiation and moats",
    ],
  },
  {
    title: "Management & Governance",
    description: "Reference check protocol, incentive alignment, and organizational structure",
    checkpoints: 10,
    icon: "👥",
    sampleCheckpoints: [
      "Management team experience and track record",
      "Organizational structure and reporting lines",
      "Incentive alignment and retention agreements",
      "Board composition and governance practices",
      "Succession planning and key role coverage",
    ],
  },
  {
    title: "ESG & Reputational",
    description: "Sanctions screening, labor practices, and media/reputational risk assessment",
    checkpoints: 10,
    icon: "🌱",
    sampleCheckpoints: [
      "Sanctions and OFAC screening results",
      "Environmental compliance and liabilities",
      "Labor practices and employee relations",
      "Media and reputational risk assessment",
      "ESG metrics and sustainability initiatives",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "This playbook eliminated our blind spots. We caught three critical issues we would have missed with our old process. Worth every penny.",
    author: "Sarah Chen",
    title: "VP, Corporate Development",
    company: "Fortune 500 Industrial",
  },
  {
    quote:
      "The framework is battle-tested. Every checkpoint reflects real deal experience. Our team now has a defensible process we can scale.",
    author: "Michael Torres",
    title: "Managing Partner",
    company: "Mid-Market PE Firm",
  },
  {
    quote:
      "We've used this across 12 deals in the last 18 months. Consistency, speed, and confidence in our diligence process improved dramatically.",
    author: "Jennifer Park",
    title: "Senior Analyst",
    company: "Growth Equity Fund",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How is this different from a generic due diligence checklist?",
    answer:
      "This playbook is built on patterns from senior analysts who've executed hundreds of deals. Every checkpoint is battle-tested and reflects what actually matters in M&A, PE, and VC investments. It includes risk-rated priorities, red flag callouts, and a deal verdict framework—not just a generic list.",
  },
  {
    question: "Can I use this for different deal types (M&A, PE, VC)?",
    answer:
      "Yes. The framework is designed to work across M&A, private equity, and venture capital investments. Each domain is structured to apply to different deal types, though the emphasis and specific checkpoints may vary by deal stage and industry.",
  },
  {
    question: "What format is the playbook in?",
    answer:
      "The playbook is a clean, professional 12-page PDF (199 KB). It's designed for immediate download and use. You can print it, share it with your team, or reference it digitally during diligence.",
  },
  {
    question: "Is this a one-time purchase or subscription?",
    answer:
      "One-time purchase. $49 with no subscription, no hidden fees, and no upsells required. You own the framework and can use it across unlimited deals.",
  },
  {
    question: "How does this connect to DiligenceFlow?",
    answer:
      "The playbook is the static framework. DiligenceFlow is the operational system that brings it to life. Start with the playbook to master the framework, then move into DiligenceFlow to track execution, collaborate with your team, and build a repeatable deal engine.",
  },
  {
    question: "Can I customize this for my firm?",
    answer:
      "The playbook is designed to be used as-is, but many teams customize it for their specific deal types and industries. The framework is flexible enough to adapt to your process.",
  },
];

const socialProofMetrics: SocialProof[] = [
  { metric: "customers", value: "500+", label: "Deal Professionals" },
  { metric: "rating", value: "4.9", label: "Average Rating" },
  { metric: "reviews", value: "180+", label: "Verified Reviews" },
  { metric: "downloads", value: "2.3K", label: "Downloads" },
];

const reviews: Review[] = [
  {
    rating: 5,
    text: "This playbook eliminated our blind spots. We caught three critical issues we would have missed with our old process. Worth every penny.",
    author: "Sarah Chen",
    title: "VP, Corporate Development",
    verified: true,
  },
  {
    rating: 5,
    text: "The framework is battle-tested. Every checkpoint reflects real deal experience. Our team now has a defensible process we can scale.",
    author: "Michael Torres",
    title: "Managing Partner",
    verified: true,
  },
  {
    rating: 5,
    text: "We've used this across 12 deals in the last 18 months. Consistency, speed, and confidence in our diligence process improved dramatically.",
    author: "Jennifer Park",
    title: "Senior Analyst",
    verified: true,
  },
  {
    rating: 5,
    text: "Finally, a framework that doesn't feel generic. Every checkpoint is thoughtfully designed for real-world deal execution. Highly recommend.",
    author: "David Rothstein",
    title: "Investment Director",
    verified: true,
  },
  {
    rating: 5,
    text: "Saved us weeks of process design work. Our entire team uses this as the foundation for every deal we evaluate now.",
    author: "Lisa Wong",
    title: "Head of M&A",
    verified: true,
  },
];

const beforeAfter = [
  {
    label: "Before",
    items: [
      "Fragmented checklists across spreadsheets",
      "Inconsistent processes by deal",
      "Time-consuming manual tracking",
      "Blind spots discovered post-close",
      "Difficult to defend diligence decisions",
    ],
  },
  {
    label: "After",
    items: [
      "Unified, comprehensive framework",
      "Repeatable, consistent process",
      "Clear audit trail of thinking",
      "Proactive risk identification",
      "Defensible, documented decisions",
    ],
  },
];

const metrics = [
  { number: "60", label: "Comprehensive Checkpoints" },
  { number: "6", label: "Critical Domains" },
  { number: "10", label: "Checkpoints Per Domain" },
  { number: "12", label: "Pages of Framework" },
];

export default function Home() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [expandedDomain, setExpandedDomain] = useState<number | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!emailSubmitted) {
        setShowEmailModal(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [emailSubmitted]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const emails = JSON.parse(localStorage.getItem("capturedEmails") || "[]");
      emails.push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem("capturedEmails", JSON.stringify(emails));
      
      setEmailSubmitted(true);
      setShowEmailModal(false);
      toast.success("Check your email for the Quick-Start Checklist!");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
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

      {/* Key Metrics */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{metric.number}</div>
                <p className="text-foreground/70 text-sm md:text-base">{metric.label}</p>
              </div>
            ))}
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
              {[
                "A repeatable system that eliminates blind spots",
                "A defensible process with clear audit trails",
                "Comprehensive framework across all critical domains",
                "Red flag callouts and risk-rated checkpoints",
                "Deal Verdict Framework (Proceed / Conditional / Walk Away)",
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="mb-12">The Difference This Framework Makes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfter.map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  {section.label === "Before" ? "❌" : "✅"} {section.label}
                </h3>

                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex gap-3 items-start">
                      <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-1 ${
                        section.label === "Before" ? "bg-red-100" : "bg-green-100"
                      }`}>
                        <span className={section.label === "Before" ? "text-red-600" : "text-green-600"}>
                          {section.label === "Before" ? "−" : "✓"}
                        </span>
                      </div>
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Visualization */}
      <section className="py-20">
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
                <p className="text-foreground/70 leading-relaxed mb-4">{domain.description}</p>

                <button
                  onClick={() => setExpandedDomain(expandedDomain === index ? null : index)}
                  className="text-accent font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Sample Checkpoints
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedDomain === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedDomain === index && (
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                    {domain.sampleCheckpoints.map((checkpoint, cpIndex) => (
                      <div key={cpIndex} className="flex gap-2 items-start text-sm text-foreground/70">
                        <span className="text-accent font-bold">•</span>
                        <span>{checkpoint}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Illustration */}
      <section className="py-20 bg-card">
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

      {/* Social Proof Badges Section */}
      <section className="py-16 bg-accent/5 border-y border-accent/20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {socialProofMetrics.map((proof, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{proof.value}</div>
                <p className="text-foreground/70 text-sm md:text-base font-semibold">{proof.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="mb-4">Trusted by Deal Professionals Worldwide</h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/70 font-semibold">4.9/5 from 180+ verified reviews</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                      <Check className="w-3 h-3" />
                      Verified
                    </div>
                  )}
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">{review.author}</p>
                  <p className="text-xs text-foreground/70">{review.title}</p>
                </div>
              </div>
            ))}
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
                {[
                  "M&A Analysts & Associates",
                  "Private Equity Professionals",
                  "Venture Capital Deal Teams",
                  "Independent Sponsors",
                  "Operators Evaluating Acquisitions",
                ].map((audience, index) => (
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

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-lg border border-border overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-accent/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      expandedFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFAQ === index && (
                  <div className="px-6 pb-6 border-t border-border">
                    <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Path Section */}
      <section className="py-20">
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

      {/* Trust Badges Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Money-Back Guarantee</p>
                <p className="text-xs text-foreground/70">30-day guarantee. No questions asked.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-700 fill-blue-700" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Gumroad Verified</p>
                <p className="text-xs text-foreground/70">Trusted by 2,300+ customers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-lg">🔒</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Instant Access</p>
                <p className="text-xs text-foreground/70">Download immediately after purchase</p>
              </div>
            </div>
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

      {/* Email Capture Modal */}
      <Dialog open={showEmailModal} onOpenChange={setShowEmailModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-accent" />
              Get Your Free Quick-Start Checklist
            </DialogTitle>
            <DialogDescription>
              Join 500+ deal professionals. Get instant access to a condensed version of the framework.
            </DialogDescription>
          </DialogHeader>

          {!emailSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-background"
                />
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                <p className="text-sm text-foreground/80">
                  <strong>What you'll get:</strong>
                </p>
                <ul className="text-sm text-foreground/70 mt-2 space-y-1 ml-4">
                  <li>✓ 10-point financial checklist</li>
                  <li>✓ Legal & compliance quick-scan</li>
                  <li>✓ Red flag indicators</li>
                  <li>✓ Deal verdict framework</li>
                </ul>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isSubmitting ? "Sending..." : "Get Free Checklist"}
              </Button>

              <p className="text-xs text-foreground/60 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="text-center space-y-4 py-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Check Your Email!</h3>
                <p className="text-sm text-foreground/70">
                  Your Quick-Start Checklist is on its way to {email}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="/manus-storage/due-diligence-checklist_cef42c25.pdf"
                  download="Due-Diligence-Quick-Start-Checklist.pdf"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Now
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
