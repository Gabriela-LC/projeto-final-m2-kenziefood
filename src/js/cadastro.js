import { Usuario } from "../controllers/UsuarioController.js";

const formCadastrar = document.getElementById("form_cadastrar_usuario");
formCadastrar.addEventListener("submit", coletaDados);

async function coletaDados(event) {
  event.preventDefault();
  const dados = {};
  const array = [...formCadastrar.elements];
  array.forEach((elem) => {
    if (elem.name) {
      dados[elem.name] = elem.value;
      elem.value = "";
    }
  });

  const statusCadastro = await Usuario.criarUsuario(dados);
  if (typeof statusCadastro == "object") {
    window.location = "./src/pages/login.html";
  } else {
    window.alert(statusCadastro);
  }
}
