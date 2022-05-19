import { modalAvisoLogin } from "../models/modelLogin.js";

class Usuario {
  static BASE_URL = "https://api-kenzie-food.herokuapp.com";
  static async criarUsuario(body) {
    const usuario = await fetch(`${this.BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
    return usuario;
  }
  static async conectar(body) {
    const usuario = await fetch(`${this.BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.clear();
        if (!res.error) {
          localStorage.setItem("token", res);
          window.location = "../pages/main.html";
        } else {
          console.log(res.error);
          modalAvisoLogin(res.error)
        }
      })
      .catch((err) => {
        console.error(err)
      });
    return usuario;
  }
}

export { Usuario };
