export default class View {
  elements = {
    basketWrapper: document.querySelector(".basket__product-list"),
    basketTotalProductsNumber: document.querySelector("[data-total]"),
    basketWordProducts: document.querySelector("[data-products]"),
    basketTotalPrice: document.querySelector("[data-price]"),
    basketPath: ["/cart.html"],
  }

  getProductsWordForm(numProducts) {
    let productsWord = 'товары';

    if (numProducts % 10 === 1 && numProducts % 100 !== 11) {
      productsWord = 'товар';
    } else if (numProducts % 10 >= 2 && numProducts % 10 <= 4 && (numProducts % 100 < 10 || numProducts % 100 >= 20)) {
      productsWord = 'товара';
    } else {
      productsWord = 'товаров';
    }
    return productsWord;
  }

  renderBasketTotalProducts(numProducts) {
    this.elements.basketTotalProductsNumber.innerHTML = numProducts;
    this.elements.basketWordProducts.innerHTML = this.getProductsWordForm(numProducts);
  }

  renderBasketTotalPrice(price) {
    this.elements.basketTotalPrice.innerHTML = price;
  }

  // basket render
  renderProducts(products) {

    let items = [];
    products.forEach(item => {
      let itemTotalPrice = item.price * item.counter;
      let html = `
      <div class="basket__product product-card" data-id="${item.id}">


      <div class="product-card__picture">
        <img src="./img/products/${item.imgSrc}" alt="${item.title} - ${item.subtitle}" class="product-card__img">
      </div>


      <div class="product-card__row">
      <div class="product-card__description">
        <p class="product-card__title">${item.title}</p>
        <p class="product-card__subtext">${item.subtitle}</p>
      </div>
      <div class="product-card__column">
      <div class="product-card__info">
        <div class="product-card__price">${item.price} ₽ / <span data-totalPrice>${itemTotalPrice}</span> ₽</div>
        <div class="product-card__quantity">
          <span class="product-card__minus product-card__control" data-action="minus">-</span>
          <div class="product-card__total"><span data-totalNumber>${item.counter}</span> шт.</div>
          <span class="product-card__plus product-card__control" data-action="plus">+</span>
        </div>
      </div>
      <button type="button" class="product-card__delete-btn" data-action="delete">
        <img src="./img/icons/delete-button.svg" alt="" class="product-card__delete-icon" data-action="delete">
      </button>

      </div>
      </div>
    </div>
      `
      items.push(html);
    })

    let result = items.join("");

    this.elements.basketWrapper.innerHTML = result;
  }


  updateCounter(product) {
    const productWrapper = this.elements.basketWrapper.querySelector(`[data-id='${product.id}']`);

    if (product.counter < 1) {
      return productWrapper.remove();
    }

    const totalPrice = productWrapper.querySelector("[data-totalPrice]");
    totalPrice.innerHTML = product.price * product.counter;

    const totalNumber = productWrapper.querySelector("[data-totalNumber]");
    totalNumber.innerHTML = product.counter;
  }

  removeProduct(productId) {
    const productWrapper = this.elements.basketWrapper.querySelector(`[data-id='${productId}']`);
    productWrapper.remove();
  }
}
