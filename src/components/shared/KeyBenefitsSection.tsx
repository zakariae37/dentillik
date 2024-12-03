import Image from 'next/image'
import { Check } from 'lucide-react'

export default function KeyBenefitsSection() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Only Platform You Need to Manage Your Dental Practice
          </h2>
        </div>
        <div className="mt-20">
          <Feature
            title="Easy International Payment Processing"
            description="Our Funnelish Pay app allows you to easily offer a wide variety of payment options to your customers at the same time, while being easier to set up."
            paymentMethods={[
              "Stripe",
              "iDEAL and SEPA",
              "NMI",
              "Klarna",
              "PayPal",
              "Cash on delivery",
            ]}
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          <Feature
            title="Easy International Payment Processing"
            description="Our Funnelish Pay app allows you to easily offer a wide variety of payment options to your customers at the same time, while being easier to set up."
            paymentMethods={[
              "Stripe",
              "iDEAL and SEPA",
              "NMI",
              "Klarna",
              "PayPal",
              "Cash on delivery",
            ]}
            imageUrl="/placeholder.svg?height=300&width=400"
            imageLeft={false}
          />
          <Feature
            title="Easy International Payment Processing"
            description="Our Funnelish Pay app allows you to easily offer a wide variety of payment options to your customers at the same time, while being easier to set up."
            paymentMethods={[
              "Stripe",
              "iDEAL and SEPA",
              "NMI",
              "Klarna",
              "PayPal",
              "Cash on delivery",
            ]}
            imageUrl="/placeholder.svg?height=300&width=400"
          />
          
        </div>
      </div>
    </div>
  )
}

function Feature({ 
  title, 
  description, 
  imageUrl, 
  imageLeft = true, 
  paymentMethods = [] 
}: { 
  title: string; 
  description: string; 
  imageUrl: string;
  imageLeft?: boolean;
  paymentMethods?: string[];
}) {
  const contentOrder = imageLeft ? 'order-2' : 'order-1'
  const imageOrder = imageLeft ? 'order-1' : 'order-2'

  return (
    <div className="flex flex-col lg:flex-row items-center mb-20">
      <div className={`w-full lg:w-1/2 ${contentOrder} lg:px-8`}>
        <h3 className="text-2xl font-bold text-blue-500 mb-4">{title}</h3>
        <p className="text-lg text-gray-500">{description}</p>
        
        {paymentMethods.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="text-emerald-500 w-5 h-5" />
                <span className="text-gray-600">{method}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`w-full lg:w-1/2 ${imageOrder} mt-8 lg:mt-0`}>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}
