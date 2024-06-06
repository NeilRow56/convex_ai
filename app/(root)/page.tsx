'use client'

import { PodcastCard } from '@/components/PodcastCard'
import { podcastData } from '@/constants'
import { api } from '@/convex/_generated/api'
import { UserButton } from '@clerk/nextjs'
import { useQuery } from 'convex/react'

export default function Home() {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold">Trending Podcasts</h1>
        <div className="flex flex-col items-center justify-between p-24 text-white-1">
          <UserButton />
        </div>

        <div className="podcast_grid">
          {podcastData.map(({ imgURL, title, description, id }) => (
            <PodcastCard
              key={id}
              imgUrl={imgURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
