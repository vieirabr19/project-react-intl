import { ApiServices } from './ApiServices';

const endpoint = 'produtos';

export const ProductService = {
  allList() {
    return ApiServices.get(endpoint);
  },
  createProduct(newProduct) {
    return ApiServices.post(endpoint, newProduct);
  },
  removeProduct(id) {
    return ApiServices.delete(endpoint, id);
  }
};