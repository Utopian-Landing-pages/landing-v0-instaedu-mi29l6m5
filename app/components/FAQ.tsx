'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is InstaEdu?',
    answer: 'InstaEdu is an Instagram-style social learning platform designed for children aged 6-12, offering a safe and engaging environment to learn through short educational videos, images, and moderated comments.',
  },
  {
    question: 'How does InstaEdu ensure child safety?',
    answer: 'We prioritize child safety with individual child profiles under parental oversight, strictly moderated comment sections, and curated educational content to ensure a positive and secure learning experience.',
  },
  {
    question: 'Is there a cost to use InstaEdu?',
    answer: 'InstaEdu offers a freemium model with basic content accessible for free. For full access to curated content, advanced parental controls, and an ad-free experience, we offer premium monthly and annual subscriptions.',
  },
  {
    question: 'Can parents monitor their child\'s activity?',
    answer: "Yes, InstaEdu provides robust parental oversight features, allowing parents to monitor their child's profile, content interaction, and comment activity to ensure a safe and productive learning journey.",
  },
  {
    question: 'What age group is InstaEdu designed for?',
    answer: 'InstaEdu is specifically designed for children aged 6-12 years old. The content, interface, and safety features are all tailored to this age group to ensure an age-appropriate learning experience.',
  },
  {
    question: 'How does the content moderation work?',
    answer: 'All content on InstaEdu goes through a multi-layer moderation process that includes both AI-powered filtering and human review. Comments are strictly monitored in real-time to ensure all interactions are positive, educational, and appropriate for children.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Everything you need to know about InstaEdu. {"Can't"} find the answer {"you're"} looking for? Feel free to contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 rounded-2xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
