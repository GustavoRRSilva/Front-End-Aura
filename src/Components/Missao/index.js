import Image from "next/image";
import MissaoImage from "../../Assets/missao.png";
import "./style.scss";

export default function Missao() {
  return (
    <section className="missaoSection">
      <div className="missaoContainer">
        <div className="imageContent">
          <Image
            src={MissaoImage}
            alt="Missão"
            className="missaoImg"
            width={632}
            height={421}
          />
        </div>
        <div className="textSection">
          <div className="text">
            <h2>MISSÃO</h2>
            <p>
              Capacitar empresas a inovar por meio da <br />
              tecnologia de IA Generativa, automatizando <br />
              processos criativos e otimizando a <br />
              eficiência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
