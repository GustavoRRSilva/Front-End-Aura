"use client";

import Image from "next/image";
import "./style.scss";
import AuraLogo from "../../Assets/auraLogo.svg";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="logo">
          <div className="aura">
            <Image
              className="auraLogo"
              src={AuraLogo}
              width={221}
              height={110}
            />
          </div>
          <p>©2024&Aura | Políticas de Privacidade | Termos e Condições</p>
        </div>

        <div className="contatos">
          <h1>Contatos</h1>
          <ul>
            <li>123-456-789</li>
            <li>contato@aura.com</li>
          </ul>
          <div className="social-icons">
            <FaInstagram className="social-icon-insta" />
            <FaTwitter className="social-icon-x" />
            <FaFacebook className="social-icon-fb" />
          </div>
        </div>
        <div className="Localizacao">
          <h1>Localização</h1>
          <ul>
            <li>Rua do exemplo, 123</li>
            <li>Cidade-PE, Brasil, 12345-678</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
