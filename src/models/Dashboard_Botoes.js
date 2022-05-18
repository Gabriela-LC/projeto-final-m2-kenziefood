import { Produto } from "../controllers/ProdutoController.js"
import { Modal } from "./Modal.js"

//salva id dos botoes
class Botoes {
    static id=""
    static Editar(e) {
        this.id=""
        this.id=e.target.id
        Modal.modal("Edição de produto",this.id)
    }
    static Deletar(e) {
        this.id=""
        this.id=e.target.id
        
    }
    static adicionar(){
        const adicionar=document.getElementById("adicionar")
        adicionar.addEventListener('click',async (e)=>{
            e.preventDefault()
            Modal.modal("Cadastro de produto")
        })
    }
}
Botoes.adicionar()
export { Botoes }
