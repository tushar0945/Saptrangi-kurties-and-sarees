import {
  FiArrowLeft,
  FiUser,
  FiMapPin,
  FiTruck,
  FiPackage,
  FiClock,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();

  // MOCK ORDER DATA (replace with API later)
  const order = {
    id: "ORD1023",
    date: "26 Nov 2025",
    status: "Pending", // Pending, Confirmed, Shipped, Delivered, Cancelled

    customer: {
      name: "Tushar Patil",
      phone: "9876543210",
      email: "tushar@example.com",
    },

    address: {
      line1: "123 MG Road",
      line2: "Near Bus Stand",
      city: "Nashik",
      state: "Maharashtra",
      pincode: "422005",
    },

    payment: {
      method: "UPI",
      transactionId: "TXN2456123",
      status: "Paid",
    },

    items: [
      {
        id: 1,
        title: "Peach Kurti",
        qty: 1,
        price: 1299,
        image: "https://via.placeholder.com/80",
      },
      {
        id: 2,
        title: "Cotton Palazzo",
        qty: 2,
        price: 599,
        image: "https://via.placeholder.com/80",
      },
    ],

    subtotal: 2497,
    shipping: 50,
    total: 2547,
  };

  // STATUS COLOR MAP
  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-700",
    Confirmed: "bg-blue-100 text-blue-700",
    Shipped: "bg-purple-100 text-purple-700",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="space-y-10">
      {/* Back Button */}
      <Link
        to="/admin/orders"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
      >
        <FiArrowLeft /> Back to Orders
      </Link>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Order Details</h1>
        <p className="text-gray-500 mt-1">Order ID: #{order.id}</p>
      </div>

      {/* Order Summary Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 space-y-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="space-y-1">
            <p className="text-gray-500">Order Date</p>
            <p className="text-gray-900 font-medium">{order.date}</p>
          </div>

          <div>
            <span
              className={`px-4 py-1.5 text-sm rounded-full font-semibold ${
                statusColors[order.status]
              }`}
            >
              {order.status}
            </span>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="flex justify-between mt-6 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10"></div>

          <TimelineStep icon={<FiClock />} label="Placed" active />
          <TimelineStep
            icon={<FiPackage />}
            label="Confirmed"
            active={order.status !== "Pending"}
          />
          <TimelineStep
            icon={<FiTruck />}
            label="Shipped"
            active={order.status === "Shipped" || order.status === "Delivered"}
          />
          <TimelineStep
            icon={<FiTruck />}
            label="Delivered"
            active={order.status === "Delivered"}
          />
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE — Customer + Shipping + Payment */}
        <div className="space-y-8">
          {/* Customer  */}
          <Section title="Customer Information">
            <div className="flex items-center gap-4">
              <FiUser className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-gray-800">
                  {order.customer.name}
                </p>
                <p className="text-gray-500 text-sm">{order.customer.phone}</p>
                <p className="text-gray-500 text-sm">{order.customer.email}</p>
              </div>
            </div>
          </Section>

          {/* Shipping Address */}
          <Section title="Shipping Address">
            <div className="flex items-center gap-4">
              <FiMapPin className="text-red-500" size={24} />
              <div className="text-gray-700">
                <p>{order.address.line1}</p>
                <p>{order.address.line2}</p>
                <p>
                  {order.address.city}, {order.address.state} -{" "}
                  {order.address.pincode}
                </p>
              </div>
            </div>
          </Section>

          {/* Payment Details */}
          <Section title="Payment Details">
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Method:</span>{" "}
                {order.payment.method}
              </p>
              <p>
                <span className="font-semibold">Transaction ID:</span>{" "}
                {order.payment.transactionId}
              </p>
              <p>
                <span className="font-semibold">Payment Status:</span>{" "}
                {order.payment.status}
              </p>
            </div>
          </Section>
        </div>

        {/* RIGHT SIDE — Order Items + Summary */}
        <div className="lg:col-span-2 space-y-8">
          {/* ITEMS */}
          <Section title="Order Items">
            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-xl object-cover shadow-sm"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{item.title}</p>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    </div>
                  </div>

                  <p className="font-semibold text-gray-800">₹{item.price}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* SUMMARY */}
          <Section title="Price Summary">
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{order.subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{order.shipping}</span>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

/* ----------------------------------------
   COMPONENTS
------------------------------------------- */

const Section = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 space-y-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    {children}
  </div>
);

const TimelineStep = ({ icon, label, active }) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
        active
          ? "bg-blue-600 text-white border-blue-600 shadow-md"
          : "bg-gray-200 text-gray-500 border-gray-300"
      }`}
    >
      {icon}
    </div>
    <p className="text-xs mt-2 text-gray-700">{label}</p>
  </div>
);
