import { Button } from '@/components/ui/button'
import { Clock, CreditCard, XCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className=" py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Manage Your Dental Clinic with Ease
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Our system helps you organize appointments, track patient data, and streamline your clinic`&apos;s operations efficiently.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-6 text-lg font-medium shadow-lg transform hover:scale-105 transition-all duration-300">Start Free 30-Day Trial</Button>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-500">
            <Feature icon={<Clock className="h-5 w-5 text-green-500" />} text="24/7 Support" />
            <Feature icon={<CreditCard className="h-5 w-5 text-blue-500" />} text="No Credit Card Required" />
            <Feature icon={<XCircle className="h-5 w-5 text-red-500" />} text="Cancel Anytime" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  )
}

