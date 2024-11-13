import Navbar from "../Components/Navbar";
import MainBanner from "../Components/MainBanner";
import Missao from "../Components/Missao";
import Visao from "../Components/Visao";
import Form from "@/Components/Form";
import Footer from "@/Components/Footer";
import Valores from "@/Components/Valores";
import Representantes from "@/Components/Representantes";
import Servicos from "@/Components/Servicos";
import Depoimentos from "@/Components/Depoimentos";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainBanner />
      <Visao />
      <Missao />
      <Valores />
      <Representantes />
      <Servicos />
      <Depoimentos />
      <Form />
      <Footer />
    </div>
  );
}
