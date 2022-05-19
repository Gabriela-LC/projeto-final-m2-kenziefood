import { Produto } from "../controllers/ProdutoController.js"
import { Botoes } from "./Dashboard_Botoes.js";
// cria template
class Template {
   static async api(){
      const produtos = await Produto.listaProdutoPrivado()
      return produtos
   }
   static async template(produtos) {
      const ul = document.getElementById("template")
      ul.innerHTML = ""
      produtos.forEach(element => {
         const li                = document.createElement("li")
         const nome              = document.createElement("div")
         const img               = document.createElement("img")
         const h2                = document.createElement("h2")
         const p                 = document.createElement("span")
         const descricao         = document.createElement("span")
         const botoes            = document.createElement("div")
         const editar            = document.createElement("button")
         const deletar           = document.createElement("button")
         const span              = document.createElement("span")
         const span1             = document.createElement("span")

         p.classList.add("cartegoria")
         descricao.classList.add("descricao")
         botoes.classList.add("bot")
         editar.classList.add("editar")
         deletar.classList.add("deletar")
         img.src                 = element.imagem
         h2.innerText            = element.nome
         p.innerText             = element.categoria
         descricao.innerText     = element.descricao
         editar.id               = `${element.id}`
         deletar.id              = `${element.id}`
         span.id                 = `${element.id}`
         span1.id                = `${element.id}`

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

         editar.addEventListener('click', (e) => {
            e.preventDefault()
            Botoes.Editar(e)
         })
         deletar.addEventListener('click', (e) => {
            e.preventDefault()
            Botoes.Deletar(e)
         })
         
      });
   }
}
Botoes.botoesMenu()
Botoes.Logout()
Botoes.adicionar()
Template.template(await Template.api())
export{Template}
