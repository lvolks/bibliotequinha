import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Usuario from "./pages/Usuario";
import Reserva from "./pages/Reserva";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Detalhes from "./pages/detalhes";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="usuario" element={<Usuario />} />
      <Route path="login" element={<Login />} />
      <Route path="reserva" element={<Reserva />} />
      <Route path="*" element={<h1> 404 - Página Não Encontrada!</h1>} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="detalhes/:codigo" element={<Detalhes />} />
    </Routes>
  );
}
