export default class View {
  elements = {
    productsContainer: document.querySelector(".products__row")
  }

  renderProducts(productsArray) {
    productsArray.forEach((item) => {
      console.log(item);
      const productHTML = `<div class="card" data-id="${item.id}">
                            <div class="card__picture">
                              <img src="/img/products/${item.imgSrc}" alt="${item.title}" class="card__img">
                            </div>
                            <div class="card_info">
                                <h2 class="card__name">
                                ${item.subtitle}
                                <br><span class="name__uppercase">
                                «${item.title}»
                                </h2>
                                <div class="card__order">
                                    <span class="product__price card__price">${item.price} ₽</span>
                                    <button class="card__btn">КУПИТЬ</button>
                                </div>
                            </div>
                          </div>
                          `
      this.elements.productsContainer.insertAdjacentHTML('beforeend', productHTML);
    })
  }
}
