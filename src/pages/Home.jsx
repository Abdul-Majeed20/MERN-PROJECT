import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Dummy featured products data
    const dummyProducts = [
      {
        id: "1",
        name: "Wireless Headphones",
        price: 59.99,
        imageUrl: "https://via.placeholder.com/300x200?text=Headphones",
      },
      {
        id: "2",
        name: "Smart Watch",
        price: 129.99,
        imageUrl: "https://via.placeholder.com/300x200?text=Smart+Watch",
      },
      {
        id: "3",
        name: "Laptop Stand",
        price: 34.99,
        imageUrl: "https://via.placeholder.com/300x200?text=Laptop+Stand",
      },
      {
        id: "4",
        name: "Bluetooth Speaker",
        price: 45.0,
        imageUrl: "https://via.placeholder.com/300x200?text=Speaker",
      },
    ];

    setProducts(dummyProducts);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-right">
        <Link
          to="/products"
          className="text-blue-600 hover:underline font-medium"
        >
          See All Products →
        </Link>
      </div>
    </div>
  );
}
