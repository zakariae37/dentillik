import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Image 
              src='/images/logo.png'
              alt='logo'
              width={70}
              height={70}
              className="transition-transform transform hover:scale-110"
            />
          </div>
          <div className="hidden sm:flex sm:space-x-12">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <Button className="bg-blue-500 hover:bg-blue-600  text-white px-6 py-6 text-lg font-medium shadow-lg transform hover:scale-105 transition-all duration-300">
              Try for Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative text-lg font-medium text-gray-900 hover:text-gray-500 transition-all duration-300">
      {children}
    </Link>
  )
}
