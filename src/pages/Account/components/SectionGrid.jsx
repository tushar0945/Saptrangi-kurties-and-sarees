import { useNavigate } from "react-router-dom";

const items = [
  {
    title: "My Orders",
    desc: "View, modify and track orders",
    path: "/myaccount/orders",
  },
  {
    title: "My Payments",
    desc: "Manage payment methods",
    path: "/myaccount/payments",
  },
  {
    title: "My Wallet",
    desc: "Check wallet balance and gift cards",
    path: "/myaccount/wallet",
  },
  {
    title: "My Addresses",
    desc: "Add or remove saved addresses",
    path: "/myaccount/addresses",
  },
  {
    title: "My Profile",
    desc: "Edit your personal information",
    path: "/myaccount/profile",
  },
  { title: "Help & Support", desc: "Reach out to us", path: "/account/help" },
];

const SectionGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-5 mt-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => navigate(item.path)}
          className="bg-white p-6 border border-[#e3e3e3] rounded-lg shadow-sm cursor-pointer hover:shadow-md transition"
        >
          <h3 className="font-semibold text-[16px] mb-1">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionGrid;
