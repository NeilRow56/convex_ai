import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 text-white-1 font-bold">Trending Podcasts</h1>
        <Button className="text-white-1">Button</Button>
      </section>
    </div>
  )
}