import { Link } from "react-router-dom";

const OrderItems = ({ items }) => (
  <div className="bg-white p-6 rounded-xl border shadow-sm">
    <h3 className="font-semibold text-lg mb-4">Order Items</h3>

    {items.map((item, i) => (
      <Link
        key={i}
        to={`/collection/${item.slug}`}
        className="flex gap-5 pb-5 border-b last:border-none"
      >
        <img src={item.image} className="w-32 h-40 rounded-lg" />
        <div>
          <p className="font-semibold">{item.brand}</p>
          <p>{item.name}</p>
          <p>Size: {item.size}</p>
          <p className="font-semibold">₹{item.price}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default OrderItems;
