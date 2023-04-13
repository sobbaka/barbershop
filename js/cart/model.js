export default class Model {
  constructor() {
    this.cart = [];
    this.loadFromLocalStorage();
  }

  saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  loadFromLocalStorage() {
    let data = localStorage.getItem('cart');
    this.cart = data ? JSON.parse(data) : this.cart;
  }

  addToCart(product) {
    const productInCart = this.getProduct(product.id);

    if (productInCart) {
      productInCart.counter += product.counter;
    } else {
      const newProduct = JSON.parse(JSON.stringify(product));
      this.cart.push(newProduct);
    }

    this.saveCartToLocalStorage();
  }

  getTotalPrice() {
    const total = this.cart.reduce((total, product) => {
      return total + product.price;
    }, 0)
    return total;
  }

  getProduct(id) {
    return this.cart.find((item) => item.id === id);
  }
}
