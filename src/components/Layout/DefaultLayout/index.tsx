import React from 'react'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <section>{children}</section>
}

export default DefaultLayout
