import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function LandingSection() {
  return (
    <section className="py-8 px-4 md:py-10">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-8 text-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 text-emerald-500">
            <Check className="h-5 w-5" />
            <p className="text-lg">Committed to your success</p>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900  mx-auto leading-tight">
            One-on-one training, free migration, and a helping hand whenever you need it
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-lg  mx-auto">
            Funnelish is committed to your success. Our customer success team is always available to help you improve your eCommerce brand optimize your funnel
          </p>

          {/* Feature List */}
          <div className="grid gap-4 md:gap-8  mx-auto">
            <div className="flex items-center justify-center gap-2 text-slate-700">
              <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span>Chat support available 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-700">
              <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span>Everything&apos;s included, no hidden fees - ever</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-700">
              <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span>Multiple community channels always active and ready to answer your questions</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-6 text-lg font-medium shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Free 14-Day Trial →
            </Button>
          </div>

          {/* Bottom Features */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-emerald-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

