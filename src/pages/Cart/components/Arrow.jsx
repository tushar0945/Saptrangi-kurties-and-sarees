import { ChevronUp, ChevronDown } from "lucide-react";

const Arrow = ({ open }) => {
  return open ? (
    <ChevronUp size={18} strokeWidth={1.7} className="text-gray-700" />
  ) : (
    <ChevronDown size={18} strokeWidth={1.7} className="text-gray-700" />
  );
};

export default Arrow;
