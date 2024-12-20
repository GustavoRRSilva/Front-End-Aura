"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import ImgServicos from "@/Assets/techImage.png";
import ImageUm from "@/Assets/img-servicos001.png";
import ImageDois from "@/Assets/img-servicos002.png";
import ImageTres from "@/Assets/img-servicos003.png";
export default function Servicos() {
  const servicos = [
    {
      img: ImageUm,
      description:
        "Utilize a IA para gerar imagens de alta qualidade a partir de descrições textuais.",
    },
    {
      img: ImageDois,
      description:
        "Deixe a IA criar rascunhos, conceitos e até campanhas completas.",
    },
    {
      img: ImageTres,
      description:
        "Soluções sob medida para empresas que querem explorar o poder da IA Generativa.",
    },
  ];
  return (
    <div className={styles.allContent} id="servicos">
      <div className={styles.content}>
        <h2>SERVIÇOS</h2>
        <Image
          src={ImgServicos}
          width={1000}
          height={10}
          alt="Images generated by IA"
          className={styles.bannerImg}
        />
        <div className={styles.allImageText}>
          {servicos.map((servico, index) => (
            <div key={index} className={styles.imageText}>
              <>
                <Image alt={servico.title} src={servico.img} />{" "}
                <div className={styles.texts}>
                  <p>{servico.description}</p>{" "}
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
