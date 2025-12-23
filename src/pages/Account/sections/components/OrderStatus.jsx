import { CheckCircle } from "lucide-react";

const OrderStatus = ({ order, status, returnInfo }) => {
  if (status === "return-requested") {
    return (
      <div className="bg-primary/10 p-4 rounded-lg">
        <p className="font-semibold text-primary">Return Requested</p>
        <p>{returnInfo.schedule}</p>
      </div>
    );
  }

  if (status === "delivered") {
    return (
      <div>
        <p className="text-green-700 font-semibold flex gap-2">
          <CheckCircle /> Delivered Successfully
        </p>
        <p>Delivered on {order.deliveredOn}</p>
      </div>
    );
  }

  return null;
};

export default OrderStatus;
