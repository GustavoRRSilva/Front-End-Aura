import Image from "next/image";
import Navbar from "../Components/Navbar";
import MainBanner from "../Components/MainBanner";
import Missao from "../Components/Missao";
import Visao from "../Components/Visao"; 


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="barBetweenContent" />
      <MainBanner />
      <Missao /> {}
      <Visao /> {}
    </div>
  );
}
