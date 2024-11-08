"use client"

import Image from "next/image";
import ImgInovacao from "../../Assets/imgInovacao.png";
import ImgColaboracao from "../../Assets/img-colaboracao.png";
import imgEtica from "../../Assets/img-etica.png";
import imgPrecisao from "../../Assets/img-precisao.png";
import { useState, useEffect } from "react";
import "./style.scss";

export default function Navbar() {
  const [isNavbarOpen, setIsValoresBannerOpen] = useState(false);

  useEffect(() => {
    // Criando o IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Adiciona a classe 'show' quando o elemento entra na tela
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.5, // O elemento precisa estar 50% visível para acionar a animação
    });

    // Observa todas as divs com a classe 'inovacao'
    const elements = document.querySelectorAll('.inovacao');
    elements.forEach((el) => observer.observe(el));

    // Cleanup: parar a observação quando o componente for desmontado
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="banner">
      <div className="valoresBanner">
        <h1 className="show">V A L O R E S</h1>
        {/* Primeira seção */}
        <div className="inovacao">
          <Image
            className="imgInovacao"
            src={ImgInovacao}
            width={504}
            height={430}
            alt="imagem inovação"
          />
          <div className="text" id="textLeft">
            <h2>Inovação</h2>
            <p>
              Buscamos constantemente novas maneiras de usar a <br /> tecnologia
              para transformar desafios em oportunidades,<br /> mantendo-nos na
              vanguarda das tendências tecnológicas.
            </p>
          </div>
        </div>
        {/* Segunda seção */}
        <div className="inovacao">
          <div className="text" id="textRight">
            <h2>Precisão</h2>
            <p>
              Cada detalhe importa. Nosso compromisso é entregar <br /> soluções
              eficientes e precisas, que atendam e <br /> superem as expectativas
              dos nossos clientes.
            </p>
          </div>
          <Image
            className="imgPrecisao"
            src={imgPrecisao}
            width={504}
            height={430}
            alt="imagem precisão"
          />
        </div>
        {/* Terceira seção */}
        <div className="inovacao">
          <Image
            className="imgInovacao"
            src={ImgColaboracao}
            width={504}
            height={430}
            alt="imagem colaboração"
          />
          <div className="text" id="textLeft">
            <h2>Colaboração</h2>
            <p>
              Acreditamos que as melhores soluções surgem <br /> quando
              trabalhamos juntos. Valorizamos parcerias <br /> sólidas e a troca
              de ideias para alcançar resultados <br /> extraordinários.
            </p>
          </div>
        </div>
        {/* Quarta seção */}
        <div className="inovacao">
          <div className="text" id="textRight">
            <h2>ÉTICA</h2>
            <p>
              Agimos com integridade em todas as nossas <br /> interações,
              garantindo transparência e respeito em <br /> cada projeto que
              desenvolvemos.
            </p>
          </div>
          <Image
            className="imgInovacao"
            src={imgEtica}
            width={504}
            height={430}
            alt="imagem Ética"
          />
        </div>
      </div>
    </div>
  );
}
