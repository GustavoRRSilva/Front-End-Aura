"use client";
import Image from "next/image";
import "./style.scss";
import FormImage from "@/Assets/imgFormulario.svg";
import { registerUser } from "@/services/postApi";
import { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  const [isSendedCorrectly, setIsSendedCorrectly] = useState(false);
  const sendForm = async (e) => {
    setError("");
    setIsSendedCorrectly(false);
    e.preventDefault();
    try {
      await registerUser({ name, email, number, subject });
      setIsSendedCorrectly(true);
      setError("");
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  };

  return (
    <section className="formSection">
      <div className="content">
        <Image
          height={10}
          width={10}
          alt="Image de um robô"
          src={FormImage}
          className="formImage"
        />
        <div className="form">
          <h2>Simplifique suas tarefas com as soluções de IA da aura</h2>
          <p>Entre em contato preenchendo o formulário abaixo</p>

          <form onSubmit={(e) => sendForm(e)}>
            <input
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Telefone"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Descrição"
              onChange={(e) => setSubject(e.target.value)}
            />
            {error && <p className="error"> {error}</p>}
            {isSendedCorrectly && (
              <p>Formulário preenchido corretamente, entraremos em contato!</p>
            )}
            <input type="submit" value="Enviar" className="sendbtn" />
          </form>
        </div>
      </div>
    </section>
  );
}
