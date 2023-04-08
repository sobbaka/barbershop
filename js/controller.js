import ProductModel from "./product/model.js";
import ProductView from "./product/view.js";

import CartModalView from "./cart/view.js";

const productsModel = new ProductModel();
const productView = new ProductView();

const cartModalView = new CartModalView();

async function getAndRender() {
  await productsModel.loadProducts();
  //console.log(productsModel.products);
  productView.renderProducts(productsModel.products);
}

//getAndRender();

cartModalView.elements.cartLink.addEventListener("click", (e) => {
  cartModalView.showCartModal();
})


cartModalView.elements.cartModal.addEventListener("mouseover", (e) => {
  cartModalView.showCartModal();
})

cartModalView.elements.cartModal.addEventListener("mouseout", (e) => {
  cartModalView.hideCartModal();
})





