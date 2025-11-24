// src/data/allProducts.js

import { homeData } from "./homeData";

// Merge ALL products from all categories into one list
export const allProducts = homeData.categories.flatMap(
  (category) => category.products
);
