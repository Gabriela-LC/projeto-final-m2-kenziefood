
import { Produto } from "../controllers/ProdutoController.js"
import { Template } from "./Dashboard_Template.js"
import { Formulario } from "./Formulario.js"
import { ModalPequeno } from "./Modal_pequenos.js"

class Modal {
    static async modal(titulo,id) {
        const produtoPrivado = await Produto.listaProdutoPrivado()
            const lista = produtoPrivado.find((element) => {
                if (id == element.id) {
                    return element
               }
             })
        const body                  = document.querySelector("body")
        const externo               = document.createElement("div")
        const conteiner             = document.createElement("div")
        const cabecalho             = document.createElement("div")
        const h2                    = document.createElement("h2")
        const button                = document.createElement("button")
        const form                  = document.createElement("form")
        const nome                  = document.createElement("h2")
        const dNOme                 = document.createElement("input")
        const descricao             = document.createElement("h2")
        const descPod               = document.createElement("textarea")
        const cartegoria            = document.createElement("h2")
        const radio                 = document.createElement("div")
        const panificadora          = document.createElement("input")
        const panificadoraLabel     = document.createElement("label")
        const frutas                = document.createElement("input")
        const frutasLabel           = document.createElement("label")
        const bebidas               = document.createElement("input")
        const bebidasLabel          = document.createElement("label")
        const valor                 = document.createElement("h2")
        const valorPod              = document.createElement("input")
        const imagem                = document.createElement("h2")
        const imagemPod             = document.createElement("input")
        const enviar                = document.createElement("input")
        const excluir               = document.createElement("div")
        const buttonDeletar         = document.createElement("button")

        externo.classList.add("externa")
        conteiner.classList.add("conteinerPod")
        cabecalho.classList.add("cabecalho")
        frutasLabel.classList.add("labe")
        radio.classList.add("radio")
        descPod.classList.add("descricaopod")
        dNOme.classList.add("nome")
        panificadoraLabel.classList.add("labe")
        bebidasLabel.classList.add("labe")
        valorPod.classList.add("valor")
        imagemPod.classList.add("imagem")
        excluir.classList.add("divExcluir")
        panificadora.checked            ="true"
        dNOme.required                  ="true"
        descPod.required                ="true"
        valorPod.required               ="true"
        imagemPod.required              ="true"
        dNOme.name                      = "nome"
        descPod.name                    = "descricao"
        valorPod.name                   = "preco"
        valorPod.type                   = "number"
        imagemPod.name                  = "imagem"
        form.id                         = "Formulario"
        h2.innerText                    = `${titulo}`
        button.innerText                = "x"
        button.id                       ="fechar"
        nome.innerText                  = "Nome do Produto"
        dNOme.placeholder               = "Digitar o nome"
        descricao.innerText             = "Descrição"
        descPod.placeholder             = "Digitar a descrição" 
        cartegoria.innerText            = "Cartegorias"
        radio.id                        = "radio"
        panificadora.type               = "radio"
        panificadora.name               = "categoria"
        panificadora.id                 = "panidicadora"
        panificadora.value              = "Panificadora"
        panificadoraLabel.htmlFor       = "panidicadora"
        panificadoraLabel.innerText     = "Panificadora"
        frutas.type                     = "radio"
        frutas.name                     = "categoria"
        frutas.id                       = "frutas"
        frutas.value                    = "Frutas"
        frutasLabel.htmlFor             = "frutas"
        frutasLabel.innerText           = "Frutas"
        bebidas.type                    = "radio"
        bebidas.name                    = "categoria"
        bebidas.id                      = "bebidas"
        bebidas.value                   = "Bebidas"
        bebidasLabel.htmlFor            = "bebidas"
        bebidasLabel.innerText          = "Bebidas"
        valor.innerText                 = "Valor do Produto"
        valorPod.placeholder            = "Digitar o valor aqui"
        imagem.innerText                = "Link da imagem"
        imagemPod.placeholder           = "Inserir link"
        enviar.type                     = "submit"
        body.appendChild(externo)
        externo.appendChild(conteiner)
        conteiner.appendChild(cabecalho)
        cabecalho.appendChild(h2)
        cabecalho.appendChild(button)
        conteiner.appendChild(form)
        form.appendChild(nome)
        form.appendChild(dNOme)
        form.appendChild(descricao)
        form.appendChild(descPod)
        form.appendChild(cartegoria)
        form.appendChild(radio)
        radio.appendChild(panificadora)
        radio.appendChild(panificadoraLabel)
        radio.appendChild(frutas)
        radio.appendChild(frutasLabel)
        radio.appendChild(bebidas)
        radio.appendChild(bebidasLabel)
        form.appendChild(valor)
        form.appendChild(valorPod)
        form.appendChild(imagem)
        form.appendChild(imagemPod)
        if(titulo=="Edição de produto"){
            enviar.classList.add("butSalvar")
            enviar.value                    = "Salvar alterações"
            dNOme.value                     = `${lista.nome}`
            descPod.value                   = `${lista.descricao}`
            valorPod.value                  = `${lista.preco}`
            imagemPod.value                 = `${lista.imagem}`
            buttonDeletar.innerText         =  "Excluir"               
            form.appendChild(excluir)
            excluir.appendChild(buttonDeletar)
            excluir.appendChild(enviar)
            form.addEventListener('submit', async (e) => {
                Formulario.requesFrom(e)
               await Produto.alterarProduto(id,Formulario.value)
                Template.template()
                externo.remove()
            })
            excluir.addEventListener('click',(e)=>{
                e.preventDefault()
                ModalPequeno.Deletar(id)
                Template.template()
                externo.remove()
            })
            
        }else{
            enviar.classList.add("enviar")
            enviar.value                    = "Cadastrar Produto"
            form.appendChild(enviar)
            form.addEventListener('submit', async (e) => {
                 Formulario.requesFrom(e)
                 await Produto.postaProduto(Formulario.value)
                 Template.template()
                 externo.remove()
             })
         }

        button.addEventListener('click',(e)=>{
            e.preventDefault()
            externo.remove()
        })
    }  
    
}

export { Modal }
