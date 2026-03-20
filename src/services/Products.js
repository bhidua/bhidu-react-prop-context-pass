import products from "./products.json";
import { from } from "rxjs";
import { filter, toArray } from "rxjs/operators";

const getFilteredProducts = (minPrice) => {
  return from(products).pipe(
    filter((product) => product.price >= minPrice),
    toArray()
  );
};
export default getFilteredProducts;
