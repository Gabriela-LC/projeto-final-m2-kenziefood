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
    modalAvisoCadastro()
    console.error(statusCadastro);
  }
}

function modalAvisoCadastro(){

  const divModal = document.createElement("div")
  divModal.classList.add("divModal")

  const tituloModal = document.createElement("h3")
  tituloModal.innerText = "Atenção!"

  const textoModal = document.createElement("p")
  textoModal.innerText = "O email preenchido já foi cadastrado anteriormente. Favor utilizar um novo email."

  const btnFecharModal = document.createElement("button")
  btnFecharModal.innerText = "Fechar"
  btnFecharModal.addEventListener("click", () => {
      divModal.remove()
  })

  divModal.append(tituloModal,textoModal,btnFecharModal)
  document.body.append(divModal)

}
