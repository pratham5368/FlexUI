
// To inform next js, this is a client component 
"use client"; 
  
// Import useState from 'react' library 
import { useState } from "react";
import { Switch } from "../UI/Switch";


function index() {
  {/*const [checked, setChecked] = useState(false);*/}
  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border-slate-600 border-b border-opacity-75 shadow-lg">
     <div className="max-w-5xl mx-auto ">
     <div className="flex items-center justify-between h-16 ">
      <span className="text-2xl text-gray-100 font-semibold">Logo</span>
      <div className="flex space-x-4 text-white-100">

      {/*<Switch checked={checked} setChecked={setChecked} />*/}

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