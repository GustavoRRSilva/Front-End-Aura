"use client";

import Image from "next/image";
import "./style.scss";
import AuraLogo from "../../Assets/auraLogo.svg";
import MenuIcon from "../../Assets/menuIcon.svg";
import CloseMenu from "../../Assets/closeMenu.svg";
import { useState } from "react";
export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className="header">
      <div className="content">
        <Image
          className="auraLogo"
          src={AuraLogo}
          width={10}
          height={10}
          alt="Logo da Aura"
        />
        <nav>
          <Image
            className="menuIcon"
            onClick={(e) => setIsNavbarOpen(true)}
            src={MenuIcon}
            width={10}
            height={10}
            alt="MenuIcon"
          />
          <ul className={`navbarOpen${isNavbarOpen}`}>
            <Image
              onClick={(e) => setIsNavbarOpen(false)}
              className="closeMenu"
              src={CloseMenu}
              height={10}
              width={10}
              alt="Icon to close the menu"
            />
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li>
              <a href="#forms">Formulário</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
