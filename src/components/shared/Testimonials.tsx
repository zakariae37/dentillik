import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    company: string
    image: string
  }
}

const testimonials: Testimonial[] = [
  {
    content: "TaxPal is so easy to use I can't help but wonder if it's really doing the things the government expects me to do.",
    author: {
      name: "Sheryl Berge",
      role: "CEO",
      company: "Lynch LLC",
      image: "/placeholder.svg?height=64&width=64"
    }
  },
  {
    content: "The best part about TaxPal is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
    author: {
      name: "Leland Kiehn",
      role: "Founder",
      company: "Kiehn and Sons",
      image: "/placeholder.svg?height=64&width=64"
    }
  },
  {
    content: "I used to have to remit tax to the EU and with TaxPal I somehow don't have to do that anymore. Nervous to travel there now though.",
    author: {
      name: "Peter Renolds",
      role: "Founder",
      company: "West Inc",
      image: "/placeholder.svg?height=64&width=64"
    }
  },
  {
    content: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
    author: {
      name: "Amy Hahn",
      role: "Director",
      company: "Velocity Industries",
      image: "/placeholder.svg?height=64&width=64"
    }
  },
  {
    content: "There are so many things I had to do with my old software that I just don't do at all with TaxPal. Suspicious but I can't say I don't love it.",
    author: {
      name: "Amy Hahn",
      role: "Director",
      company: "Velocity Industries",
      image: "/placeholder.svg?height=64&width=64"
    }
  },
  {
    content: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
    author: {
      name: "Amy Hahn",
      role: "Director",
      company: "Velocity Industries",
      image: "/placeholder.svg?height=64&width=64"
    }
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-12 px-4 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Loved by businesses worldwide.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our software is so simple that people can&apos;t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <blockquote className="space-y-6">
                  <p className="text-base leading-relaxed">
                    {testimonial.content}
                  </p>
                  <footer className="flex items-center gap-4">
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <cite className="not-italic font-semibold">
                        {testimonial.author.name}
                      </cite>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.author.role} at {testimonial.author.company}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

