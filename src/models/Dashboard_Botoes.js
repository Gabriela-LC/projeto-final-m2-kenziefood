import { Produto } from "../controllers/ProdutoController.js";
import { Modal } from "./Modal.js";
import { ModalPequeno } from "./Modal_pequenos.js";

//salva id dos botoes
class Botoes {
  static id = "";
  static Editar(e) {
    this.id = "";
    this.id = e.target.id;
    Modal.modal("Edição de produto", this.id);
  }
  static Deletar(e) {
    this.id = "";
    this.id = e.target.id;
    ModalPequeno.Deletar();
  }
  static adicionar() {
    const adicionar = document.getElementById("adicionar");
    adicionar.addEventListener("click", async (e) => {
      e.preventDefault();
      Modal.modal("Cadastro de produto");
    });
  }
  static Logout() {
    const logout = document.getElementById("user");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      ModalPequeno.logout();
    });
  }
}
// Botoes.Logout();
// Botoes.adicionar();
export { Botoes };
