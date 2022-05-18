import { Produto } from "../controllers/ProdutoController.js";
import { Card } from "../models/CriarCards.js";

function criaCard(data) {}

// function populaLoja() {}

// populaLoja();

const listaProdutos = document.getElementById("containerProdutos");
// listaProdutos.innerHTML = "";

const obj = {
  id: "97e3e9db-dd3f-42b2-a838-ff505a020213",
  nome: "Panqueca de banana com aveia",
  preco: 20.4,
  categoria: "Panificadora",
  descricao:
    "Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.",
  imagem:
    "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png",
  createdAt: "2022-05-16T06:53:33.405Z",
  updatedAt: "2022-05-16T06:53:33.405Z",
};

for (let i = 0; i < 6; i++) {
  listaProdutos.appendChild(Card.criaCard(obj));
}
