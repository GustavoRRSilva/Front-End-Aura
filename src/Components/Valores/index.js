import styles from "./style.module.scss";
import ImageUm from "@/Assets/img-inovacao.png";
import ImageDois from "@/Assets/img-etica.png";
import ImageTres from "@/Assets/img-precisao.png";
import ImageQuatro from "@/Assets/img-colaboracao.png";
import Image from "next/image";

export default function Valores() {
  const valores = [
    {
      img: ImageUm,
      title: "Inovação",
      description:
        "Buscamos constantemente novas maneiras de usar a tecnologia para transformar desafios em oportunidades, mantendo-nos na vanguarda das tendências tecnológicas.",
    },
    {
      img: ImageDois,
      title: "Ética",
      description:
        "Agimos com integridade em todas as nossas interações, garantindo transparência e respeito em cada projeto que desenvolvemos.",
    },
    {
      img: ImageTres,
      title: "Precisão",
      description:
        "Cada detalhe importa. Nosso compromisso é entregar soluções eficientes e precisas, que atendam e superem as expectativas dos nossos clientes.",
    },
    {
      img: ImageQuatro,
      title: "Colaboração",
      description:
        "Acreditamos que as melhores soluções surgem quando trabalhamos juntos. Valorizamos parcerias sólidas e a troca de ideias para alcançar resultados extraordinários.",
    },
  ];

  return (
    <div className={styles.allContent}>
      <div className={styles.content}>
        <h2>VALORES</h2>
        <div className={styles.allImageText}>
          {valores.map((valor, index) => (
            <div key={index} className={styles.imageText}>
              <>
                <Image alt={valor.title} src={valor.img} />{" "}
                <div className={styles.texts}>
                  <h3>{valor.title}</h3>
                  <p>{valor.description}</p>{" "}
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
