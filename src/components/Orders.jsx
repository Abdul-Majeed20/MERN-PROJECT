import { useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      customer: "John Doe",
      total: 120.99,
      status: "Pending",
      date: "2025-08-01",
    },
    {
      id: "ORD002",
      customer: "Sarah Smith",
      total: 75.5,
      status: "Shipped",
      date: "2025-08-02",
    },
    {
      id: "ORD003",
      customer: "Ahmed Khan",
      total: 299.99,
      status: "Delivered",
      date: "2025-08-03",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      Pending: "bg-yellow-100 text-yellow-700",
      Shipped: "bg-blue-100 text-blue-700",
      Delivered: "bg-green-100 text-green-700",
    };
    return statusStyles[status] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>

      {/* Desktop Table (hidden on mobile) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Total</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">${order.total.toFixed(2)}</td>
                <td className="p-3">
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${getStatusBadge(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3">{order.date}</td>
                <td className="p-3 space-x-2">
                  <button
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
                    onClick={() => alert(`Viewing order ${order.id}`)}
                  >
                    View
                  </button>
                  {order.status === "Pending" && (
                    <button
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
                      onClick={() => updateStatus(order.id, "Shipped")}
                    >
                      Mark as Shipped
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards (shown on mobile) */}
      <div className="md:hidden space-y-4">
        {orders.map(order => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{order.id}</h3>
                <p className="text-gray-600">{order.customer}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadge(order.status)}`}>
                {order.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-medium">${order.total.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p>{order.date}</p>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button
                className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                onClick={() => alert(`Viewing order ${order.id}`)}
              >
                View
              </button>
              {order.status === "Pending" && (
                <button
                  className="flex-1 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                  onClick={() => updateStatus(order.id, "Shipped")}
                >
                  Ship
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}