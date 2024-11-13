import ImageUm from "@/Assets/img-Juliana.png";
import ImageDois from "@/Assets/img-Lucas.png";
import ImageTres from "@/Assets/img-Mariana.png";
import styles from "./style.module.scss";
import Image from "next/image";
export default function Depoimentos() {
  const depoimentos = [
    {
      img: ImageUm,
      description:
        "A empresa realmente se destaca na implementação de soluções de IA. A equipe é super competente e suas soluções ajudaram nossa empresa a otimizar processos, aumentando nossa produtividade em 30%! Recomendo!",
      name: "Mariana Costa",
    },
    {
      img: ImageDois,
      description:
        "Fiquei impressionado com o suporte ao cliente. Sempre que tive dúvidas sobre a implementação da IA, a equipe foi rápida e eficaz em me ajudar. O produto é intuitivo e fácil de usar!",
      name: "Lucas Martins",
    },
    {
      img: ImageTres,
      description:
        "Desde que começamos a usar as soluções de IA dessa empresa, vimos uma melhoria significativa na análise de dados. As insights gerados são valiosos e têm nos ajudado a tomar decisões mais informadas.",
      name: "Juliana Santos",
    },
    {
      img: ImageDois,
      description:
        "Fiquei impressionado com o suporte ao cliente. Sempre que tive dúvidas sobre a implementação da IA, a equipe foi rápida e eficaz em me ajudar. O produto é intuitivo e fácil de usar!",
      name: "Lucas Martins",
    },
    {
      img: ImageTres,
      description:
        "Desde que começamos a usar as soluções de IA dessa empresa, vimos uma melhoria significativa na análise de dados. As insights gerados são valiosos e têm nos ajudado a tomar decisões mais informadas.",
      name: "Juliana Santos",
    },
    {
      img: ImageDois,
      description:
        "Fiquei impressionado com o suporte ao cliente. Sempre que tive dúvidas sobre a implementação da IA, a equipe foi rápida e eficaz em me ajudar. O produto é intuitivo e fácil de usar!",
      name: "Lucas Martins",
    },
    {
      img: ImageTres,
      description:
        "Desde que começamos a usar as soluções de IA dessa empresa, vimos uma melhoria significativa na análise de dados. As insights gerados são valiosos e têm nos ajudado a tomar decisões mais informadas.",
      name: "Juliana Santos",
    },
  ];
  return (
    <section className={styles.allContent} id="depoimentos">
      <div className={styles.content}>
        <h2>Depoimentos</h2>
        <div className={styles.allDepoiments}>
          {depoimentos &&
            depoimentos.map((depoimento, index) => (
              <div key={index} className={styles.depoimento}>
                <div className={styles.imgName}>
                  <Image
                    width={100}
                    height={100}
                    src={depoimento.img}
                    alt="person image"
                  />
                  <h3>{depoimento.name}</h3>
                </div>
                <p>{depoimento.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
