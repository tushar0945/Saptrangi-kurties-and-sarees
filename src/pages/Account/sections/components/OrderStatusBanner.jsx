import { CheckCircle } from "lucide-react";

const OrderStatusBanner = ({
  status,
  order,
  returnInfo,
  returnReason,
  refundAmount,
  getPickupScheduleLabel,
}) => {
  return (
    <>
      {/* RETURN REQUESTED */}
      {status === "return-requested" && (
        <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
          <p className="font-semibold text-primary text-lg flex items-center gap-2">
            🔄 Return Requested
          </p>

          <p className="text-gray-700 mt-1">
            {returnInfo?.schedule || getPickupScheduleLabel()}
          </p>

          <p className="text-gray-600 text-sm mt-1">
            Reason: {returnInfo?.reason || returnReason}
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

      {/* RETURNED */}
      {status === "returned" && (
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <p className="font-semibold text-green-700 text-lg flex items-center gap-2">
            <CheckCircle size={20} /> Item Returned
          </p>
          <p className="text-gray-700 mt-1">
            Refund of ₹{refundAmount} has been processed to your UPI.
          </p>
        </div>
      )}

      {/* DELIVERED */}
      {status === "delivered" && !returnInfo && (
        <>
          <p className="text-green-700 font-semibold text-lg flex items-center gap-2">
            <CheckCircle size={22} /> Delivered Successfully
          </p>
          <p className="text-gray-700">Delivered on {order.deliveredOn}</p>
        </>
      )}

      {/* CONFIRMED */}
      {status === "confirmed" && (
        <>
          <p className="text-green-600 font-semibold text-lg">
            ✔ Order Confirmed
          </p>
          <p className="text-gray-700">
            On {order.date}, {order.time}
          </p>
        </>
      )}

      {/* SHIPPED */}
      {status === "shipped" && (
        <>
          <p className="font-semibold text-primary text-lg">🚚 Order Shipped</p>
          <p className="text-gray-700">Arriving by {order.eta}</p>
        </>
      )}
    </>
  );
};

export default OrderStatusBanner;
