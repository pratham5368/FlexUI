import React from 'react'

function index() {
  return (
    <nav className="sticky top-0 z-10 bg-opacity-30">
     <div className="max-w-5xl mx-auto px-4">
     <div className="flex items-center justify-between h-16">
      <span className="text-2xl text-gray-100 font-semibold">Logo</span>
      <div className="flex space-x-4 text-white-100">
        <a href="#">Dashboard</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default index;