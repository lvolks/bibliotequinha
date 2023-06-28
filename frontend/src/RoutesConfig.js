import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Usuario from "./pages/Usuario";
import Reserva from "./pages/Reserva";
import Home from "./pages/home";
import Detalhes from "./pages/detalhes";
import Admin from "./pages/Admin";
import EditarUsuario from "./pages/editarUsuario"
import ConsultarUsuario from "./pages/consultarUsuario"

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="usuario" element={<Usuario />} />
      <Route path="editarusuario" element={<EditarUsuario />} />
      <Route path="consultarusuario" element={<ConsultarUsuario />} />
      <Route path="login" element={<Login />} />
      <Route path="reserva" element={<Reserva />} />
      <Route path="admin" element={<Admin />} />
      <Route path="detalhes/:codigo" element={<Detalhes />} />
      <Route path="*" element={<h1> 404 - Página Não Encontrada!</h1>} />
    </Routes>
  );
}
