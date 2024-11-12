import Navbar from "../Components/Navbar";
import MainBanner from "../Components/MainBanner";
import Missao from "../Components/Missao";
import Visao from "../Components/Visao";
import Form from "@/Components/Form";
import Footer from "@/Components/Footer";

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
      <Footer />
    </div>
  );
}
