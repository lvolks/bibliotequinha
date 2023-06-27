import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Comments from '../components/Comments';
import "./detalhes.css";

export default function Detalhes() {
  const [livro, setLivro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantidade, setQuantidade] = useState(1);
  const { codigo } = useParams();
  const navigate = useNavigate();

  const adicionarAoCarrinho = () => {

    console.log('Livro:', livro);
    console.log('Quantidade:', quantidade);

    const itemCarrinho = {
      id: livro.id,
      nome: livro.nome,
      quantidade: quantidade
    };

    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    const novoCarrinho = [...carrinhoAtual, itemCarrinho];

    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    if(quantidade==1){
    window.alert("Item adicionado ao carrinho com sucesso!")
    } 
    else{
      window.alert("Itens adicinados ao carrinho com sucesso!")
    }
    navigate("/");
  };

  useEffect(() => {

    fetch(`http://localhost:3001/livros/${codigo}`)
      .then(response => response.json())
      .then(data => {
        setLivro(data);
        setLoading(false);
      })
      .catch(err => console.error(err))
  }, []);


  return (
    <div className="container detalhes-container">
      {loading ? (
        <h1 className="display-6">Carregando...</h1>
      ) : (
        <>
          {Object.keys(livro).length === 0 ? (
            <h1 className="display-6">Nenhum Livro encontrado.</h1>
          ) : (
            <div className="row">
              <div className="col">
                <div className="card" style={{ maxWidth: "500px" }}>
                  <img src={livro.imagem} alt={livro.nome} className="card-img-top" />
                </div>
              </div>
              <div className="col">
                <div className="card mx-auto p-3">
                  <h1 className="text-center">{livro.nome}</h1>
                  <p className="text-center">Preço do livro: {livro.preço}R$</p>
                  <p className="text-center">Descrição do livro: {livro.descrição}</p>
                  <div className="text-center">
                    <label>
                      Quantidade:
                      <input
                        type="number"
                        min="1"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                      />
                    </label>
                    <button className="btn btn-primary" onClick={adicionarAoCarrinho}>
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </div>
              {Object.keys(livro).length !== 0 && <Comments livro={codigo} />}
            </div>
          )}
        </>
      )}
    </div>
  );

}