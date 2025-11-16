import Link from 'next/link'
import { ArrowRight, Shield, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'

export function CTA() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Ready to Transform Your {"Child's"} Screen Time?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join thousands of parents who trust InstaEdu to make learning fun, safe, and engaging for their children.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="text-lg px-10 py-7 rounded-full bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group"
              asChild
            >
              <Link href={PROJECT_URL}>
                Get Started for Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-16">
            <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Shield className="w-12 h-12 text-white" />
              <h3 className="font-bold text-white text-lg">100% Safe</h3>
              <p className="text-white/80 text-sm">Fully moderated content</p>
            </div>
            <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Users className="w-12 h-12 text-white" />
              <h3 className="font-bold text-white text-lg">10,000+ Families</h3>
              <p className="text-white/80 text-sm">Trust InstaEdu daily</p>
            </div>
            <div className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <Star className="w-12 h-12 text-white" />
              <h3 className="font-bold text-white text-lg">4.9/5 Rating</h3>
              <p className="text-white/80 text-sm">From happy parents</p>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-white/80 mt-8">
            {'No credit card required • Start free • Cancel anytime'}
          </p>
        </div>
      </div>
    </section>
  )
}
