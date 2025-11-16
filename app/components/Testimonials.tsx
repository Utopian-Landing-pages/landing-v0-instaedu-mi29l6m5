'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent',
    company: 'Busy Mom Inc.',
    quote: "InstaEdu has transformed screen time in our home! My kids are learning so much, and I feel completely safe with the moderated content. It's a game-changer for educational engagement.",
    image: 'https://source.unsplash.com/300x300/?portrait,woman,professional,1',
    rating: 5,
  },
  {
    name: 'David L.',
    role: 'Educator',
    company: 'Elementary School Teacher',
    quote: "As an educator, I'm constantly looking for innovative learning tools. InstaEdu's interactive format and curated content make complex subjects accessible and fun for young learners. Highly recommended!",
    image: 'https://source.unsplash.com/300x300/?portrait,man,professional,2',
    rating: 5,
  },
  {
    name: 'Emily R.',
    role: 'Tech Enthusiast Parent',
    company: 'Startup Founder',
    quote: 'Finally, a platform that combines the engagement of social media with genuine educational value for kids. The parental controls are excellent, giving me peace of mind.',
    image: 'https://source.unsplash.com/300x300/?portrait,woman,professional,3',
    rating: 5,
  },
  {
    name: 'Mark T.',
    role: 'Grandparent',
    company: 'Retired Engineer',
    quote: "My grandchildren absolutely love InstaEdu! They're always showing me new facts they've learned, and it sparks such great conversations. It's wonderful to see them so excited about learning.",
    image: 'https://source.unsplash.com/300x300/?portrait,man,professional,4',
    rating: 5,
  },
  {
    name: 'Jessica P.',
    role: 'Child Psychologist',
    company: 'Child Development Center',
    quote: "InstaEdu's focus on positive interaction and moderated content provides a healthy digital environment for children. It encourages curiosity and collaboration without the typical social media pitfalls.",
    image: 'https://source.unsplash.com/300x300/?portrait,woman,professional,5',
    rating: 5,
  },
  {
    name: 'Alex B.',
    role: 'Homeschooling Parent',
    company: 'Self-Employed',
    quote: 'Finding quality educational content that keeps my kids engaged can be tough. InstaEdu is a treasure trove! The short, digestible videos and images are perfect for quick learning sessions.',
    image: 'https://source.unsplash.com/300x300/?portrait,person,professional,6',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by Parents & Educators
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            See what families and teachers are saying about InstaEdu.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-2 shadow-2xl bg-card">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                  <Image
                    src={current.image || "/placeholder.svg"}
                    alt={current.name}
                    fill
                    className="object-cover rounded-2xl border-4 border-primary/20"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-card-foreground mb-6 leading-relaxed">
                    "{current.quote}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-bold text-card-foreground text-lg">{current.name}</p>
                    <p className="text-muted-foreground">
                      {current.role} {current.company && `at ${current.company}`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentIndex(index)
                        setIsAutoPlaying(false)
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-primary w-8'
                          : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className="rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid Display of All Testimonials (Desktop) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
                index === currentIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {testimonial.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
