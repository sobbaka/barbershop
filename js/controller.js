import ProductModel from "./product/model.js";
import ProductView from "./product/view.js";

import CartModalView from "./cart/view.js";

const productsModel = new ProductModel();
const productView = new ProductView();

const cartModalView = new CartModalView();

const path = window.location.pathname;



async function getAndRender() {
  await productsModel.loadProducts();
  //console.log(productsModel.products);
  productView.renderProducts(productsModel.products);
}



if (productView.productsPath.includes(path)) {
  getAndRender();
}



cartModalView.elements.cartLink.addEventListener("click", (e) => {
  cartModalView.showCartModal();
})


cartModalView.elements.cartModal.addEventListener("mouseover", (e) => {
  cartModalView.showCartModal();
})

cartModalView.elements.cartModal.addEventListener("mouseout", (e) => {
  cartModalView.hideCartModal();
})





