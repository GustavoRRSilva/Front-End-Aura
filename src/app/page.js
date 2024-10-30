import Image from "next/image";
import Navbar from "../Components/Navbar";
import MainBanner from "../Components/MainBanner";
import ValoresBanner from "../Components/ValoresBanner"

export default function Home() {
  return (
    <div >
       <Navbar/>
        <div className="barBetweenContent"/> 
       <MainBanner/>
       <ValoresBanner/>
    </div>
  );
}