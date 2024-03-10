import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Landing from "../components/Landing";


export default function Home() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
    
      <Header/>
      <Navbar/>
      <Landing/>
    </div>
  );
}
