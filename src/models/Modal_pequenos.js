import { Produto } from "../controllers/ProdutoController.js"
import { Botoes } from "./Dashboard_Botoes.js"
import { Template } from "./Dashboard_Template.js"

class ModalPequeno {

    static Deletar() {
        const body = document.querySelector("body")
        const externo = document.createElement("div")
        const conteiner = document.createElement("div")
        const cabecalho = document.createElement("div")
        const titulo = document.createElement("h2")
        const button = document.createElement("button")
        const mensagem = document.createElement("h2")
        const divBotoes = document.createElement("div")
        const sim = document.createElement("button")
        const nao = document.createElement("button")
        externo.classList.add("externa")
        cabecalho.classList.add("cabecalhoDeletar")
        conteiner.classList.add("conteinerDeletar")
        titulo.innerText = "Exclusão de produto"
        button.innerText = "X"
        sim.innerText = "Sim"
        sim.id = "sim"
        nao.innerText = "Nao"
        nao.id = "nao"
        mensagem.innerText = "Tem certeza que deseja exluir este produto?"
        divBotoes.id = "divBotoes"
        body.appendChild(externo)
        externo.appendChild(conteiner)
        conteiner.appendChild(cabecalho)
        cabecalho.appendChild(titulo)
        cabecalho.appendChild(button)
        conteiner.appendChild(mensagem)
        conteiner.appendChild(divBotoes)
        divBotoes.appendChild(sim)
        divBotoes.appendChild(nao)
        nao.addEventListener('click', (e) => {
            e.preventDefault()
            externo.remove()
        })
        sim.addEventListener('click', async (e) => {
            e.preventDefault()
            await Produto.deletarProduto(Botoes.id)
            Template.template()
            externo.remove()
        })
        button.addEventListener('click', async (e) => {
            e.preventDefault()
            externo.remove()
        })
    }
    static modalAvisos(avisos, resultado) {
        const body = document.querySelector("body")
        const externo = document.createElement("div")
        const conteiner = document.createElement("div")
        const cabecalho = document.createElement("div")
        const titulo = document.createElement("h2")
        const aviso = document.createElement("h2")
        const div = document.createElement("div")
        externo.classList.add("externo")
        conteiner.classList.add("conteinerAviso")
        cabecalho.classList.add("cabecalhoAviso")
        div.classList.add("avisoDiv")
        titulo.innerText = "Status"
        aviso.innerText = `${avisos}`
        div.style.backgroundColor = "black"
        body.appendChild(externo)
        externo.appendChild(conteiner)
        conteiner.appendChild(cabecalho)
        cabecalho.appendChild(titulo)
        conteiner.appendChild(aviso)
        conteiner.appendChild(div)
        if (resultado == true) {
            div.style.backgroundColor = "#39DF8F"
        } else {
            div.style.backgroundColor = "#FF2253"
        }
        window.addEventListener('click', (e) => {
            externo.remove()

        })
    }
}
export { ModalPequeno }
