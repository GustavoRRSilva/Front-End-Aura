import Image from "next/image";
import Navbar from "../Components/Navbar";
import MainBanner from "../Components/MainBanner";
import Form from "@/Components/Form";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="barBetweenContent" />
      <MainBanner />
      <div className="barBetweenContent" />
      <Form />
    </div>
  );
}
