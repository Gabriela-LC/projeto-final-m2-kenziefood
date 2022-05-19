import { Produto } from "../controllers/ProdutoController.js";
import { Card } from "../models/CriarCards.js";

const listaProdutosApi = await Produto.listaProdutoPublico();
const categoriaTodos = document.getElementById("btnFiltros");
categoriaTodos.addEventListener("click", filtroNavCategoria);
const categoriaPanificadora = document.getElementById("btnPao");
categoriaPanificadora.addEventListener("click", filtroNavCategoria);
const categoriaFrutas = document.getElementById("btnFruta");
categoriaFrutas.addEventListener("click", filtroNavCategoria);
const categoriaBebidas = document.getElementById("btnBebida");
categoriaBebidas.addEventListener("click", filtroNavCategoria);
const barraPesquisa = document.getElementById("inputSearch");
barraPesquisa.addEventListener("input", coletaStringDigitada);

function filtroNavCategoria(event) {
  const categoriaClicada = event.target.innerText;
  let dadosFiltrados = [...listaProdutosApi];
  if (categoriaClicada === "Todos") {
    populaLoja(dadosFiltrados);
  } else {
    dadosFiltrados = dadosFiltrados.filter((elem) => {
      if (categoriaClicada === elem.categoria) return elem;
    });
    populaLoja(dadosFiltrados);
  }
}

function populaLoja(data) {
  const listaProdutos = document.getElementById("containerProdutos");
  listaProdutos.innerHTML = "";
  data.forEach((elem) => {
    listaProdutos.appendChild(Card.criaCard(elem));
  });
}

function coletaStringDigitada(event) {
  let string = barraPesquisa.value.toLowerCase();
  filtraBarraPesquisa(string);
}

function filtraBarraPesquisa(palavra) {
  let listaFiltrada = [...listaProdutosApi];
  listaFiltrada = listaFiltrada.filter((elem) => {
    if (
      elem.categoria.toLowerCase().includes(palavra) ||
      elem.nome.toLowerCase().includes(palavra)
    )
      return elem;
  });
  populaLoja(listaFiltrada);
}

populaLoja(listaProdutosApi);
