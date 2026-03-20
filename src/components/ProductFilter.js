import { useState, useEffect } from "react";

import getFilteredProducts from "../services/Products";

export default function ProductFilter() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const subscription = getFilteredProducts(900).subscribe({
      next: (data) => setFilteredProducts(data),
      error: (err) => console.error(err),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h2>Filtered Products</h2>
      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
