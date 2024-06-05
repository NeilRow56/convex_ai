'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export const Leftsidebar = () => {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10">
          <div className="pl-5 lg:pl-2">
            <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          </div>

          <h1 className="text-24 text-white font-extrabold max-lg:hidden max-lg:justify-center">
            Podcastr
          </h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`)

          return (
            <Link
              href={route}
              key={label}
              className={cn(
                'flex items-center justify-center gap-3 py-4 max-lg:px-4 md:justify-start',
                {
                  'border-r-4 border-orange-1 bg-nav-focus': isActive,
                }
              )}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}
