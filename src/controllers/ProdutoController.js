class Produto {
    static BASE_URL = "https://api-kenzie-food.herokuapp.com"
    static async listaProdutoPublico() {
        const produto = await fetch(`${this.BASE_URL}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((res) => res.json())
            .then((res) => (res))
            .catch((err) => console.error(err))
        return produto
    }
    static async listaProdutoPrivado() {
        const produto = await fetch(`${this.BASE_URL}/my/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => res.json())
            .then((res) => (res))
            .catch((err) => console.error(err))
        return produto
    }

}
//excluir apos a arpovação
console.log(await Produto.listaProdutoPublico())
console.log(await Produto.listaProdutoPrivado())
