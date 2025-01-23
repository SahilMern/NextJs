import React from 'react'

const Headers = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <h2 className="text-2xl font-bold">Logo</h2>
          
          {/* Navbar Links */}
          <div className="space-x-6">
            <p className="inline-block hover:text-gray-400 cursor-pointer">Home</p>
            <p className="inline-block hover:text-gray-400 cursor-pointer">About</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Headers;
