import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import CadastroLivro from "../components/Admin/CadastroLivro";
import CadastroGenero from "../components/Admin/CadastroGenero";
import ConsultaReserva from "../components/Admin/ConsultaReserva";
import "./admin.css";

export default function Admin() {
  async function load() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
      }

      const user = await api.get("/auth/me", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!user.data.funcionario) {
        alert("Você não tem acesso!");
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(error);
      window.location.href = "/login";
    }
  }

  useEffect(() => {
    load();
  });
  return (
    <div className="container">
      <h2>Painel de Admin</h2>
      <div className="container-2">
        <div>
          <h4>Cadastrar livro</h4>

          <CadastroLivro />
        </div>
        <div>
          <h4>Cadastrar genero</h4>
          <br />
          <CadastroGenero />
        </div>
      </div>
      <h4>Consultar reserva</h4>
      <br />
      <ConsultaReserva />

      <br />
      <br />
      <br />
    </div>
  );
}
