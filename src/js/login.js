import { Usuario } from "../controllers/UsuarioController.js";

const botaoLogin = document.getElementById("botao_login_usuario");
botaoLogin.addEventListener("click", logar)

function logar(e){

    e.preventDefault()

    const inputEmail = document.getElementById("inputEmail")
    const inputSenha = document.getElementById("inputSenha")

    const data = {
        email: inputEmail.value,
        password: inputSenha.value
    }
    
    Usuario.conectar(data)

}

// function modalAvisoLogin(erro){
    
//     const divModal = document.createElement("div")
//     divModal.classList.add("divModal")
  
//     const tituloModal = document.createElement("h3")
//     tituloModal.innerText = "Atenção!"
  
//     const textoModal = document.createElement("p")
  
//     if( erro == "password invalid"){
//       textoModal.innerText = "Senha incorreta."
//     } else if (erro.includes("Email") && erro.includes("does not exists")){
//       textoModal.innerText = "Email não cadastrado. Favor preencher email já cadastrado ou realizar novo cadastro."
//     }
//     const btnFecharModal = document.createElement("button")
//     btnFecharModal.innerText = "Fechar"
//     btnFecharModal.addEventListener("click", () => {
//         divModal.remove()
//     })
  
//     divModal.append(tituloModal,textoModal,btnFecharModal)
//     document.body.append(divModal)

//     const inputEmail = document.getElementById("inputEmail")
//     const inputSenha = document.getElementById("inputSenha")

//     inputEmail.value = ""
//     inputSenha.value = ""


  
//   }

//   export {modalAvisoLogin}
