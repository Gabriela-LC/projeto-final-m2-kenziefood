import { Usuario } from "../controllers/UsuarioController.js";

const botaoLogin = document.getElementById("botao_login_usuario");
botaoLogin.addEventListener("click", logar);

async function logar(e){

    e.preventDefault()

    const inputEmail = document.getElementById("inputEmail")
    const inputSenha = document.getElementById("inputSenha")

    const data = {
        email: inputEmail.value,
        password: inputSenha.value
    }
    
    Usuario.conectar(data)


}
