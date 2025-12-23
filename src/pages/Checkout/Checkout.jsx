import { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  // Example order data (later this will come from cart)
  const orderAmount = 1499; // INR

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (loading) return;
    setLoading(true);

    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load");
      setLoading(false);
      return;
    }

    try {
      // 1️⃣ Create order on backend
      const { data } = await axios.post(
        "http://localhost:8000/api/create-order/",
        { amount: orderAmount }
      );

      const options = {
        key: data.key, // Razorpay Key ID
        amount: data.amount,
        currency: "INR",
        order_id: data.order_id,
        name: "Barkat Imperial Elegance",
        description: "Saree Purchase",
        handler: async function (response) {
          // 2️⃣ Send payment details to backend
          await axios.post(
            "http://localhost:8000/api/verify-payment/",
            response
          );

          // 3️⃣ Redirect to success page
          window.location.href = "/order-success";
        },
        prefill: {
          name: "Tushar Patil",
          email: "tushar@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#0f766e",
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

        {/* Order Summary */}
        <div className="border-b pb-4 mb-4">
          <p className="flex justify-between">
            <span>Saree</span>
            <span>₹1499</span>
          </p>
          <p className="flex justify-between font-semibold mt-2">
            <span>Total</span>
            <span>₹1499</span>
          </p>
        </div>

        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
