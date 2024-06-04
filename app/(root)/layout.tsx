const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>
        <p className="text-white-1">LEFT SIDEBAR</p>

        {children}
        <p className="text-white-1">RIGHT SIDEBAR</p>
      </main>
    </div>
  )
}

export default MainLayout
