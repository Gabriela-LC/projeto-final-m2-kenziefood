import { Produto } from "../controllers/ProdutoController.js"
import { Botoes } from "./Dashboard_Botoes.js"
import { Template } from "./Dashboard_Template.js"

class ModalPequeno{

    static Deletar(){
        const body=document.querySelector("body")
        const externo=document.createElement("div")
        const conteiner=document.createElement("div")
        const cabecalho=document.createElement("div")
        const titulo=document.createElement("h2")
        const button=document.createElement("button")
        const mensagem=document.createElement("h2")
        const divBotoes=document.createElement("div")
        const sim=document.createElement("button")
        const nao=document.createElement("button")
        externo.classList.add("externa")
        cabecalho.classList.add("cabecalhoDeletar")
        conteiner.classList.add("conteinerDeletar")
        titulo.innerText                = "Exclusão de produto"
        button.innerText                = "X"
        sim.innerText                   = "Sim"
        sim.id                          = "sim"
        nao.innerText                   = "Nao"
        nao.id                          = "nao"
        mensagem.innerText              = "Tem certeza que deseja exluir este produto?"
        divBotoes.id                    = "divBotoes"
        body.appendChild(externo)
        externo.appendChild(conteiner)
        conteiner.appendChild(cabecalho)
        cabecalho.appendChild(titulo)
        cabecalho.appendChild(button)
        conteiner.appendChild(mensagem)
        conteiner.appendChild(divBotoes)
        divBotoes.appendChild(sim)
        divBotoes.appendChild(nao)
        nao.addEventListener('click',(e)=>{
            e.preventDefault()
            externo.remove()
        })
        sim.addEventListener('click',async (e)=>{
            e.preventDefault()
           await Produto.deletarProduto(Botoes.id)
           Template.template()
           externo.remove()
        })
        button.addEventListener('click',async (e)=>{
            e.preventDefault()
            externo.remove()
        })
    }
}

export{ModalPequeno}
