import ProductModel from "./product/model.js";
import ProductView from "./product/view.js";

import CartModel from "./cart/model.js";
import CartModalView from "./cart/cartModalView.js";
import BasketView from "./cart/basketView.js";

const productModel = new ProductModel();
const productView = new ProductView();

const cartModel = new CartModel();
const cartModalView = new CartModalView();
const basketView = new BasketView();

const path = window.location.pathname;



async function getAndRender() {
  await productModel.loadProducts();
  productView.renderProducts(productModel.products);
}


if (cartModel.cart.length && !basketView.elements.basketPath.includes(path)) {
  cartModalView.showCartIcon(cartModel.getTotalProducts());
  cartModalView.renderProductsInModal(cartModel.cart);

  cartModalView.elements.cartLink.addEventListener("click", (e) => {
    cartModalView.showCartModal();
  })

  cartModalView.elements.cartModal.addEventListener("mouseover", (e) => {
    cartModalView.showCartModal();
  })

  cartModalView.elements.cartModal.addEventListener("mouseout", (e) => {
    cartModalView.hideCartModal();
  })

};


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

      cartModalView.renderProductsInModal(cartModel.cart);
      cartModalView.showCartIcon(cartModel.getTotalProducts());
    }

  })
}





if (basketView.elements.basketPath.includes(path)) {
  basketView.renderBasketTotalProducts(cartModel.getTotalProducts());
  basketView.renderBasketTotalPrice(cartModel.getTotalPrice());

  basketView.renderProducts(cartModel.cart)


}
