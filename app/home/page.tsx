import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative">
        <div className="py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:pb-32 lg:py-32 lg:pb-36 lg:pt-48 xl:pt-72">
          <div className="relative mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:block lg:px-12">
            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-lg text-center lg:ml-0 lg:max-w-2xl lg:text-left">
              <h1 className="mt-4 sm:mt-6 lg:mt-16 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white dark:text-white leading-tight">
                Welcome to Affordable Rides
              </h1>
              <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-white/90 dark:text-white/90 leading-relaxed">
                At Affordable Rides, we believe that everyone deserves a reliable vehicle without breaking the bank.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-12 rounded-full pl-5 pr-3 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/Knowmore">
                    <span className="text-nowrap">Know more</span>
                    <ChevronRight className="ml-1" size={20} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="w-full sm:w-auto h-12 rounded-full px-5 text-base text-white hover:bg-white/10 dark:text-white dark:hover:bg-white/5 border border-white/20"
                >
                  <Link href="https://wa.link/ou0ny7">
                    <span className="text-nowrap">Request an inspection</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div className="absolute inset-4 sm:inset-6 lg:inset-8 -z-10 overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[3rem] border border-black/10 dark:border-white/5">
            <div className="relative w-full h-full">
              <Image
                src="/images/pan.jpg"
                alt="Luxury car showcase"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="bg-white dark:bg-gray-950 py-8 sm:py-12 md:py-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center md:flex-row md:items-center gap-6">
            {/* Section Title */}
            <div className="w-full md:w-44 md:border-r md:border-gray-200 dark:md:border-gray-800 md:pr-6 text-center md:text-right">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Powering the best teams
              </p>
            </div>

            {/* Logo Slider Container */}
            <div className="relative w-full md:w-[calc(100%-11rem)] py-6">
              {/* Progressive Blur Overlays */}
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 lg:w-20 z-10"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 lg:w-20 z-10"
                direction="right"
                blurIntensity={1}
              />

              {/* Infinite Logo Slider */}
              <InfiniteSlider
                speedOnHover={20}
                speed={50}
                gap={64}
                className="py-4"
              >
                {[
                  { src: '/images/ford-logo.png', alt: 'Ford Logo' },
                  { src: '/images/bmw-logo.png', alt: 'BMW Logo' },
                  { src: '/images/honda-logo.png', alt: 'Honda Logo' },
                  { src: '/images/jaguar-logo.png', alt: 'Jaguar Logo' },
                  { src: '/images/nissan-logo.png', alt: 'Nissan Logo' },
                  { src: '/images/maserati-logo.png', alt: 'Maserati Logo' },
                  { src: '/images/subaru-logo.png', alt: 'Subaru Logo' },
                  { src: '/images/tesla-logo.png', alt: 'Tesla Logo' },
                  { src: '/images/jeep-logo.png', alt: 'Jeep Logo' },
                  { src: '/images/bentley-logo.png', alt: 'Bentley Logo' },
                  { src: '/images/hyundai-logo.png', alt: 'Hyundai Logo' },
                  { src: '/images/audi-logo.png', alt: 'Audi Logo' },
                ].map((logo, index) => (
                  <div key={index} className="flex items-center justify-center h-16 sm:h-20">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={80}
                      className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}