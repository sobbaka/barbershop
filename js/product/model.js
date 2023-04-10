export default class Model {
  constructor() {
    this.products = [];
  }

  async loadProducts() {
    const response = await fetch("./js/products.json");
    const data = await response.json();

    this.products = data;

    for (const product of this.products) {
      product.counter = 1;
    }
  }

  getProduct(id) {
    return this.products.find((item) => item.id === id);
  }

}
