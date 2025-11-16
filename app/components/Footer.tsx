'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PROJECT_NAME, PROJECT_URL } from '@/lib/constants'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="#hero" className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary text-primary-foreground rounded-xl p-2 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl text-background">
                {PROJECT_NAME}
              </span>
            </Link>
            <p className="text-background/80 leading-relaxed mb-4">
              Making learning fun, safe, and engaging for children aged 6-12.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <Link
                href="#"
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-background" />
              </Link>
              <Link
                href="#"
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-background" />
              </Link>
              <Link
                href="#"
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-background" />
              </Link>
              <Link
                href="#"
                className="bg-background/10 hover:bg-background/20 p-2 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-background" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-background/80 hover:text-background transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-background/80 hover:text-background transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-background/80 hover:text-background transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href={PROJECT_URL} className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={PROJECT_URL} className="text-background/80 hover:text-background transition-colors">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href={PROJECT_URL} className="text-background/80 hover:text-background transition-colors">
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link href={PROJECT_URL} className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={PROJECT_URL} className="text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Stay Updated</h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Subscribe to get the latest educational tips and updates.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-primary"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
              {subscribed && (
                <p className="text-accent text-sm">{'Thanks for subscribing!'}</p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/80 text-sm">
            © 2025 {PROJECT_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href={PROJECT_URL} className="text-background/80 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href={PROJECT_URL} className="text-background/80 hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link href={PROJECT_URL} className="text-background/80 hover:text-background transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
