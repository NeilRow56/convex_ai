import { Leftsidebar } from '@/components/LeftSidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>
        <Leftsidebar />

        {children}
        <p className="text-white-1">RIGHT SIDEBAR</p>
      </main>
    </div>
  )
}

export default MainLayout
