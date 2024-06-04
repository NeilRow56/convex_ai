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
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden max-lg:justify-center">
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
                'flex items-center justify-center gap-3 py-4 max-lg:px-4 lg:justify-start',
                {
                  'bg-nav-focus border-orange-1 border-r-4': isActive,
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
