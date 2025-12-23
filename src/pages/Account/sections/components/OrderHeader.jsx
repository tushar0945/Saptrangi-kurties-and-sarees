const OrderHeader = ({ order }) => (
  <div className="bg-white p-6 rounded-xl border shadow-sm flex justify-between">
    <div>
      <p className="font-semibold">Order Number</p>
      <p className="text-gray-600">{order.id}</p>
    </div>
    <div className="text-right">
      <p className="font-semibold">Order Placed</p>
      <p className="text-gray-600">
        {order.date} • {order.time}
      </p>
    </div>
  </div>
);

export default OrderHeader;
