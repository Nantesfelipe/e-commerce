import { products, renderProducts } from "./products.js";

const input = document.getElementById("search-input");

input.addEventListener("input", () => {
  const valorBusca = input.value.toLowerCase().trim();

  if (valorBusca === "") {
    renderProducts(products);
    return;
  }

  const resultado = products.filter(product =>
    product.name.toLowerCase().includes(valorBusca)
  );

  renderProducts(resultado);
});