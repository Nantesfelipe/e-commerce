import { loadProducts } from "./products.js";
const productsContainer = document.getElementById("products-container");

if(productsContainer){
    loadProducts();
}