
import { Filtrar } from "./Dashboard_Filtrar.js"
import { Modal } from "./Modal.js"
import { ModalPequeno } from "./Modal_pequenos.js"

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
        ModalPequeno.Deletar()
    }
    static adicionar(){
        const adicionar=document.getElementById("adicionar")
        adicionar.addEventListener('click',async (e)=>{
            e.preventDefault()
            Modal.modal("Cadastro de produto")
        })
    }
    static Logout(){
        const logout=document.getElementById("user")
        logout.addEventListener('click',(e)=>{
            e.preventDefault()
            ModalPequeno.logout()
        })
    }
    static botoesMenu(){
        const todos=document.getElementById("Todos")
        const Panificadora=document.getElementById("Panificadora")
        const Frutas=document.getElementById("Frutas")
        const Bebidas=document.getElementById("Bebidas")
        todos.addEventListener('click',(e)=>Filtrar.filtroBotoes(e))
        Panificadora.addEventListener('click',(e)=>Filtrar.filtroBotoes(e))
        Frutas.addEventListener('click',(e)=>Filtrar.filtroBotoes(e))
        Bebidas.addEventListener('click',(e)=>Filtrar.filtroBotoes(e))
    }
}
export { Botoes }