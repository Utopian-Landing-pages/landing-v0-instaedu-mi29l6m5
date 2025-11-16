import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PROJECT_URL } from '@/lib/constants'

const plans = [
  {
    name: 'Free Plan',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out InstaEdu',
    features: [
      'Basic educational content',
      'Limited video library',
      'Standard moderation',
      'Basic parental controls',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Monthly Plan',
    price: '$9.99',
    period: 'per month',
    description: 'Full access to all features',
    features: [
      'Full access to all content',
      'Advanced parental controls',
      'Ad-free experience',
      'Priority support',
      'Personalized learning paths',
      'Progress tracking & reports',
    ],
    cta: 'Subscribe Monthly',
    popular: false,
  },
  {
    name: 'Annual Plan',
    price: '$99.99',
    period: 'per year',
    description: 'Best value - save 2 months!',
    features: [
      'Full access to all content',
      'Advanced parental controls',
      'Ad-free experience',
      'Priority support',
      'Personalized learning paths',
      'Progress tracking & reports',
      '2 months FREE',
      'Early access to new features',
    ],
    cta: 'Save Annually',
    popular: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Choose the perfect plan for your family. Start free, upgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col h-full ${
                plan.popular
                  ? 'border-primary border-2 shadow-2xl scale-105 bg-card'
                  : 'border-2 bg-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  size="lg"
                  className={`w-full rounded-full text-lg ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg'
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                >
                  <Link href={PROJECT_URL}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="text-2xl mr-2">✅</span>
            {'30-day money-back guarantee • Cancel anytime • No hidden fees'}
          </p>
        </div>
      </div>
    </section>
  )
}
