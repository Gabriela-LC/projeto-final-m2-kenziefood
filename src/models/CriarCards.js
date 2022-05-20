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
    logoCarrinho.src = "./src/styles/imgs/carrinho.svg";
    div.appendChild(logoCarrinho);
    div.addEventListener("click", this.processoCarrinho);
    produto.append(figure, h3, p, categoriaProduto, span, div);

    return produto;
  }

  static criarCardCarrinho(data) {
    const ul = document.getElementById("ulCarrinho");
    const liCarrinho = document.createElement("li");
    liCarrinho.setAttribute("id", "produtoCarrinho");
    liCarrinho.setAttribute("value", data.id);
    const img = document.createElement("img");
    img.src = data.img;
    img.setAttribute("id", "imgVinho");
    const divDados = document.createElement("div");
    divDados.setAttribute("id", "dadosProdutoCarrinho");
    const h3 = document.createElement("h3");
    h3.innerText = data.name;
    const p = document.createElement("p");
    p.innerText = data.categoria;
    const span = document.createElement("span");
    span.innerText = data.preco.toFixed(2);
    divDados.append(h3, p, span);
    const divRemover = document.createElement("div");
    divRemover.classList.add("removerItem");
    divRemover.setAttribute("id", data.id);
    divRemover.addEventListener("click", Card.removerItem);
    const imgLixeira = document.createElement("img");
    imgLixeira.classList.add("imgLixo");
    imgLixeira.src = "./src/styles/imgs/trash.png";
    divRemover.appendChild(imgLixeira);
    liCarrinho.append(img, divDados, divRemover);
    ul.appendChild(liCarrinho);

    localStorage.setItem(`${data.id}`, JSON.stringify(data));

    Card.attInfoCarrinho(data.preco, 1);
  }

  static removerItem(event) {
    const valor = Number(event.path[2].children[1].children[2].innerText) * -1;
    event.path[2].remove();
    Card.attInfoCarrinho(valor, -1);
    const valorChave = event.currentTarget.id;
    localStorage.removeItem(valorChave);
  }

  static attInfoCarrinho(preco, quantidade) {
    const quantidadeItens = document.querySelector(".carrinhoTotalQuantidade");
    const valorTotal = document.querySelector(".carrinhoTotal");
    let soma = Number(valorTotal.innerText.slice(2));
    soma += preco;
    valorTotal.innerText = `R$ ${soma.toFixed(2)}`;
    let quantidadeAtt = Number(quantidadeItens.innerText);
    quantidadeAtt += quantidade;
    quantidadeItens.innerText = quantidadeAtt;
  }
  static processoCarrinho(event) {
    const id = event.path[1].id;
    const img = event.path[1].children[0].children[0].src;
    const nomeProduto = event.path[1].children[1].innerText;
    const categoria = event.path[1].children[1].id;

    const preco = Number(
      event.path[1].children[4].innerText.slice(3).replace(",", ".")
    );
    const produto = {
      img: img,
      name: nomeProduto,
      categoria: categoria,
      preco: preco,
      id: id,
    };

    Card.criarCardCarrinho(produto);
  }

  static verificaLocalStorage() {
    let array = [];
    let keys = Object.keys(localStorage);
    let contador = keys.length;
    while (contador--) {
      array.push(localStorage.getItem(keys[contador]));
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i].startsWith("{")) {
        Card.criarCardCarrinho(JSON.parse(array[i]));
      }
    }
  }
}

export { Card };
