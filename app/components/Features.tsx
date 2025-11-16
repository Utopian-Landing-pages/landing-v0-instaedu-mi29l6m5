'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Video, ShieldCheck, Lightbulb, MessageSquareMore, ThumbsUp } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Video,
    title: 'Instagram-Style Learning Feed',
    description: 'Engaging short videos and vibrant images curated for educational discovery across various subjects.',
    image: 'https://source.unsplash.com/400x300/?kids,learning,online,education',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Child Profiles & Parental Oversight',
    description: 'Individual child profiles with comprehensive parental controls and monitoring capabilities.',
    image: 'https://source.unsplash.com/400x300/?parental,control,app,safety',
  },
  {
    icon: Lightbulb,
    title: 'Personalized Content Discovery',
    description: 'Tailored content recommendations based on interests and learning progress, keeping kids engaged.',
    image: 'https://source.unsplash.com/400x300/?personalized,education,learning',
  },
  {
    icon: MessageSquareMore,
    title: 'Moderated Comments & Interaction',
    description: 'A strictly moderated comment section fosters positive peer interaction and collaborative learning in a secure environment.',
    image: 'https://source.unsplash.com/400x300/?kids,talking,safe,communication',
  },
  {
    icon: ThumbsUp,
    title: "'Like' & Positive Engagement",
    description: 'Simple "like" functionality encourages positive feedback and celebrates learning achievements among peers.',
    image: 'https://source.unsplash.com/400x300/?kids,happy,thumbs,up,celebration',
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything Your Child Needs to Learn & Grow
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Discover powerful features designed to make learning fun, safe, and effective for children aged 6-12.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card overflow-hidden">
                {/* Feature Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground p-3 rounded-xl shadow-lg">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
