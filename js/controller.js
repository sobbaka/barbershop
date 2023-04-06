import ProductModel from "./product/model.js";
import ProductView from "./product/view.js";

const productsModel = new ProductModel();
const productView = new ProductView();

async function getAndRender() {
  await productsModel.loadProducts();
  //console.log(productsModel.products);
  productView.renderProducts(productsModel.products);
}

getAndRender();

