class Usuario {
    static BASE_URL = "https://api-kenzie-food.herokuapp.com"
    static async criarUsuario(body) {
        const usuario = await fetch(`${this.BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then((res) => res.json())
            .then((res) => res)
            .catch((err) => console.error(err))
        return usuario
    }
    static async conectar(body) {
        const usuario = await fetch(`${this.BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then((res) => res.json())
            .then((res) => localStorage.setItem("token", res))
            .catch((err) => console.error(err))
        return usuario
    }
}
