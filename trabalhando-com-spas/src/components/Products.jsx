import { useEffect, useState } from 'react';

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('../database.json') // Supondo que esteja na pasta pública
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>{prod.name} - R${prod.price}</li>
        ))}
      </ul>
    </div>
  );
}
