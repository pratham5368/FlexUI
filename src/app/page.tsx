import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Landing/>
    </div>
  );
}
