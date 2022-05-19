/* import { Produto } from "../controllers/ProdutoController.js";
import { Card } from "../models/CriarCards.js";

function criaCard(data) {} */

class paginasPerfil{

    static clickLogin(event){

        const getNome = event.target
        
        const containerHomeDash = document.getElementById("containerHomeDash")
        const ImagemPerfilUsuario = document.getElementById("ImagemPerfilUsuario")
        const bntLoginLogout = document.getElementById("bntLoginLogout")
        const divPagina =  `<a href="../pages/main.html"><h2 id="paginaHome" class="statusPaginaOn">Home</h2></a>
                            <a href="../pages/extra.html"><h2 id="paginaDash" class="statusPaginaOf">Dashboard</h2></a>`
    
        if(getNome.innerHTML==="Login"){

            
            bntLoginLogout.innerHTML="Logout"
            containerHomeDash.innerHTML= divPagina
            ImagemPerfilUsuario.src="../styles/imgs/iconeUsuario.png"
        }
        else if(getNome.innerHTML==="Logout"){
            getNome.innerHTML="Login"
            ImagemPerfilUsuario.src=""
            containerHomeDash.innerHTML= ""
        }

    }
    static trocaPagina(){

    }
}







const btnLoginHome = document.getElementById("bntLoginLogout")
btnLoginHome.addEventListener("click",paginasPerfil.clickLogin)


// function populaLoja() {}

// populaLoja();

// const listaProdutos = document.getElementById("containerProdutos");
// listaProdutos.innerHTML = "";

// const obj = {
//   id: "97e3e9db-dd3f-42b2-a838-ff505a020213",
//   nome: "Panqueca de banana com aveia",
//   preco: 20.4,
//   categoria: "Panificadora",
//   descricao:
//     "Esta receita serve muito bem 2 pessoas, deixa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.",
//   imagem:
//     "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png",
//   createdAt: "2022-05-16T06:53:33.405Z",
//   updatedAt: "2022-05-16T06:53:33.405Z",
// };

// for (let i = 0; i < 6; i++) {
//   listaProdutos.appendChild(Card.criaCard(obj));
// }
