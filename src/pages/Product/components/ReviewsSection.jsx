import React from "react";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ReviewsSection = ({ product }) => {
  if (!product) return null;

  const rating = product.rating || 0;
  const reviews = product.reviews || [];
  const tags = product.tags || [];

  const totalReviews = reviews.length;

  // Rating distribution (1–5 stars)
  const ratingCount = [0, 0, 0, 0, 0];
  reviews.forEach((r) => {
    ratingCount[r.stars - 1]++;
  });

  const getPercent = (count) =>
    totalReviews === 0 ? 0 : Math.round((count / totalReviews) * 100);

  return (
    <section className="mt-12 w-full">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Ratings & Reviews
      </h2>

      {/* Top Summary Section */}
      <div className="flex flex-col md:flex-row gap-10 bg-white/40 p-6 rounded-xl">
        {/* LEFT — Main Rating Summary */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="text-5xl font-bold text-gray-900">{rating}</div>

          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-yellow-500 ${
                  i < Math.round(rating) ? "" : "opacity-30"
                }`}
              />
            ))}
          </div>

          <div className="text-gray-600 mt-1">{totalReviews} ratings</div>

          <button className="mt-4 px-5 py-2 border border-gray-400 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            Rate Product
          </button>
        </div>

        {/* RIGHT — Rating Bars */}
        <div className="w-full md:w-2/3 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-3">
              <span className="w-4">{star}</span>

              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    star === 5
                      ? "bg-green-600"
                      : star === 4
                      ? "bg-green-400"
                      : star === 3
                      ? "bg-yellow-500"
                      : "bg-gray-300"
                  }`}
                  style={{ width: `${getPercent(ratingCount[star - 1])}%` }}
                />
              </div>

              <span className="w-10 text-gray-600">
                {ratingCount[star - 1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* What customers felt */}
      {tags.length > 0 && (
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-3">
            What our customers felt:
          </h3>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 border rounded-full text-sm bg-white shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="mt-10 space-y-8">
        {reviews.length === 0 && (
          <div className="bg-gray-100 p-6 rounded-xl text-center text-gray-600">
            No reviews yet. Be the first to review! 🌟
          </div>
        )}

        {reviews.map((rev, index) => (
          <div key={index} className="border-b pb-6">
            {/* Rating row */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-green-600 text-white text-sm rounded-md">
                {rev.stars} ★
              </span>
              <h4 className="font-semibold">{rev.title || "Review"}</h4>
            </div>

            <p className="text-gray-700 mt-2">{rev.comment}</p>

            <div className="text-sm text-gray-500 mt-2">
              {rev.name} • {rev.date}
            </div>

            <div className="flex gap-4 mt-3 text-gray-600">
              <button className="flex items-center gap-1 hover:text-green-600 transition">
                <FaThumbsUp /> {rev.likes || 0}
              </button>
              <button className="flex items-center gap-1 hover:text-red-600 transition">
                <FaThumbsDown /> {rev.dislikes || 0}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
