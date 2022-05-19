import { Usuario as UsuarioController } from "../controllers/UsuarioController.js";

const formCadastrar = document.getElementById("form_cadastrar_usuario");
formCadastrar.addEventListener("submit", coletaDados);

async function coletaDados(event) {
  event.preventDefault();

  const formDados = new FormData(event.target);
  const novoUsuario = Object.fromEntries(formDados);
  formCadastrar.reset();
  const statusCadastro = await UsuarioController.criarUsuario(novoUsuario);
  if (statusCadastro.id) {
    window.location = "./src/pages/login.html";
  } else {
    console.error(statusCadastro);
  }
}
