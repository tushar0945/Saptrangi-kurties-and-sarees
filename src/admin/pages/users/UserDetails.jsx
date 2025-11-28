import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiUser,
  FiHome,
  FiEdit,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  // MOCK USER DATA (Replace with API later)
  const user = {
    id: "USR1021",
    name: "Tushar Patil",
    email: "tushar@example.com",
    phone: "9876543210",
    role: "User", // Admin / User
    status: "Active", // Active / Blocked
    avatar: "https://via.placeholder.com/120",

    address: {
      line1: "123 MG Road",
      line2: "Near Bus Stand",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422005",
    },

    orders: [
      {
        id: "ORD1023",
        date: "25 Nov 2025",
        amount: 2499,
        status: "Delivered",
      },
      {
        id: "ORD1018",
        date: "20 Nov 2025",
        amount: 1799,
        status: "Shipped",
      },
      {
        id: "ORD1010",
        date: "12 Nov 2025",
        amount: 999,
        status: "Cancelled",
      },
    ],
  };

  const statusColors = {
    Active: "bg-green-100 text-green-700",
    Blocked: "bg-red-100 text-red-700",
  };

  const orderStatusColors = {
    Delivered: "bg-green-100 text-green-700",
    Shipped: "bg-purple-100 text-purple-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="space-y-10">
      {/* Back */}
      <Link
        to="/admin/users"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
      >
        <FiArrowLeft /> Back to Users
      </Link>

      {/* Header */}
      <div className="flex items-center gap-6">
        <img
          src={user.avatar}
          className="w-24 h-24 rounded-full object-cover shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-500">User ID: {user.id}</p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDE: Profile Info */}
        <div className="space-y-8 lg:col-span-1">
          {/* User Info */}
          <Section title="User Information">
            <InfoRow icon={<FiUser />} label="Name" value={user.name} />
            <InfoRow icon={<FiMail />} label="Email" value={user.email} />
            <InfoRow icon={<FiPhone />} label="Phone" value={user.phone} />
          </Section>

          {/* Role & Status */}
          <Section title="Account Settings">
            {/* Role */}
            <div className="flex items-center justify-between">
              <p className="text-gray-700 font-medium">Role</p>
              <select
                className="px-3 py-2 border rounded-lg text-sm bg-white shadow-sm"
                defaultValue={user.role}
              >
                <option>User</option>
                <option>Admin</option>
              </select>
            </div>

            {/* Status */}
            <div className="flex items-center justify-between">
              <p className="text-gray-700 font-medium">Status</p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  statusColors[user.status]
                }`}
              >
                {user.status}
              </span>
            </div>
          </Section>

          {/* Address */}
          <Section title="Address">
            <div className="flex items-start gap-3">
              <FiHome className="text-blue-600 mt-1.5" />
              <div className="text-gray-700">
                <p>{user.address.line1}</p>
                <p>{user.address.line2}</p>
                <p>
                  {user.address.city}, {user.address.state} -{" "}
                  {user.address.pincode}
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* RIGHT SIDE: Orders */}
        <div className="lg:col-span-2 space-y-8">
          <Section title="Order History">
            <div className="space-y-4">
              {user.orders.map((order) => (
                <Link
                  to={`/admin/orders/${order.id}`}
                  key={order.id}
                  className="block bg-gray-50 hover:bg-gray-100 p-4 rounded-xl border border-gray-200 flex items-center justify-between transition"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      Order #{order.id}
                    </p>
                    <p className="text-gray-500 text-sm">{order.date}</p>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-gray-800">
                      ₹{order.amount}
                    </p>
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-semibold ${
                        orderStatusColors[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

/* ------------------------------------
   REUSABLE COMPONENTS
--------------------------------------- */

const Section = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 space-y-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    {children}
  </div>
);

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <p className="font-medium text-gray-700">{label}</p>
      <p className="text-gray-500">{value}</p>
    </div>
  </div>
);
