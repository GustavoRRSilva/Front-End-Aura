import "./style.scss"
import Image from "next/image"
import VrImage from "../../Assets/vrImg.svg";
export default function MainBanner() {return(
  <section className="mainContent">
    <div className="container">
    <div className="vrImageContent"> 
    <Image src = {VrImage} width={10} height={VrImage} className="vrImg" alt="Vr image"/>
    </div>
        <section className="textSection">
        <h1>Revolucionando a Criação com Soluções Automatizadas</h1>
        <p>A AURA está na vanguarda da criação automatizada, desenvolvendo soluções inovadoras que transformam ideias em realidade.</p>
        <button>Saiba mais</button>
  
        </section>
        </div>
    </section>
 
)}