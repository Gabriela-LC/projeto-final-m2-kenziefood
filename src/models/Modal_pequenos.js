import { Produto } from "../controllers/ProdutoController.js";
import { Botoes } from "./Dashboard_Botoes.js";
import { Filtrar } from "./Dashboard_Filtrar.js";
import { Template } from "./Dashboard_Template.js";

class ModalPequeno {
  static Deletar() {
    const body = document.querySelector("body");
    const externo = document.createElement("div");
    const conteiner = document.createElement("div");
    const cabecalho = document.createElement("div");
    const titulo = document.createElement("h2");
    const button = document.createElement("button");
    const mensagem = document.createElement("h2");
    const divBotoes = document.createElement("div");
    const sim = document.createElement("button");
    const nao = document.createElement("button");
    externo.classList.add("externa");
    cabecalho.classList.add("cabecalhoDeletar");
    conteiner.classList.add("conteinerDeletar");
    titulo.innerText = "Exclusão de produto";
    button.innerText = "X";
    sim.innerText = "Sim";
    sim.id = "sim";
    nao.innerText = "Nao";
    nao.id = "nao";
    mensagem.innerText = "Tem certeza que deseja exluir este produto?";
    divBotoes.id = "divBotoes";
    body.appendChild(externo);
    externo.appendChild(conteiner);
    conteiner.appendChild(cabecalho);
    cabecalho.appendChild(titulo);
    cabecalho.appendChild(button);
    conteiner.appendChild(mensagem);
    conteiner.appendChild(divBotoes);
    divBotoes.appendChild(sim);
    divBotoes.appendChild(nao);
    nao.addEventListener("click", (e) => {
      e.preventDefault();
      externo.remove();
    });
    sim.addEventListener("click", async (e) => {
      e.preventDefault();
      await Produto.deletarProduto(Botoes.id);
      Template.template(await Filtrar.api());
      externo.remove();
    });
    button.addEventListener("click", async (e) => {
      e.preventDefault();
      externo.remove();
    });
  }
  static modalAvisos(avisos, resultado) {
    const body = document.querySelector("body");
    const externo = document.createElement("div");
    const conteiner = document.createElement("div");
    const cabecalho = document.createElement("div");
    const titulo = document.createElement("h2");
    const aviso = document.createElement("h2");
    const div = document.createElement("div");
    externo.classList.add("externo");
    conteiner.classList.add("conteinerAviso");
    cabecalho.classList.add("cabecalhoAviso");
    div.classList.add("avisoDiv");
    titulo.innerText = "Status";
    aviso.innerText = `${avisos}`;
    body.appendChild(externo);
    externo.appendChild(conteiner);
    conteiner.appendChild(cabecalho);
    cabecalho.appendChild(titulo);
    conteiner.appendChild(aviso);
    conteiner.appendChild(div);
    if (resultado == true) {
      div.style.backgroundColor = "#39DF8F";
    } else {
      div.style.backgroundColor = "#FF2253";
    }
    window.addEventListener("click", (e) => {
      externo.remove();
    });
  }
  static logout() {
    const body = document.querySelector("body");
    const externo = document.createElement("div");
    const conteiner = document.createElement("div");
    const cabecalho = document.createElement("div");
    const h2 = document.createElement("button");
    const button = document.createElement("button");
    externo.classList.add("externo");
    conteiner.classList.add("conteinerLogout");
    cabecalho.classList.add("cabecalhoLogout");
    h2.innerText = "Home";
    button.innerText = "Logout";
    body.appendChild(externo);
    externo.appendChild(conteiner);
    conteiner.appendChild(cabecalho);
    cabecalho.appendChild(h2);
    conteiner.appendChild(button);
    window.addEventListener("click", (e) => {
      if (e.target == externo) {
        externo.remove();
      }
    });
    button.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      window.location.href = "../../index.html";
    });
    h2.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "../../index.html";
    });
  }
}
export { ModalPequeno };
