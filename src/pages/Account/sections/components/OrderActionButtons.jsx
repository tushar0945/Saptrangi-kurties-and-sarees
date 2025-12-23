import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const OrderActionButtons = ({
  status,
  order,
  savedReview,
  scrollToTracking,
  setShowReviewModal,
  setShowReturnModal,
}) => {
  return (
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
      {status === "delivered" && (
        <>
          <button
            onClick={() => !savedReview && setShowReviewModal(true)}
            className={`flex-1 py-3 border rounded-lg flex items-center
              justify-center gap-2 ${
                savedReview
                  ? "border-neutral bg-neutral text-gray-500 cursor-not-allowed"
                  : "border-primary bg-primary text-white hover:bg-secondary"
              }`}
          >
            <Star size={17} />
            {savedReview ? "Reviewed" : "Review"}
          </button>

          <button
            onClick={() => setShowReturnModal(true)}
            className="flex-1 py-3 border border-primary rounded-lg
              text-primary font-medium hover:bg-primary hover:text-white
              flex items-center justify-center gap-2"
          >
            ↩ Return
          </button>
        </>
      )}

      {/* RETURN REQUESTED */}
      {status === "return-requested" && (
        <p className="text-primary font-medium text-sm mt-2 w-full">
          Return request submitted. Pickup scheduled.
        </p>
      )}

      {/* RETURNED */}
      {status === "returned" && (
        <p className="text-green-600 font-medium text-sm mt-2 w-full">
          Item successfully returned.
        </p>
      )}
    </div>
  );
};

export default OrderActionButtons;
