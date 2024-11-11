import Image from "next/image";
import Navbar from "../Components/Navbar";
import MainBanner from "../Components/MainBanner";
import Missao from "../Components/Missao";
import Visao from "../Components/Visao"; 
import Form from "@/Components/Form";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="barBetweenContent" />
      <MainBanner />
      <Missao /> 
      <Visao /> 
      <div className="barBetweenContent" />
      <Form />
    </div>
  );
}
