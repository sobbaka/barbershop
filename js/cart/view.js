export default class View {
  elements = {
    cartLink: document.querySelector(".cart__link"),
    cartModal: document.querySelector(".modal-cart"),
    productsWrapper: document.querySelector("#products-wrapper"),
  }

  showCartModal() {
    this.elements.cartModal.classList.remove("hidden");
  }

  hideCartModal() {
    this.elements.cartModal.classList.add("hidden");
  }

  showCartIcon() {
    this.elements.cartLink.classList.remove("hidden");
  }

  hideCartIcon() {
    this.elements.cartLink.classList.add("hidden");
  }

}
