import { useNavigate, useParams } from "react-router-dom";

const CancelSuccess = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="bg-white rounded-xl border p-6 shadow space-y-6 text-center">
      <div className="flex flex-col items-center">
        <span className="text-green-600 text-4xl">✔</span>
        <h2 className="text-xl font-bold mt-2">Order Cancelled</h2>
      </div>

      <button
        onClick={() => navigate("/myaccount/orders")}
        className="bg-yellow-400 w-full py-3 rounded-lg font-semibold"
      >
        DONE
      </button>
    </div>
  );
};

export default CancelSuccess;
