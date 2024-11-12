import Image from "next/image";
import VisaoImage from "../../Assets/visao.png";
import "./style.scss";

export default function Visao() {
  return (
    <section className="visaoSection">
      <div className="visaoContainer">
        <div className="textSection">
          <div className="text">
            <h2>VISÃO</h2>
            <p>
              Ser o parceiro tecnológico ideal para quem deseja <br />
              estar á frente na era digital.
            </p>
          </div>
        </div>
        <div className="imageContent">
          <Image
            src={VisaoImage}
            alt="Visão"
            className="visaoImg"
            width={632}
            height={421}
          />
        </div>
      </div>
    </section>
  );
}
