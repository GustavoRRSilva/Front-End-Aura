import Navbar from "../Components/Navbar";
import MainBanner from "../Components/MainBanner";
import Missao from "../Components/Missao";
import Visao from "../Components/Visao";
import Form from "@/Components/Form";
import Footer from "@/Components/Footer";
import Valores from "@/Components/Valores";
import Representantes from "@/Components/Representantes";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="barBetweenContent" />
      <MainBanner />
      <Missao />
      <Visao />
      <Valores />
      <div className="barBetweenContent" />
      <Representantes />
      <Form />
      <Footer />
    </div>
  );
}
