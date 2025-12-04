import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderCancel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    // later save reason to backend
    navigate(`/account/orders/${id}/cancelled`);
  };

  return (
    <div className="p-6 bg-white border rounded-xl shadow space-y-6">
      <h2 className="font-semibold text-lg mb-2">
        Select reason for cancellation *
      </h2>

      <div className="space-y-3">
        {[
          "Want to order in a different size",
          "Want to order a different product",
          "Do not want product anymore",
          "Duplicate order",
          "Ordered by mistake",
          "Delayed delivery",
          "Others (Please specify)",
        ].map((r) => (
          <label key={r} className="flex gap-3 items-center">
            <input
              type="radio"
              name="reason"
              value={r}
              onChange={(e) => setReason(e.target.value)}
            />
            {r}
          </label>
        ))}
      </div>

      <button
        disabled={!reason}
        onClick={handleSubmit}
        className="w-full bg-yellow-400 py-3 rounded font-semibold disabled:bg-gray-300"
      >
        CANCEL
      </button>
    </div>
  );
};

export default OrderCancel;
