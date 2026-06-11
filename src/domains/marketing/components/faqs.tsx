"use client";
import { Button } from "@/shared/ui";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Is My Payment Information Secure?",
    answer:
      "Yes, we use industry-leading encryption and security protocols to protect your payment information. All transactions are processed through secure, PCI-compliant payment gateways.",
  },
  {
    id: "2",
    question: "Why Do You Require A Credit Card For Freemium API?",
    answer:
      "A credit card is required to verify your identity and prevent abuse. Even with the free tier, you can use our APIs without any charges unless you exceed the free usage limits.",
  },
  {
    id: "3",
    question: "What If I Exceed My Plan Limits?",
    answer:
      "If you exceed your plan limits, we will notify you immediately. You can upgrade your plan at any time, and overages will be billed according to our pricing structure.",
  },
  {
    id: "4",
    question: "When I Will Be Billied?",
    answer:
      "Billing occurs on the anniversary date of your subscription. For monthly plans, you will be billed on the same day each month. You can view your billing history in your account settings.",
  },
  {
    id: "5",
    question: "How Are Refunds handled?",
    answer:
      "We offer a 30-day money-back guarantee for all paid plans. Refunds are processed within 5-7 business days. For additional information about our refund policy, please contact our support team.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-6xl w-full bg-primary-light xs:max-md:p-4 p-20 rounded-4xl">
      <div className="mx-auto max-w-3xl px-6 xs:max-sm:px-0 sm:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-[40px] max-w-2xl xs:max-md:text-2xl font-medium text-base mb-4">
            <span className="gradient-heading"> Frequently</span> Asked
            Questions
          </h2>
          <p className="text-gray text-lg">
            Find Answers To Most Commonly Asked Questions About Our Platform And
            Services, APIs, Payments, Features
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden px-2 rounded-2xl border border-gray-200 bg-white transition-all duration-200"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="flex w-full items-center justify-between px-6 xs:max-sm:px-2 py-5 text-left"
                aria-expanded={openId === item.id}
              >
                <h3 className="text-md xs:max-sm:text-sm font-medium text-base">
                  {item.question}
                </h3>
                <BsChevronDown
                  className={`h-6 w-6 xs:max-sm:h-4 xs:max-sm:w-4 shrink-0 text-gray transition-transform duration-200 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openId === item.id && (
                <div className="border-t border-gray-200 px-6 py-4">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="primary"
            borderRounded
            className="min-w-fit py-2.5 xs:max-sm:px-6 px-22"
          >
            Ask Questions
          </Button>
        </div>
      </div>
    </section>
  );
}
