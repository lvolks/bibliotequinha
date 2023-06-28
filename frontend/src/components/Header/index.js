import "./header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className="header-options-container">
      <div>
        <Link to="/">
          <img
            className="logo-icon"
            src={process.env.PUBLIC_URL + "/logo-no-background.png"}
          ></img>
        </Link>
      </div>
      <div
        style={{
          flex: 1,
        }}
      />
      <div>
        <Link to="/reserva">
          <img
            className="carrinho"
            src={process.env.PUBLIC_URL + "/book.png"}
          ></img>
        </Link>
      </div>
      <Link to="/admin">
        <button type="button" className="btn btn-outline-primary me-2 login">
          Painel de admin
        </button>
      </Link>
      <div>
        {location.pathname != "/login" && (
          <a href={`/login`}>
            <button
              type="button"
              className="btn btn-outline-primary me-2 login"
            >
              Login
            </button>
          </a>
        )}
      </div>
      <div>
        {location.pathname != "/cadastro" && (
          <a href={`/usuario`}>
            <button type="button" className="btn btn-primary registro">
              Cadastrar
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
