import ProductModel from "./product/model.js";
import ProductView from "./product/view.js";

import CartModel from "./cart/model.js";
import CartModalView from "./cart/view.js";

const productModel = new ProductModel();
const productView = new ProductView();

const cartModel = new CartModel();
const cartModalView = new CartModalView();

const path = window.location.pathname;



async function getAndRender() {
  await productModel.loadProducts();
  productView.renderProducts(productModel.products);
}

if (productView.productsPath.includes(path)) {
  getAndRender();

  cartModalView.elements.productsWrapper.addEventListener("click", (e) => {
    // Совершаемое действие
    let action = e.target.dataset.action;

    if (action === "add-to-cart") {
      // Получить ID товара
      const productId = +e.target.closest(".card").dataset.id;

      const product = productModel.getProduct(productId);
      cartModel.addToCart(product);

      console.log(cartModel.cart)

      if (cartModalView.elements.cartLink.classList.contains("hidden")) {
        cartModalView.elements.cartLink.classList.remove("hidden");
      }
    }

  })
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
