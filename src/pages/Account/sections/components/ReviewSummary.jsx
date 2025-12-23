import { Star } from "lucide-react";

const ReviewSummary = ({ review }) => {
  return (
    <div className="mt-4 bg-neutral/50 rounded-lg p-3 text-sm">
      <p className="font-semibold mb-1 flex items-center gap-2">
        Your Review
        <span className="flex items-center gap-1 text-primary">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-primary text-primary" />
          ))}
        </span>
      </p>
      <p className="text-gray-700">{review.text}</p>
    </div>
  );
};

export default ReviewSummary;
