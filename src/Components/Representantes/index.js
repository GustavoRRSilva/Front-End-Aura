import Image from "next/image";
import styles from "./style.module.scss";
import CeoImage from "@/Assets/img-CamillaCEO.png";
import InfoDirector from "@/Assets/img-RafaelDiretorInfo.png";
import LucasDiretoria from "@/Assets/img-LucasDiretorIA.png";
export default function Representantes() {
  return (
    <section className={styles.allContent}>
      <div className={styles.content}>
        <div className={styles.textAndCeo}>
          <div className={styles.imageAndDesc}>
            <Image src={CeoImage} alt="imagem da ceo da Aura" />
            <h3>Camila Oliveira</h3>
            <p>Diretora executiva</p>
          </div>
          <div className={styles.text}>
            <h2>Representantes</h2>
            <p>
              Combinando profundo conhecimento técnico com habilidades de
              liderança, nossos gestores garantem que a Aura ofereça produtos de
              ponta e serviços customizados para atender às necessidades
              específicas de seus clientes, impulsionando a eficiência e a
              inovação em diversas indústrias.
            </p>
          </div>
        </div>
        <div className={styles.otherPartners}>
          <div className={styles.imageAndDesc}>
            <Image src={InfoDirector} alt="imagem da ceo da Aura" />
            <h3>Rafael Souza</h3>
            <p>Diretor de Informações</p>
          </div>
          <div className={styles.imageAndDesc}>
            <Image src={LucasDiretoria} alt="imagem da ceo da Aura" />
            <h3>Lucas Almeida</h3>
            <p>Diretor de IA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
