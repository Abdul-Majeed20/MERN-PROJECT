const stats = [
  { label: "Total Orders", value: "1,234", color: "bg-blue-100", text: "text-blue-600" },
  { label: "Products", value: "567", color: "bg-green-100", text: "text-green-600" },
  { label: "Customers", value: "2,910", color: "bg-yellow-100", text: "text-yellow-600" },
  { label: "Revenue", value: "$98,000", color: "bg-purple-100", text: "text-purple-600" },
];

const recentOrders = [
  { id: "#12345", customer: "John Doe", date: "2025-08-02", status: "Shipped", amount: "$150.00" },
  { id: "#12346", customer: "Jane Smith", date: "2025-08-01", status: "Processing", amount: "$240.00" },
  { id: "#12347", customer: "Alice Johnson", date: "2025-07-30", status: "Delivered", amount: "$300.00" },
];

const getStatusBadge = (status) => {
  const statusStyles = {
    Shipped: "bg-blue-100 text-blue-800",
    Processing: "bg-yellow-100 text-yellow-800",
    Delivered: "bg-green-100 text-green-800",
  };
  return statusStyles[status] || "bg-gray-100 text-gray-800";
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-4 shadow ${stat.color} transition-transform hover:scale-[1.02]`}
          >
            <h2 className="text-xs md:text-sm font-medium text-gray-500">{stat.label}</h2>
            <p className={`text-xl md:text-2xl font-bold ${stat.text}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders - Desktop */}
      <div className="hidden md:block bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Orders - Mobile */}
      <div className="md:hidden space-y-4">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        {recentOrders.map((order, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{order.id}</h3>
                <p className="text-gray-600 text-sm">{order.customer}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadge(order.status)}`}>
                {order.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-sm mt-2">
              <div>
                <p className="text-gray-500">Date</p>
                <p>{order.date}</p>
              </div>
              <div>
                <p className="text-gray-500">Amount</p>
                <p className="font-medium">{order.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}