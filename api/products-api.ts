import { instanse } from "./api";

export const ProductsApi = {
  getProducts(products: any) {
    return instanse.get("store/products").then((res) => res.data);
  },
};
