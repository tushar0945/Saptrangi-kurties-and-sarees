// import React, { useState, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import { IoChevronUp } from "react-icons/io5";
// import { CheckCircle, Star, X, Package } from "lucide-react";

// const OrderDetails = () => {
//   const { id } = useParams();

//   const [showBreakup, setShowBreakup] = useState(false);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [showReturnModal, setShowReturnModal] = useState(false);

//   // review states
//   const [reviewText, setReviewText] = useState("");
//   const [reviewRating, setReviewRating] = useState(0);
//   const [savedReview, setSavedReview] = useState(null);

//   // return states
//   const [returnReason, setReturnReason] = useState("");
//   const [returnSlot, setReturnSlot] = useState("10 AM – 2 PM");
//   const [showSlotPicker, setShowSlotPicker] = useState(false);
//   const [returnInfo, setReturnInfo] = useState(null); // local "return requested" info

//   const [selectedUpi, setSelectedUpi] = useState("");
//   const savedUpis = ["tushar@upi", "tusharpatil@ybl"]; // sample UPI IDs

//   const contentRef = useRef(null);

//   /** -------- SAMPLE ORDER DATA (replace with API) ---------- */
//   const orders = [
//     {
//       id: "1",
//       date: "24 Nov 2025",
//       time: "10:16 pm",
//       status: "return-requested ", // from API: confirmed | shipped | delivered | return-requested | returned
//       eta: "29 Nov 2025",
//       pickedOn: "27 Nov 2025",
//       transitDate: "28 Nov 2025",
//       deliveredOn: "29 Nov 2025",
//       address: {
//         name: "Tushar Patil",
//         mobile: "8999197992",
//         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
//         label: "Home",
//       },
//       items: [
//         {
//           brand: "Bewakoof®",
//           name: "Women's Dark Blue Washed Bootcut Jeans",
//           size: "28",
//           price: "1199",
//           image: "/k1.webp",
//           slug: "peach-kurti",
//         },
//       ],
//     },
//   ];

//   const trackSectionRef = useRef(null);

//   // 🔧 Add this function
//   const scrollToTracking = () => {
//     setTimeout(() => {
//       trackSectionRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   const order = orders.find((o) => o.id === id);

//   if (!order) {
//     return <div className="p-10 text-center text-xl">Order Not Found</div>;
//   }

//   // 👇 status that UI will use – if local return is requested, we temporarily
//   // treat it as "return-requested" in UI (real app: backend should send this)
//   const baseStatus = order.status; // what API says
//   const status = returnInfo ? "return-requested" : baseStatus;

//   /** Pickup schedule label (for tomorrow) */
//   const getPickupScheduleLabel = () => {
//     const today = new Date();
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     const day = tomorrow.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });

//     return `Pickup scheduled for ${day} between ${returnSlot}`;
//   };

//   const returnReasons = [
//     "Wrong Size",
//     "Defective / Damaged Product",
//     "Product Not as Described",
//     "Received Wrong Item",
//     "Other",
//   ];

//   const totalAmount = order.items.reduce((t, i) => t + Number(i.price), 0);

//   // COD fee separate for refund calc (your logic choice #2)
//   const COD_FEE = 20;
//   const refundAmount = totalAmount - COD_FEE;

//   const paidStatuses = ["delivered", "return-requested", "returned"];
//   const isPaid = paidStatuses.includes(status);

import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoChevronUp } from "react-icons/io5";
import { CheckCircle, Star, X, Package } from "lucide-react";
import { OrderService } from "../../../services/orderService";

const OrderDetails = () => {
  const { id } = useParams();

  /* ---------------- UI STATES ---------------- */
  const [showBreakup, setShowBreakup] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);

  /* ---------------- DATA ---------------- */
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- REVIEW ---------------- */
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [savedReview, setSavedReview] = useState(null);

  /* ---------------- RETURN ---------------- */
  const [returnReason, setReturnReason] = useState("");
  const [returnSlot, setReturnSlot] = useState("10 AM – 2 PM");
  const [showSlotPicker, setShowSlotPicker] = useState(false);
  const [returnInfo, setReturnInfo] = useState(null);
  const [selectedUpi, setSelectedUpi] = useState("");

  const savedUpis = ["tushar@upi", "tusharpatil@ybl"];

  const contentRef = useRef(null);
  const trackSectionRef = useRef(null);

  /* ---------------- FETCH ORDER ---------------- */
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await OrderService.getOrderById(id);
        // backend returns { order: {...} }
        console.log(res);
        setOrder(res.order);
      } catch (err) {
        console.error("Order fetch error:", err);
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);
  console.log("order", order);
  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!order) {
    return <div className="p-10 text-center text-xl">Order Not Found</div>;
  }

  /* ---------------- STATUS ---------------- */
  const baseStatus = order.status.toLowerCase();
  const status = returnInfo ? "return-requested" : baseStatus;

  /* ---------------- HELPERS ---------------- */
  const getPickupScheduleLabel = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = tomorrow.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return `Pickup scheduled for ${day} between ${returnSlot}`;
  };

  const returnReasons = [
    "Wrong Size",
    "Defective / Damaged Product",
    "Product Not as Described",
    "Received Wrong Item",
    "Other",
  ];

  /* ---------------- AMOUNT ---------------- */
  const totalAmount = Number(order.total_amount);
  const COD_FEE = 20;
  const refundAmount = totalAmount - COD_FEE;

  const paidStatuses = ["delivered", "return-requested", "returned"];
  const isPaid = paidStatuses.includes(status);

  const scrollToTracking = () => {
    setTimeout(() => {
      trackSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="p-6 space-y-6">
      {/* ---------- ORDER NUMBER ---------- */}
      {/* <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
        <div>
          <p className="font-semibold text-dark">Order Number</p>
          <p className="text-gray-600 mt-1">{order.id}</p>
        </div>

        <div className="text-right">
          <p className="font-semibold text-dark">Order Placed</p>
          <p className="text-gray-600 mt-1">
            {order.date} • {order.time}
          </p>
        </div>
      </div> */}

      <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
        <div>
          <p className="font-semibold text-dark">Order Number</p>
          <p className="text-gray-600 mt-1">{order.id}</p>
        </div>

        <div className="text-right">
          <p className="font-semibold text-dark">Order Placed</p>
          <p className="text-gray-600 mt-1">
            {new Date(order.created_at).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}{" "}
            •{" "}
            {new Date(order.created_at).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>

      {/* ---------- ORDER ITEMS ---------- */}
      {/* <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="font-semibold text-lg mb-4 text-dark">Order Items</h3>

        {order.items.map((item, index) => (
          <Link
            key={index}
            to={`/collection/${item.slug}`}
            className="flex gap-5 pb-5 border-b last:border-none hover:bg-neutral/50 rounded-lg transition"
          >
            <img
              src={item.image}
              className="w-32 h-40 rounded-lg object-cover"
              alt={item.name}
            />

            <div>
              <p className="font-semibold text-lg">{item.brand}</p>
              <p className="text-gray-700">{item.name}</p>
              <p className="mt-3 text-dark">Size: {item.size}</p>
              <p className="font-semibold mt-1 text-dark">₹{item.price}</p>
            </div>
          </Link>
        ))}
      </div> */}

      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="font-semibold text-lg mb-4 text-dark">Order Items</h3>

        {order.items.map((item, index) => (
          <Link
            key={index}
            to={`/collection/${item.product.slug}`}
            className="flex gap-5 pb-5 border-b last:border-none hover:bg-neutral/50 rounded-lg transition"
          >
            <img
              src={item.product.main_image}
              className="w-32 h-40 rounded-lg object-cover object-[center_-0%]"
              alt={item.product.name}
            />

            <div>
              <p className="font-semibold text-lg">{item.product.name}</p>

              <p className="text-gray-700">Category: {item.product.category}</p>

              <p className="mt-2 text-dark">
                Size: <span className="font-medium">{item.size}</span>
              </p>

              <p className="text-dark">
                Qty: <span className="font-medium">{item.quantity}</span>
              </p>

              <p className="font-semibold mt-1 text-dark">
                ₹{order.total_amount}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* ---------- STATUS / BANNER BLOCK ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm space-y-3">
        {/* ================= PENDING ================= */}
        {status === "pending" && (
          <>
            <p className="text-yellow-600 font-semibold text-lg">
              ⏳ Order Pending
            </p>
            <p className="text-gray-700">
              Your order has been placed and is awaiting confirmation.
            </p>
          </>
        )}

        {/* ================= CONFIRMED ================= */}
        {status === "confirmed" && (
          <>
            <p className="text-green-600 font-semibold text-lg">
              ✔ Order Confirmed
            </p>
            <p className="text-gray-700">
              Order confirmed on{" "}
              {new Date(order.created_at).toLocaleDateString("en-IN")}
            </p>
          </>
        )}

        {/* ================= SHIPPED ================= */}
        {status === "shipped" && (
          <>
            <p className="font-semibold text-primary text-lg">
              🚚 Order Shipped
            </p>
            <p className="text-gray-700">Your order is on the way.</p>
          </>
        )}

        {/* ================= DELIVERED ================= */}
        {status === "delivered" && !returnInfo && (
          <>
            <p className="text-green-700 font-semibold text-lg flex items-center gap-2">
              <CheckCircle size={22} /> Delivered Successfully
            </p>
            <p className="text-gray-700">
              Delivered on{" "}
              {new Date(order.created_at).toLocaleDateString("en-IN")}
            </p>
          </>
        )}

        {/* ================= RETURN REQUESTED ================= */}
        {status === "return-requested" && (
          <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
            <p className="font-semibold text-primary text-lg">
              🔄 Return Requested
            </p>

            <p className="text-gray-700 mt-1">
              {returnInfo?.schedule || getPickupScheduleLabel()}
            </p>

            <p className="text-gray-600 text-sm mt-1">
              Reason: {returnInfo?.reason}
            </p>

            {returnInfo?.upi && (
              <p className="text-gray-600 text-sm">
                Refund to UPI:{" "}
                <span className="font-semibold">{returnInfo.upi}</span>
              </p>
            )}

            <p className="text-[12px] text-gray-500 mt-1">
              Refund of ₹{refundAmount} will be initiated after pickup & quality
              check.
            </p>
          </div>
        )}

        {/* ================= RETURNED ================= */}
        {status === "returned" && (
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold text-green-700 text-lg flex items-center gap-2">
              <CheckCircle size={20} /> Item Returned
            </p>
            <p className="text-gray-700 mt-1">
              Refund of ₹{refundAmount} has been processed.
            </p>
          </div>
        )}

        {/* ================= CANCELLED ================= */}
        {status === "cancelled" && (
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold text-red-600 text-lg">
              ✖ Order Cancelled
            </p>
            <p className="text-gray-700 mt-1">This order has been cancelled.</p>
          </div>
        )}

        {/* ================= ACTION BUTTONS ================= */}
        <div className="flex items-center gap-4 mt-6 flex-wrap">
          {/* CONFIRMED */}
          {status === "confirmed" && (
            <>
              <Link
                to={`/account/orders/${order.id}/cancel`}
                className="flex-1 py-3 border border-gray-300 rounded-lg
          text-red-500 font-medium text-center"
              >
                ✖ Cancel
              </Link>

              <button
                disabled
                className="flex-1 py-3 border border-gray-300 rounded-lg
          text-gray-400 cursor-not-allowed"
              >
                📍 Track
              </button>
            </>
          )}

          {/* SHIPPED */}
          {status === "shipped" && (
            <>
              <button
                disabled
                className="flex-1 py-3 border border-gray-300 rounded-lg
          text-gray-400 cursor-not-allowed"
              >
                ✖ Cancel
              </button>

              <button
                onClick={scrollToTracking}
                className="flex-1 py-3 border border-primary text-primary
          rounded-lg font-semibold"
              >
                📍 Track
              </button>
            </>
          )}

          {/* DELIVERED */}
          {status === "delivered" && !returnInfo && (
            <>
              <button
                onClick={() => setShowReviewModal(true)}
                className="flex-1 py-3 bg-primary text-white rounded-lg"
              >
                <Star size={16} className="inline mr-1" />
                Review
              </button>

              <button
                onClick={() => setShowReturnModal(true)}
                className="flex-1 py-3 border border-primary text-primary rounded-lg"
              >
                ↩ Return
              </button>
            </>
          )}

          {/* RETURN STATES */}
          {status === "return-requested" && (
            <p className="text-primary font-medium text-sm w-full">
              Return request submitted. Pickup scheduled.
            </p>
          )}

          {status === "returned" && (
            <p className="text-green-600 font-medium text-sm w-full">
              Item successfully returned.
            </p>
          )}

          {status === "cancelled" && (
            <p className="text-red-500 font-medium text-sm w-full">
              No actions available for cancelled orders.
            </p>
          )}
        </div>

        {/* ================= REVIEW SUMMARY ================= */}
        {savedReview && (
          <div className="mt-4 bg-neutral/50 rounded-lg p-3 text-sm">
            <p className="font-semibold mb-1 flex items-center gap-2">
              Your Review
              <span className="flex items-center gap-1 text-primary">
                {Array.from({ length: savedReview.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-primary text-primary"
                  />
                ))}
              </span>
            </p>
            <p className="text-gray-700">{savedReview.text}</p>
          </div>
        )}
      </div>

      {/* ---------- SHIPPING ADDRESS ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h3 className="font-semibold text-lg mb-1">Shipping Address</h3>

        <p className="font-semibold">
          {order.address.name} | {order.address.mobile}
        </p>

        <p className="text-gray-700 mt-1 leading-relaxed">
          {order.address.area && `${order.address.area}, `}
          {order.address.landmark && `${order.address.landmark}, `}
          {order.address.city && `${order.address.city}, `}
          {order.address.state} - {order.address.pincode}
        </p>
      </div>

      {/* ---------- PRICE BREAKUP + PAYMENT STATUS ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        {/* Total + Payment Chip */}
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">
            ₹{order.total_amount}.00 Total
          </p>

          {/* PAYMENT STATUS CHIP */}
          {["delivered", "return-requested", "returned"].includes(status) && (
            <span className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-lg">
              Paid
            </span>
          )}

          {["pending", "confirmed", "shipped"].includes(status) && (
            <span className="px-3 py-1 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-lg">
              To be paid
            </span>
          )}

          {status === "cancelled" && (
            <span className="px-3 py-1 text-sm font-medium text-red-600 bg-red-100 rounded-lg">
              Cancelled
            </span>
          )}
        </div>

        {/* View Breakup */}
        <div
          onClick={() => setShowBreakup(!showBreakup)}
          className="cursor-pointer mt-3 flex items-center gap-2"
        >
          <p className="text-primary font-semibold">View Breakup</p>
          <IoChevronUp
            className={`text-primary transition ${
              showBreakup ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Breakup content */}
        <div
          ref={contentRef}
          style={{
            maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
          }}
          className="transition-all overflow-hidden"
        >
          <div className="mt-4 space-y-4 text-[15px]">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span className="font-medium">₹{order.total_amount}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="font-medium text-green-600">FREE</span>
            </div>

            <div className="flex justify-between">
              <span>COD Fee</span>
              <span className="font-medium">₹{COD_FEE}</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
              <p>Total Payable</p>
              <p>₹{order.total_amount + COD_FEE}.00</p>
            </div>

            {/* REFUND INFO */}
            {["return-requested", "returned"].includes(status) && (
              <p className="text-xs text-gray-500">
                Refund Amount: ₹{refundAmount}
                (COD fee of ₹{COD_FEE} is non-refundable)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ---------- NEED HELP ---------- */}
      <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
        <p className="text-primary font-semibold cursor-pointer">Need Help?</p>
      </div>

      {/* ---------- TRACKING SECTION (only when shipped) ---------- */}
      {status === "shipped" && (
        <div
          ref={trackSectionRef}
          className="bg-white p-6 rounded-xl border shadow-sm"
        >
          <h2 className="font-semibold text-lg mb-4">Track Your Order</h2>

          <p className="text-gray-700 mb-1">
            Status: <span className="font-semibold capitalize">{status}</span>
          </p>

          <p className="text-gray-700">
            Courier: <span className="font-semibold">Xpressbees</span>
          </p>

          <p className="text-gray-700 mt-1">
            Tracking ID:{" "}
            <span className="font-semibold text-primary">125852132149</span>
          </p>

          <hr className="my-4" />

          <div className="space-y-10 mt-4">
            {[
              { label: "Order Placed On", date: order.date },
              { label: "Picked Up On", date: order.pickedOn },
              { label: "In Transit On", date: order.transitDate },
              { label: "Arriving By", date: order.eta },
              { label: "Delivered On", date: order.deliveredOn },
            ].map((step, index, arr) => {
              const isDone = index <= 2; // shipped = 2nd step complete
              const isLast = index === arr.length - 1;

              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="w-6 h-6 flex items-center justify-center">
                      {isDone ? (
                        <CheckCircle size={22} className="text-green-600" />
                      ) : (
                        <Package size={20} className="text-gray-400" />
                      )}
                    </span>

                    {!isLast && (
                      <span
                        className={`w-[2px] flex-1 ${
                          isDone ? "bg-green-600" : "bg-gray-300"
                        }`}
                      ></span>
                    )}
                  </div>

                  <div>
                    <h4
                      className={`font-semibold ${
                        isDone ? "text-green-700" : "text-gray-600"
                      }`}
                    >
                      {step.label}
                    </h4>
                    <p className="text-gray-700">{step.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ===================== REVIEW MODAL ===================== */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-dark">
                Review Product
              </h2>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1 rounded-full hover:bg-neutral/70"
              >
                <X size={20} />
              </button>
            </div>

            {/* Rating row */}
            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">Overall Rating</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setReviewRating(star)}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral hover:border-primary transition"
                  >
                    <Star
                      size={18}
                      className={
                        star <= reviewRating
                          ? "fill-primary text-primary"
                          : "text-gray-400"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
              placeholder="Share your experience with this product..."
              className="w-full border border-neutral rounded-xl p-3 text-sm outline-none focus:border-primary"
            />

            <button
              onClick={() => {
                setSavedReview({
                  rating: reviewRating,
                  text: reviewText,
                });
                setShowReviewModal(false);
              }}
              disabled={!reviewRating}
              className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm ${
                reviewRating
                  ? "bg-primary text-white hover:bg-secondary transition"
                  : "bg-neutral text-gray-500 cursor-not-allowed"
              }`}
            >
              Submit Review
            </button>
          </div>
        </div>
      )}

      {/* ===================== RETURN MODAL ===================== */}
      {showReturnModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-dark">Return Order</h2>
              <button
                onClick={() => setShowReturnModal(false)}
                className="p-1 rounded-full hover:bg-neutral/70"
              >
                <X size={20} />
              </button>
            </div>

            {/* Reason list */}
            <p className="text-sm font-medium text-gray-700 mb-2">
              Select a reason for return
            </p>
            <div className="space-y-2 mb-4">
              {returnReasons.map((reason) => {
                const active = returnReason === reason;
                return (
                  <button
                    key={reason}
                    type="button"
                    onClick={() => setReturnReason(reason)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition ${
                      active
                        ? "border-primary bg-primary/5 text-dark"
                        : "border-neutral text-dark/70 hover:border-primary/60"
                    }`}
                  >
                    <span>{reason}</span>
                    {active && (
                      <CheckCircle size={18} className="text-primary" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Refund via UPI */}
            <div className="mt-4">
              <p className="font-medium text-sm text-gray-700 mb-2">
                Select Refund Method (UPI)
              </p>

              <div className="space-y-2">
                {savedUpis.map((upi) => {
                  const isSelected = selectedUpi === upi;
                  return (
                    <button
                      key={upi}
                      onClick={() => setSelectedUpi(upi)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-sm ${
                        isSelected
                          ? "border-primary bg-primary/10 text-dark"
                          : "border-gray-300 hover:border-primary/70 text-dark/70"
                      }`}
                    >
                      <span>{upi}</span>
                      {isSelected && (
                        <CheckCircle size={18} className="text-primary" />
                      )}
                    </button>
                  );
                })}
              </div>

              <Link
                to="/account/payments"
                className="mt-2 text-xs text-primary underline block w-fit"
              >
                + Add another UPI ID
              </Link>

              <p className="text-[11px] text-gray-500 mt-1">
                Refund of ₹{refundAmount} will be processed to the selected UPI
                once the return is completed.
              </p>
            </div>

            {/* Pickup schedule */}
            <div className="mt-5 rounded-lg bg-neutral/50 p-3">
              <p className="text-xs font-semibold text-gray-600 mb-1">
                Pickup Schedule
              </p>
              <p className="text-sm">{getPickupScheduleLabel()}</p>

              <button
                type="button"
                onClick={() => setShowSlotPicker((v) => !v)}
                className="mt-2 text-xs font-semibold text-primary underline"
              >
                Change pickup time slot
              </button>

              {showSlotPicker && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {["10 AM – 2 PM", "2 PM – 6 PM", "6 PM – 9 PM"].map(
                    (slot) => {
                      const active = returnSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setReturnSlot(slot);
                            setShowSlotPicker(false);
                          }}
                          className={`px-3 py-1 rounded-full text-xs border transition ${
                            active
                              ? "bg-primary text-white border-primary"
                              : "border-neutral text-dark/70 hover:border-primary"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    }
                  )}
                </div>
              )}
            </div>

            {/* Submit Return */}
            <button
              disabled={!returnReason || !selectedUpi}
              onClick={() => {
                setReturnInfo({
                  reason: returnReason,
                  schedule: getPickupScheduleLabel(),
                  upi: selectedUpi,
                });
                setShowReturnModal(false);
                setReturnReason("");
                setSelectedUpi("");
              }}
              className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm ${
                returnReason && selectedUpi
                  ? "bg-primary text-white hover:bg-secondary"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Submit Return Request
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;

// import React, { useState, useRef } from "react";
// import { useParams, Link } from "react-router-dom";
// import { IoChevronUp } from "react-icons/io5";
// import { CheckCircle, Star, X, Package } from "lucide-react";

// const OrderDetails = () => {
//   const { id } = useParams();

//   const [showBreakup, setShowBreakup] = useState(false);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [showReturnModal, setShowReturnModal] = useState(false);

//   // review states
//   const [reviewText, setReviewText] = useState("");
//   const [reviewRating, setReviewRating] = useState(0);
//   const [savedReview, setSavedReview] = useState(null);

//   // return states
//   const [returnReason, setReturnReason] = useState("");
//   const [returnSlot, setReturnSlot] = useState("10 AM – 2 PM");
//   const [showSlotPicker, setShowSlotPicker] = useState(false);
//   const [returnInfo, setReturnInfo] = useState(null); // local "return requested" info

//   const [selectedUpi, setSelectedUpi] = useState("");
//   const savedUpis = ["tushar@upi", "tusharpatil@ybl"]; // sample UPI IDs

//   const contentRef = useRef(null);

//   /** -------- SAMPLE ORDER DATA (replace with API) ---------- */
//   const orders = [
//     {
//       id: "1",
//       date: "24 Nov 2025",
//       time: "10:16 pm",
//       status: "return-requested ", // from API: confirmed | shipped | delivered | return-requested | returned
//       eta: "29 Nov 2025",
//       pickedOn: "27 Nov 2025",
//       transitDate: "28 Nov 2025",
//       deliveredOn: "29 Nov 2025",
//       address: {
//         name: "Tushar Patil",
//         mobile: "8999197992",
//         full: "TALWADE Bk, Saitane road, near hanuman mandir , Dhule, Maharashtra, 425408",
//         label: "Home",
//       },
//       items: [
//         {
//           brand: "Bewakoof®",
//           name: "Women's Dark Blue Washed Bootcut Jeans",
//           size: "28",
//           price: "1199",
//           image: "/k1.webp",
//           slug: "peach-kurti",
//         },
//       ],
//     },
//   ];

//   const trackSectionRef = useRef(null);

//   // 🔧 Add this function
//   const scrollToTracking = () => {
//     setTimeout(() => {
//       trackSectionRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   const order = orders.find((o) => o.id === id);

//   if (!order) {
//     return <div className="p-10 text-center text-xl">Order Not Found</div>;
//   }

//   // 👇 status that UI will use – if local return is requested, we temporarily
//   // treat it as "return-requested" in UI (real app: backend should send this)
//   const baseStatus = order.status; // what API says
//   const status = returnInfo ? "return-requested" : baseStatus;

//   /** Pickup schedule label (for tomorrow) */
//   const getPickupScheduleLabel = () => {
//     const today = new Date();
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);

//     const day = tomorrow.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });

//     return `Pickup scheduled for ${day} between ${returnSlot}`;
//   };

//   const returnReasons = [
//     "Wrong Size",
//     "Defective / Damaged Product",
//     "Product Not as Described",
//     "Received Wrong Item",
//     "Other",
//   ];

//   const totalAmount = order.items.reduce((t, i) => t + Number(i.price), 0);

//   // COD fee separate for refund calc (your logic choice #2)
//   const COD_FEE = 20;
//   const refundAmount = totalAmount - COD_FEE;

//   const paidStatuses = ["delivered", "return-requested", "returned"];
//   const isPaid = paidStatuses.includes(status);

//   return (
//     <div className="p-6 space-y-6">
//       {/* ---------- ORDER NUMBER ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
//         <div>
//           <p className="font-semibold text-dark">Order Number</p>
//           <p className="text-gray-600 mt-1">{order.id}</p>
//         </div>

//         <div className="text-right">
//           <p className="font-semibold text-dark">Order Placed</p>
//           <p className="text-gray-600 mt-1">
//             {order.date} • {order.time}
//           </p>
//         </div>
//       </div>

//       {/* ---------- ORDER ITEMS ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <h3 className="font-semibold text-lg mb-4 text-dark">Order Items</h3>

//         {order.items.map((item, index) => (
//           <Link
//             key={index}
//             to={`/collection/${item.slug}`}
//             className="flex gap-5 pb-5 border-b last:border-none hover:bg-neutral/50 rounded-lg transition"
//           >
//             <img
//               src={item.image}
//               className="w-32 h-40 rounded-lg object-cover"
//               alt={item.name}
//             />

//             <div>
//               <p className="font-semibold text-lg">{item.brand}</p>
//               <p className="text-gray-700">{item.name}</p>
//               <p className="mt-3 text-dark">Size: {item.size}</p>
//               <p className="font-semibold mt-1 text-dark">₹{item.price}</p>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* ---------- STATUS / BANNER BLOCK ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm space-y-3">
//         {/* STATUS HEADER BASED ON STATUS + RETURN INFO */}
//         {status === "return-requested" && (
//           <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
//             <p className="font-semibold text-primary text-lg flex items-center gap-2">
//               🔄 Return Requested
//             </p>
//             <p className="text-gray-700 mt-1">
//               {returnInfo?.schedule || getPickupScheduleLabel()}
//             </p>
//             <p className="text-gray-600 text-sm mt-1">
//               Reason: {returnInfo?.reason || returnReason}
//             </p>
//             {returnInfo?.upi && (
//               <p className="text-gray-600 text-sm">
//                 Refund to UPI:{" "}
//                 <span className="font-semibold">{returnInfo.upi}</span>
//               </p>
//             )}
//             <p className="text-[12px] text-gray-500 mt-1">
//               Refund of ₹{refundAmount} will be initiated to your selected UPI
//               after the item is picked up and quality check is completed.
//             </p>
//           </div>
//         )}

//         {status === "returned" && (
//           <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//             <p className="font-semibold text-green-700 text-lg flex items-center gap-2">
//               <CheckCircle size={20} /> Item Returned
//             </p>
//             <p className="text-gray-700 mt-1">
//               Refund of ₹{refundAmount} has been processed to your UPI.
//             </p>
//           </div>
//         )}

//         {status === "delivered" && !returnInfo && (
//           <>
//             <p className="text-green-700 font-semibold text-lg flex items-center gap-2">
//               <CheckCircle size={22} /> Delivered Successfully
//             </p>
//             <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
//           </>
//         )}

//         {status === "confirmed" && (
//           <>
//             <p className="text-green-600 font-semibold text-lg">
//               ✔ Order Confirmed
//             </p>
//             <p className="text-gray-700">
//               On {order.date}, {order.time}
//             </p>
//           </>
//         )}

//         {status === "shipped" && (
//           <>
//             <p className="font-semibold text-primary text-lg">
//               🚚 Order Shipped
//             </p>
//             <p className="text-gray-700">Arriving by {order.eta}</p>
//           </>
//         )}

//         {/* -------------------- ACTION BUTTONS -------------------- */}
//         <div className="flex items-center gap-4 mt-6 flex-wrap">
//           {/* 1️⃣ CONFIRMED */}
//           {status === "confirmed" && (
//             <>
//               <Link
//                 to={`/account/orders/${order.id}/cancel`}
//                 className="flex-1 py-3 border border-gray-300 rounded-lg
//         text-red-500 font-medium text-center"
//               >
//                 ✖ Cancel
//               </Link>

//               <button
//                 disabled
//                 className="flex-1 py-3 border border-gray-300 rounded-lg
//         text-gray-400 cursor-not-allowed"
//               >
//                 📍 Track
//               </button>
//             </>
//           )}

//           {/* 2️⃣ SHIPPED */}
//           {status === "shipped" && (
//             <>
//               <button
//                 disabled
//                 className="flex-1 py-3 border border-gray-300 rounded-lg
//         text-gray-400 cursor-not-allowed"
//               >
//                 ✖ Cancel
//               </button>

//               <button
//                 onClick={scrollToTracking}
//                 className="flex-1 py-3 border border-primary text-primary
//         rounded-lg font-semibold"
//               >
//                 📍 Track
//               </button>
//             </>
//           )}

//           {/* 3️⃣ DELIVERED */}
//           {status === "delivered" && !returnInfo && (
//             <>
//               {/* Review Button */}
//               <button
//                 onClick={() => !savedReview && setShowReviewModal(true)}
//                 className={`flex-1 py-3 border rounded-lg flex items-center justify-center gap-2
//           ${
//             savedReview
//               ? "border-neutral bg-neutral text-gray-500 cursor-not-allowed"
//               : "border-primary bg-primary text-white hover:bg-secondary"
//           }`}
//               >
//                 <Star size={17} />
//                 {savedReview ? "Reviewed" : "Review"}
//               </button>

//               {/* Return Button */}
//               <button
//                 onClick={() => setShowReturnModal(true)}
//                 className="flex-1 py-3 border border-primary rounded-lg
//         text-primary font-medium hover:bg-primary hover:text-white
//         flex items-center justify-center gap-2"
//               >
//                 ↩ Return
//               </button>
//             </>
//           )}

//           {/* 4️⃣ RETURN REQUESTED */}
//           {status === "return-requested" && (
//             <p className="text-primary font-medium text-sm mt-2 w-full">
//               Return request submitted. Pickup scheduled.
//             </p>
//           )}

//           {/* 5️⃣ RETURNED */}
//           {status === "returned" && (
//             <p className="text-green-600 font-medium text-sm mt-2 w-full">
//               Item successfully returned.
//             </p>
//           )}
//         </div>

//         {/* Show saved review summary if exists */}
//         {savedReview && (
//           <div className="mt-4 bg-neutral/50 rounded-lg p-3 text-sm">
//             <p className="font-semibold mb-1 flex items-center gap-2">
//               Your Review
//               <span className="flex items-center gap-1 text-primary">
//                 {Array.from({ length: savedReview.rating }).map((_, i) => (
//                   <Star
//                     key={i}
//                     size={14}
//                     className="fill-primary text-primary"
//                   />
//                 ))}
//               </span>
//             </p>
//             <p className="text-gray-700">{savedReview.text}</p>
//           </div>
//         )}
//       </div>

//       {/* ---------- SHIPPING ADDRESS ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         <h3 className="font-semibold text-lg mb-1">Shipping Address</h3>
//         <p className="font-semibold">
//           {order.address.name} | {order.address.mobile}
//         </p>
//         <p className="text-gray-700">{order.address.full}</p>
//       </div>

//       {/* ---------- PRICE BREAKUP + PAYMENT STATUS ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm">
//         {/* Total + Payment Chip */}
//         <div className="flex justify-between items-center">
//           <p className="text-xl font-semibold">₹{totalAmount}.00 Total</p>

//           {isPaid ? (
//             <span className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-lg">
//               Paid
//             </span>
//           ) : (
//             <span className="px-3 py-1 text-sm font-medium text-yellow-600 bg-yellow-100 rounded-lg">
//               To be paid before delivery
//             </span>
//           )}
//         </div>

//         {/* View Breakup */}
//         <div
//           onClick={() => setShowBreakup(!showBreakup)}
//           className="cursor-pointer mt-3 flex items-center gap-2"
//         >
//           <p className="text-primary font-semibold">View Breakup</p>
//           <IoChevronUp
//             className={`text-primary transition ${
//               showBreakup ? "rotate-180" : ""
//             }`}
//           />
//         </div>

//         {/* Breakup content */}
//         <div
//           ref={contentRef}
//           style={{
//             maxHeight: showBreakup ? contentRef.current?.scrollHeight : 0,
//           }}
//           className="transition-all overflow-hidden"
//         >
//           <div className="mt-4 space-y-4 text-[15px]">
//             <div className="flex justify-between">
//               <span>Item Total</span>
//               <span className="font-medium">₹{totalAmount}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span className="font-medium text-green-600">FREE</span>
//             </div>
//             <div className="flex justify-between">
//               <span>COD Fee</span>
//               <span className="font-medium">₹{COD_FEE}</span>
//             </div>
//             <hr />
//             <div className="flex justify-between font-semibold">
//               <p>Total to be paid</p>
//               <p>₹{totalAmount + COD_FEE}.00</p>
//             </div>
//             <p className="text-xs text-gray-500">
//               Refund (if returned): ₹{refundAmount} (COD fee of ₹{COD_FEE} is
//               non-refundable).
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ---------- NEED HELP ---------- */}
//       <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
//         <p className="text-primary font-semibold cursor-pointer">Need Help?</p>
//       </div>

//       {/* ---------- TRACKING SECTION (only when shipped) ---------- */}
//       {status === "shipped" && (
//         <div
//           ref={trackSectionRef}
//           className="bg-white p-6 rounded-xl border shadow-sm"
//         >
//           <h2 className="font-semibold text-lg mb-4">Track Your Order</h2>

//           <p className="text-gray-700 mb-1">
//             Status: <span className="font-semibold capitalize">{status}</span>
//           </p>

//           <p className="text-gray-700">
//             Courier: <span className="font-semibold">Xpressbees</span>
//           </p>

//           <p className="text-gray-700 mt-1">
//             Tracking ID:{" "}
//             <span className="font-semibold text-primary">125852132149</span>
//           </p>

//           <hr className="my-4" />

//           <div className="space-y-10 mt-4">
//             {[
//               { label: "Order Placed On", date: order.date },
//               { label: "Picked Up On", date: order.pickedOn },
//               { label: "In Transit On", date: order.transitDate },
//               { label: "Arriving By", date: order.eta },
//               { label: "Delivered On", date: order.deliveredOn },
//             ].map((step, index, arr) => {
//               const isDone = index <= 2; // shipped = 2nd step complete
//               const isLast = index === arr.length - 1;

//               return (
//                 <div key={index} className="flex items-start gap-4">
//                   <div className="flex flex-col items-center">
//                     <span className="w-6 h-6 flex items-center justify-center">
//                       {isDone ? (
//                         <CheckCircle size={22} className="text-green-600" />
//                       ) : (
//                         <Package size={20} className="text-gray-400" />
//                       )}
//                     </span>

//                     {!isLast && (
//                       <span
//                         className={`w-[2px] flex-1 ${
//                           isDone ? "bg-green-600" : "bg-gray-300"
//                         }`}
//                       ></span>
//                     )}
//                   </div>

//                   <div>
//                     <h4
//                       className={`font-semibold ${
//                         isDone ? "text-green-700" : "text-gray-600"
//                       }`}
//                     >
//                       {step.label}
//                     </h4>
//                     <p className="text-gray-700">{step.date}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}

//       {/* ===================== REVIEW MODAL ===================== */}
//       {showReviewModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold text-dark">
//                 Review Product
//               </h2>
//               <button
//                 onClick={() => setShowReviewModal(false)}
//                 className="p-1 rounded-full hover:bg-neutral/70"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Rating row */}
//             <div className="mb-4">
//               <p className="text-sm text-gray-700 mb-2">Overall Rating</p>
//               <div className="flex gap-2">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <button
//                     key={star}
//                     type="button"
//                     onClick={() => setReviewRating(star)}
//                     className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral hover:border-primary transition"
//                   >
//                     <Star
//                       size={18}
//                       className={
//                         star <= reviewRating
//                           ? "fill-primary text-primary"
//                           : "text-gray-400"
//                       }
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <textarea
//               value={reviewText}
//               onChange={(e) => setReviewText(e.target.value)}
//               rows={4}
//               placeholder="Share your experience with this product..."
//               className="w-full border border-neutral rounded-xl p-3 text-sm outline-none focus:border-primary"
//             />

//             <button
//               onClick={() => {
//                 setSavedReview({
//                   rating: reviewRating,
//                   text: reviewText,
//                 });
//                 setShowReviewModal(false);
//               }}
//               disabled={!reviewRating}
//               className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm ${
//                 reviewRating
//                   ? "bg-primary text-white hover:bg-secondary transition"
//                   : "bg-neutral text-gray-500 cursor-not-allowed"
//               }`}
//             >
//               Submit Review
//             </button>
//           </div>
//         </div>
//       )}

//       {/* ===================== RETURN MODAL ===================== */}
//       {showReturnModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
//             <div className="flex justify-between items-center mb-3">
//               <h2 className="text-lg font-semibold text-dark">Return Order</h2>
//               <button
//                 onClick={() => setShowReturnModal(false)}
//                 className="p-1 rounded-full hover:bg-neutral/70"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Reason list */}
//             <p className="text-sm font-medium text-gray-700 mb-2">
//               Select a reason for return
//             </p>
//             <div className="space-y-2 mb-4">
//               {returnReasons.map((reason) => {
//                 const active = returnReason === reason;
//                 return (
//                   <button
//                     key={reason}
//                     type="button"
//                     onClick={() => setReturnReason(reason)}
//                     className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm border transition ${
//                       active
//                         ? "border-primary bg-primary/5 text-dark"
//                         : "border-neutral text-dark/70 hover:border-primary/60"
//                     }`}
//                   >
//                     <span>{reason}</span>
//                     {active && (
//                       <CheckCircle size={18} className="text-primary" />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Refund via UPI */}
//             <div className="mt-4">
//               <p className="font-medium text-sm text-gray-700 mb-2">
//                 Select Refund Method (UPI)
//               </p>

//               <div className="space-y-2">
//                 {savedUpis.map((upi) => {
//                   const isSelected = selectedUpi === upi;
//                   return (
//                     <button
//                       key={upi}
//                       onClick={() => setSelectedUpi(upi)}
//                       className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-sm ${
//                         isSelected
//                           ? "border-primary bg-primary/10 text-dark"
//                           : "border-gray-300 hover:border-primary/70 text-dark/70"
//                       }`}
//                     >
//                       <span>{upi}</span>
//                       {isSelected && (
//                         <CheckCircle size={18} className="text-primary" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               <Link
//                 to="/account/payments"
//                 className="mt-2 text-xs text-primary underline block w-fit"
//               >
//                 + Add another UPI ID
//               </Link>

//               <p className="text-[11px] text-gray-500 mt-1">
//                 Refund of ₹{refundAmount} will be processed to the selected UPI
//                 once the return is completed.
//               </p>
//             </div>

//             {/* Pickup schedule */}
//             <div className="mt-5 rounded-lg bg-neutral/50 p-3">
//               <p className="text-xs font-semibold text-gray-600 mb-1">
//                 Pickup Schedule
//               </p>
//               <p className="text-sm">{getPickupScheduleLabel()}</p>

//               <button
//                 type="button"
//                 onClick={() => setShowSlotPicker((v) => !v)}
//                 className="mt-2 text-xs font-semibold text-primary underline"
//               >
//                 Change pickup time slot
//               </button>

//               {showSlotPicker && (
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {["10 AM – 2 PM", "2 PM – 6 PM", "6 PM – 9 PM"].map(
//                     (slot) => {
//                       const active = returnSlot === slot;
//                       return (
//                         <button
//                           key={slot}
//                           type="button"
//                           onClick={() => {
//                             setReturnSlot(slot);
//                             setShowSlotPicker(false);
//                           }}
//                           className={`px-3 py-1 rounded-full text-xs border transition ${
//                             active
//                               ? "bg-primary text-white border-primary"
//                               : "border-neutral text-dark/70 hover:border-primary"
//                           }`}
//                         >
//                           {slot}
//                         </button>
//                       );
//                     }
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Submit Return */}
//             <button
//               disabled={!returnReason || !selectedUpi}
//               onClick={() => {
//                 setReturnInfo({
//                   reason: returnReason,
//                   schedule: getPickupScheduleLabel(),
//                   upi: selectedUpi,
//                 });
//                 setShowReturnModal(false);
//                 setReturnReason("");
//                 setSelectedUpi("");
//               }}
//               className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm ${
//                 returnReason && selectedUpi
//                   ? "bg-primary text-white hover:bg-secondary"
//                   : "bg-gray-300 text-gray-600 cursor-not-allowed"
//               }`}
//             >
//               Submit Return Request
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderDetails;
