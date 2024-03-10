
// To inform next js, this is a client component 
"use client"; 
  
// Import useState from 'react' library 
import { useState } from "react"; 
import { Switch } from "../UI/Switch";


function index() {
  const [checked, setChecked] = useState(false);
  return (
    <nav className="sticky top-0 z-100 bg-transparent">
     <div className="max-w-5xl mx-auto ">
     <div className="flex items-center justify-between h-16 ">
      <span className="text-2xl text-gray-100 font-semibold">Logo</span>
      <div className="flex space-x-4 text-white-100">

      <Switch checked={checked} setChecked={setChecked} />

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