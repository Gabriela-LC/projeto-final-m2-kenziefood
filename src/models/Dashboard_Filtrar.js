import { Produto } from "../controllers/ProdutoController.js";
import { Template } from "./Dashboard_Template.js";

class Filtrar {
    static input = document.getElementById("pesquisar")
    static async api() {
        const produtos = await Produto.listaProdutoPrivado()
        return produtos
    }
    static async filtrar() {

        this.input.addEventListener('input', (e) => Filtrar.elemento(e))
    }
    static async elemento(e) {
        const classe = document.getElementsByClassName("Selecionado")
        const todo=document.getElementById("Todos")
        classe[0].classList.toggle("Selecionado")
        todo.classList.add("Selecionado")
        let produto = this.input.value;
        let logical = new RegExp(`${produto}`, "gi");
        const teste = await this.api()
        let searchResult = teste.filter((e) => {
            return e.nome.search(logical) !== -1 || e.categoria.search(logical) !== -1;
        });
        Template.template(searchResult)
    }
    static async filtroBotoes(e) {
        const classe = document.getElementsByClassName("Selecionado")
        classe[0].classList.toggle("Selecionado")
        e.target.classList.add("Selecionado")
        const produtos = await Produto.listaProdutoPrivado()
        
        if (e.target.id == "Todos") {
            Template.template(produtos)
        } else {
           const filtro= produtos.filter(element => {
                if (element.categoria == e.target.id) {
                    return element
                }
            })
           Template.template(filtro)
        }
        
    }

}

export { Filtrar }
