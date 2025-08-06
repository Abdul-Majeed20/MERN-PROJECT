import { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 15",
      price: "999",
      category: "Electronics",
      stock: "50",
      variants: "128GB, 256GB",
      image: "https://example.com/iphone.jpg",
    },
    {
      id: 2,
      name: "Adidas Shoes",
      price: "120",
      category: "Footwear",
      stock: "100",
      variants: "US 8, US 9",
      image: "https://example.com/adidas.jpg",
    },
    {
      id: 3,
      name: "Leather Wallet",
      price: "30",
      category: "Accessories",
      stock: "200",
      variants: "Black, Brown",
      image: "https://example.com/wallet.jpg",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    variants: "",
    image: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  const openAddModal = () => {
    setForm({
      name: "",
      price: "",
      category: "",
      stock: "",
      variants: "",
      image: "",
    });
    setEditId(null);
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setForm(product);
    setEditId(product.id);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (editId) {
      setProducts(
        products.map((p) => (p.id === editId ? { ...form, id: editId } : p))
      );
    } else {
      setProducts([...products, { ...form, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const deleteProduct = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm md:text-base"
        >
          Add Product
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Stock</th>
              <th className="text-left p-3">Variants</th>
              <th className="text-left p-3">Image</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{product.name}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">{product.variants}</td>
                <td className="p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => openEditModal(product)}
                    className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded transition text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-start gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-blue-600 font-medium">${product.price}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">Stock</p>
                <p>{product.stock}</p>
              </div>
              <div>
                <p className="text-gray-500">Variants</p>
                <p>{product.variants}</p>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => openEditModal(product)}
                className="flex-1 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">
              {editId ? "Update Product" : "Add Product"}
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  className="w-full border p-2 rounded"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  className="w-full border p-2 rounded"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  className="w-full border p-2 rounded"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock
                </label>
                <input
                  className="w-full border p-2 rounded"
                  value={form.stock}
                  onChange={(e) => setForm({ ...form, stock: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Variants
                </label>
                <input
                  className="w-full border p-2 rounded"
                  value={form.variants}
                  onChange={(e) => setForm({ ...form, variants: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  className="w-full border p-2 rounded"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  {editId ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}