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
      return total + product.price * product.counter;
    }, 0)
    return total;
  }

  getTotalProducts() {
    const total = this.cart.reduce((total, product) => {
      return total + product.counter;
    }, 0)
    return total;
  }

  getProduct(id) {
    return this.cart.find((item) => item.id === id);
  }

  updateCounter(id, action) {
    const product = this.getProduct(id);

    if (action === "plus") {
      ++product.counter;
    }

    if (action === "minus" && product.counter > 0) {
      --product.counter;
    }

    if (product.counter === 0) this.removeFromCart(id);

    this.saveCartToLocalStorage();
    return product;
  }

  removeFromCart(id) {
    const index = this.cart.findIndex(item => item.id === id);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }


  increaseCounter(id) {
    const product = this.getProduct(id);

  }

  descreaseCounter(id) {
    const product = this.getProduct(id);
    product.counter -= 1;

    if (product.counter === 0) { }
  }
}
