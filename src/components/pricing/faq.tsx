"use client";

import { useState } from "react";
import { AccordionItem } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "You get full access to all features in your selected plan for 14 days, completely free. No credit card required to start. You can cancel anytime during the trial without being charged.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll have immediate access to new features. When downgrading, changes take effect at the end of your current billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank transfers for annual Enterprise plans. All payments are processed securely through Stripe.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes! Save 20% when you choose annual billing on any plan. For example, the Professional plan costs $79/month billed monthly, or just $63/month when billed annually ($756/year).",
  },
  {
    question: "What happens when I cancel my subscription?",
    answer:
      "You'll continue to have access to your plan features until the end of your current billing period. After that, your account will be downgraded to the free tier. Your data is safely stored and you can reactivate anytime.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund, no questions asked.",
  },
  {
    question: "What's included in the Enterprise plan?",
    answer:
      "The Enterprise plan includes everything in Professional, plus: dedicated account manager, custom integrations, SLA guarantees, priority support, SSO/SAML authentication, custom contracts, and volume discounts. Contact our sales team for a custom quote.",
  },
  {
    question: "Can I add more team members to my plan?",
    answer:
      "Yes! The Starter plan includes 5 team members, Professional includes 25, and Enterprise is unlimited. You can purchase additional seats for $10/user/month on any plan.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about our pricing and plans
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="font-medium text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
