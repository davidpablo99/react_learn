import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Bem-vindo à loja!</p>
      <nav>
        <Link to="/products">Produtos</Link> | 
        <Link to="/cart">Carrinho</Link> | 
        <Link to="/admin">Admin</Link>
      </nav>
    </div>
  );
}
