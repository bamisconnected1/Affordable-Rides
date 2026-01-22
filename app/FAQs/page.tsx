"use client";

import {
  Activity,
  Clock,
  DollarSign,
  Download,
  Globe,
  HelpCircle,
  Lock,
  MessageCircle,
  Scale,
  Settings,
  ShoppingBag,
  Undo2,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ANIMATION_DURATION = 0.3;
const SPRING_STIFFNESS = 500;
const SPRING_DAMPING = 30;
const HOVER_SCALE = 1.02;
const TAP_SCALE = 0.98;
const FAQ_STAGGER_DELAY = 0.1;
const INITIAL_Y_OFFSET = 20;
const EXIT_Y_OFFSET = -20;

const iconMap = {
  Clock,
  WalletCards,
  ShoppingBag,
  Globe,
  Scale,
  Activity,
  DollarSign,
  Lock,
  Undo2,
  Download,
  Settings,
  HelpCircle,
  MessageCircle,
  Users,
  Zap,
};

type FaqsGridProps = {
  title?: string;
  description?: string;
  categories?: Array<{
    name: string;
    id: string;
    faqs: Array<{
      question: string;
      answer: string;
      icon: string;
    }>;
  }>;
};

export function FaqsGrid({
  title = "FAQs",
  description = "Discover quick and comprehensive answers to common questions about our platform, services, and features.",
  categories = [
    {
      name: "General",
      id: "general",
      faqs: [
        {
          question: "What makes AFFORDABLE RIDES different from other dealerships?",
          answer:
            "We focus on transparency, fair pricing, and a no-pressure buying experience. Our process is designed to be simple, compliant with U.S. laws, and centered around what works for everyday Americans—not unrealistic promises.",
          icon: "Zap",
        },
        {
          question: "Do you operate nationwide?",
          answer:
            "Yes. AFFORDABLE RIDES serves customers in all 50 U.S. states through a combination of trusted partners and a centralized digital buying process.",
          icon: "Zap",
        },
        {
          question: "Are your vehicles inspected before sale?",
          answer:
            "Absolutely. Every vehicle is evaluated for safety, reliability, and overall value before being listed, ensuring customers drive away with confidence.",
          icon: "Zap",
        },
      ],
    },
    {
      name: "💳 Financing & Affordability",
      id: "components",
      faqs: [
        {
          question: "What are my chances of getting approved for financing?",
          answer:
            "We maintain an 87% financing approval rate, working with a wide network of U.S.-based lenders to support a wide range of credit profiles.",
          icon: "HelpCircle",
        },
        {
          question: "Can I get financing if my credit isn’t perfect?",
          answer:
            "Yes. We regularly assist first-time buyers, self-employed individuals, and customers rebuilding credit by offering responsible financing options tailored to real budgets.",
          icon: "HelpCircle",
        },
        {
          question: "How long does the financing process take?",
          answer:
            "Most financing decisions are completed within 24 hours, allowing you to move forward quickly without unnecessary delays.",
          icon: "Users",
        },
      ],
    },
    {
      name: "📋 Process, Compliance & Support",
      id: "support",
      faqs: [
        {
          question: "Is AFFORDABLE RIDES compliant with U.S. laws and regulations?",
          answer:
            "Yes. We operate with integrity and are fully guided by federal and state laws, including consumer protection, lending, and data privacy regulations.",
          icon: "MessageCircle",
        },
        {
          question: "Are there hidden fees or surprise costs?",
          answer:
            "No. Pricing and terms are clearly explained upfront so you know exactly what to expect before making a decision.",
          icon: "Users",
        },
        {
          question: "What support do I receive after purchasing a vehicle?",
          answer:
            "Our relationship doesn’t end at purchase. We offer ongoing support and guidance to ensure a smooth ownership experience.",
          icon: "Clock",
        },
      ],
    },
  ],
}: FaqsGridProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-lg">
          <h2 className="font-semibold text-4xl text-foreground">{title}</h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="mt-8 md:mt-12">
          <div className="flex flex-wrap gap-2 border-border border-b">
            {categories.map((category, index) => (
              <motion.button
                className={`relative rounded-t-lg px-4 py-2 font-medium text-sm transition-all duration-200 ${
                  activeTab === index
                    ? "bg-background text-brand"
                    : "border-transparent text-muted-foreground hover:border-border/50 hover:text-foreground"
                }`}
                key={category.id}
                onClick={() => setActiveTab(index)}
                type="button"
                whileHover={{ scale: HOVER_SCALE }}
                whileTap={{ scale: TAP_SCALE }}
              >
                {category.name}
                {activeTab === index && (
                  <motion.div
                    className="absolute right-0 bottom-0 left-0 h-0.5 rounded-t-full bg-brand"
                    initial={false}
                    layoutId="activeTab"
                    transition={{
                      type: "spring",
                      stiffness: SPRING_STIFFNESS,
                      damping: SPRING_DAMPING,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8 md:mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: EXIT_Y_OFFSET }}
              initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
              key={activeTab}
              transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
            >
              <div className="space-y-6">
                <dl className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                  {categories[activeTab].faqs.map((faq, faqIndex) => {
                    const IconComponent =
                      iconMap[faq.icon as keyof typeof iconMap] || HelpCircle;

                    return (
                      <motion.div
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-3"
                        initial={{ opacity: 0, y: INITIAL_Y_OFFSET }}
                        key={`${categories[activeTab].id}-${faqIndex}`}
                        transition={{
                          duration: 0.4,
                          delay: faqIndex * FAQ_STAGGER_DELAY,
                        }}
                      >
                        <div className="flex size-8 items-center justify-center rounded-md border bg-card *:m-auto *:size-4">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <dt className="font-semibold text-foreground">
                          {faq.question}
                        </dt>
                        <dd className="text-muted-foreground">{faq.answer}</dd>
                      </motion.div>
                    );
                  })}
                </dl>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="font-serif text-blue-500">
          Still have questions? Our team is ready to help you every step of the way.
        </h2>
       
      </div>
    </section>
  );
}

export default FaqsGrid;
