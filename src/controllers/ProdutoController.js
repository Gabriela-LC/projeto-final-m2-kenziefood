class Produto {
  static BASE_URL = "https://api-kenzie-food.herokuapp.com";
  static async listaProdutoPublico() {
    const produto = await fetch(`${this.BASE_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
    return produto;
  }
  static async listaProdutoPrivado() {
    const produto = await fetch(`${this.BASE_URL}/my/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
    return produto;
  }
  static async postaProduto(body) {
    const produto = await fetch(`${this.BASE_URL}/my/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
    return produto;
  }
  static async alterarProduto(id, body) {
    const produto = fetch(`${this.BASE_URL}/my/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.error(err));
    return produto;
  }
  static async deletarProduto(id) {
    const produto = fetch(`${this.BASE_URL}/my/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .catch((err) => console.error(err));
    return produto;
  }
}

export { Produto };
