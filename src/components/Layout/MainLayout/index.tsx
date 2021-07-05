import React from 'react'
import Header from '../../Header'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}

export default MainLayout
