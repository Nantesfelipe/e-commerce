export const products = [
  {
    id: 1,
    name: "Camiseta Nike",
    price: 79.90,
    image: "/assets/img/products/shirt-nike.webp",
    promotion: true,
  },
  {
    id: 2,
    name: "Camiseta Mizuno",
    price: 79.90,
    image: "/assets/img/products/shirt-mizno.webp",
    promotion: false,
  },
  {
    id: 3,
    name: "Camiseta Vans",
    price: 79.90,
    image: "/assets/img/products/shirt-vans.webp",
    promotion: true
  }
];

export function renderProducts(lista) {                                 //função que recebe a lista de produtos e exibe na tela
  const container = document.getElementById("products-container");            //Vai por os produtos no "products-container"
  container.innerHTML = "";                                            //limpa a tela para a busca funcionar

  lista.forEach(product => {                                   // percorre a lista: para cada produto da lista
    const productCard = document.createElement("div");         //Cria um card
    productCard.classList.add("product-card");                 //Adciona produtos no card
               
                                                              //  Preenche com os dados                                 
      productCard.innerHTML = ` 
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button>Adicionar ao carrinho</button>
    `;
 
    container.appendChild(productCard);                       //adciona na tela appendChild= método para adcionar o produto filho no pai(container)
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const input = document.getElementById("search-input");

  function filtrarProdutos() {
    const termo = input.value.toLowerCase();

    if (page === "promotions") {
      const produtosFiltrados = products
        .filter(product => product.promotion)
        .filter(product => product.name.toLowerCase().includes(termo));

      renderProducts(produtosFiltrados);
    } else {
      const produtosFiltrados = products.filter(product =>
        product.name.toLowerCase().includes(termo)
      );

      renderProducts(produtosFiltrados);
    }
  }

  if (input) {
    input.addEventListener("input", filtrarProdutos);
  }

  if (page === "promotions") {
    const produtosPromocao = products.filter(product => product.promotion);
    renderProducts(produtosPromocao);
  } 
  else {
    renderProducts(products);
  }
});

