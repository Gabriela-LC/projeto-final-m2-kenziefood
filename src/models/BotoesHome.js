export class BotoesHome {
  static verificarLogin() {
    if (localStorage.getItem("token")) {
      this.botoesLogado();
    } else {
      this.botoesNaoLogado();
    }
  }
  static botoesLogado() {
    const divBotoesLogado = document.createElement("div");
    divBotoesLogado.classList.add("divBotoes");
    const btnLogout = document.createElement("button");
    btnLogout.innerText = "Logout";
    btnLogout.addEventListener("click", () => {
      localStorage.clear();
      location.reload();
    });
    const btnDashboard = document.createElement("button");
    btnDashboard.innerText = "Dashboard";
    btnDashboard.addEventListener("click", () => {
      window.location = "./extra.html";
    });
    divBotoesLogado.append(btnDashboard, btnLogout);
    const header = document.getElementsByTagName("header")[0];
    const barraPesquisa = document.getElementById("barraPesquisa");
    header.insertBefore(divBotoesLogado, barraPesquisa);
  }
  static botoesNaoLogado() {
    const divBotoesNaoLogado = document.createElement("div");
    divBotoesLogado.classList.add("divBotoes");
    const btnCadastrar = document.createElement("button");
    btnCadastrar.innerText = "Cadastrar";
    btnCadastrar.addEventListener("click", () => {
      window.location = "";
    });
    const btnLogin = document.createElement("button");
    btnLogin.innerText = "Login";
    btnLogin.addEventListener("click", () => {
      window.location = "";
    });
    divBotoesNaoLogado.append(btnCadastrar, btnLogin);
    const header = document.getElementsByTagName("header")[0];
    const barraPesquisa = document.getElementById("barraPesquisa");
    header.insertBefore(divBotoesNaoLogado, barraPesquisa);
  }
}
