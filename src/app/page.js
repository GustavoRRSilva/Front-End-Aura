import Image from "next/image";
import Navbar from "../Components/Navbar";
import MainBanner from "../Components/MainBanner"

export default function Home() {
  return (
    <div >
       <Navbar/>
        <div className="barBetweenContent"/> 
       <MainBanner/>
    </div>
  );
}