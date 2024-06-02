import React from 'react'
import '../styles/globals.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
    <body>
    <div className="min-h-screen bg-gray-100 p-4">
      {children}
    </div>
    </body>
    </html>
  )
}

export default Layout
