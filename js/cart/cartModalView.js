export default class View {
  elements = {
    cartLink: document.querySelector(".cart__link"),
    cartModal: document.querySelector(".modal-cart"),
    cartModalWrapper: document.querySelector(".modal-cart__wrapper"),
    cartProductsNumber: document.querySelector(".cart__number"),
    productsWrapper: document.querySelector("#products-wrapper"),
  }

  showCartModal() {
    this.elements.cartModal.classList.remove("hidden");
  }

  hideCartModal() {
    this.elements.cartModal.classList.add("hidden");
  }

  showCartIcon(totalProducts) {
    this.elements.cartLink.classList.remove("hidden");
    this.elements.cartProductsNumber.innerHTML = totalProducts;
  }

  hideCartIcon() {
    this.elements.cartLink.classList.add("hidden");
  }

  renderProductsInModal(products) {

    let items = [];
    products.forEach(item => {
      let itemTotalPrice = item.price * item.counter;
      let html = `
      <div class="modal-product">
      <div class="modal-product__picture">
        <img src="./img/products/${item.imgSrc}" alt="${item.title} - ${item.subtitle}" class="modal-product__image">
      </div>
      <div class="modal-product__info">
        <p class="modal-product__name">
          ${item.subtitle}<br>
          ${item.title}
        </p>
        <span class="modal-product__price">${itemTotalPrice} ₽ - ${item.counter} шт.</span>
      </div>
    </div>
      `
      items.push(html);
    })

    let result = items.join("");

    this.elements.cartModalWrapper.innerHTML = result;
  }

}
