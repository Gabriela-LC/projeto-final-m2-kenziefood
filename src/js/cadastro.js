import { Usuario as UsuarioController } from "../controllers/UsuarioController.js";
import { Usuario } from "../models/Usuario.js";

const formCadastrar = document.getElementById("form_cadastrar_usuario");
formCadastrar.addEventListener("submit", coletaDados);

async function coletaDados(event) {
  event.preventDefault();

  const formDados = new FormData(event.target);
  const objetoForm = Object.fromEntries(formDados);
  const novoUsuario = new Usuario(objetoForm);
  formCadastrar.reset();

  const statusCadastro = await UsuarioController.criarUsuario(novoUsuario);

  if (typeof statusCadastro == "object") {
    window.location = "./src/pages/login.html";
  } else {
    window.alert(statusCadastro);
  }
}
