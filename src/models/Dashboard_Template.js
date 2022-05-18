import { Produto } from "../controllers/ProdutoController.js"

class Template {
    static async template(){
       const produtos = await Produto.listaProdutoPrivado()
       const ul=document.getElementById("template")
       ul.innerHTML=""
       produtos.forEach(element => {
           console.log(element)
            const li=document.createElement("li")
            const nome=document.createElement("div")
            const img=document.createElement("img")
            const h2=document.createElement("h2")
            const p=document.createElement("span")
            const descricao=document.createElement("span")
            const botoes=document.createElement("div")
            const editar=document.createElement("button")
            const deletar=document.createElement("button")
            const span=document.createElement("span")
            const span1=document.createElement("span")
           img.src=element.imagem
           h2.innerText=element.nome
           p.innerText=element.categoria
           descricao.innerText=element.descricao
           p.classList.add("cartegoria")
           descricao.classList.add("descricao")
           botoes.classList.add("bot")
           editar.classList.add("editar")
           deletar.classList.add("deletar")
           ul.appendChild(li)
           li.appendChild(nome)
           nome.appendChild(img)
           nome.appendChild(h2)
           li.appendChild(p)
           li.appendChild(descricao)
           li.appendChild(botoes)
           botoes.appendChild(editar)
           botoes.appendChild(deletar)
           editar.appendChild(span1)
           deletar.appendChild(span)
       });
    }
}
Template.template()