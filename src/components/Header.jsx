import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">MyStore</div>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}