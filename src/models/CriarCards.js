class Card {
  static criaCard(data) {
    const produto = document.createElement("li");
    produto.classList.add("cardProduto");
    produto.setAttribute("id", data.id);
    const figure = document.createElement("figure");
    figure.classList.add("produtoImg");
    const fotoProduto = document.createElement("img");
    fotoProduto.src = data.imagem;
    figure.appendChild(fotoProduto);
    const h3 = document.createElement("h3");
    h3.classList.add("produtoNome");
    h3.setAttribute("id", data.categoria);
    h3.innerText = data.nome;
    const p = document.createElement("p");
    p.classList.add("produtoInformacao");
    p.innerText = data.descricao;
    const categoriaProduto = document.createElement("div");
    categoriaProduto.classList.add("categorias-produto");
    const categoriaSpan = document.createElement("span");
    categoriaSpan.innerText = data.categoria;
    categoriaProduto.appendChild(categoriaSpan);
    const span = document.createElement("span");
    span.classList.add("produtoPreco");
    span.innerText = `R$ ${data.preco.toFixed(2).replace(".", ",")}`;
    const div = document.createElement("div");
    div.classList.add("addCarrinho");
    div.setAttribute("id", data.id);
    const logoCarrinho = document.createElement("img");
    logoCarrinho.src = "../styles/imgs/carrinho.svg";
    div.appendChild(logoCarrinho);
    div.addEventListener("click", this.processoCarrinho);
    produto.append(figure, h3, p, categoriaProduto, span, div);

    return produto;
  }

  static processoCarrinho(event) {
    //   const id = event.path[1].id;
    //   const img = event.path[1].children[0].children[0].src;
    //   const nomeProduto = event.path[1].children[1].innerText;
    //   const categoria = event.path[1].children[1].id;
    //   const preco = Number(
    //     event.path[1].children[3].innerText.slice(3).replace(",", ".")
    //   );
    //   const produto = {
    //     img: img,
    //     name: nomeProduto,
    //     categoria: categoria,
    //     preco: preco,
    //     id: id,
    //   };
    //concatenar aqui index e o nome
    //ex: cart - panqueca // cart - sanduiche
    //fazer loop e pegar todos???
    //   function allStorage() {
    //     var values = [],
    //         keys = Object.keys(localStorage),
    //         i = keys.length;
    //     while ( i-- ) {
    //         values.push( localStorage.getItem(keys[i]) );
    //     }
    //     return values;
    // }
    // localStorage.setItem(produto.name, JSON.stringify(produto));
    // const produtoAtt = JSON.parse(localStorage.getItem(`${produto.name}`));
    // console.log(typeof produtoAtt);
    // this.adicionaCardCarrinho(produtoAtt);
  }

  static adicionaCardCarrinho(produtoCarrinho) {}
}

export { Card };
