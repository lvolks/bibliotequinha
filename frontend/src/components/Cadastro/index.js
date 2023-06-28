import React, { useState } from "react";
import api from "../../services/api";
import "./Cadastro.css";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const usuario = {
      nome,
      email,
      senha,
    };

    api
    .post("/usuarios", usuario)
      .then((response) => {
        console.log(response.data);
        alert("O usuário " + response.data.codigo + " foi criado com sucesso!");
        setNome("");
        setEmail("");
        setSenha("");
      })
      .catch((err) => {
        console.error(err);
        alert("Ocorreu um erro! Veja no console ..");
      })
  };
  

  return (
    <div className="container text-center">
      <div>
        <form className="form container-master" onSubmit={handleSubmit}>
          <div className="container1">
            <div>
              <div className="form-group">
                <label>
                  Nome:
                  <input
                    type="text"
                    className="form-control"
                    value={nome}
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Email:
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </label>
              </div>
              <br />
              <div className="form-group">
                <label>
                  Senha:
                  <input
                    type="password"
                    className="form-control"
                    value={senha}
                    onChange={(e) => {
                      setSenha(e.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary botao">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
