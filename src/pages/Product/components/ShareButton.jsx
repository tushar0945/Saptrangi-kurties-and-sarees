// import { Share2 } from "lucide-react";

// const ShareButton = ({ product }) => {
//   const handleShare = async () => {
//     const shareData = {
//       title: product.name,
//       text: `Check out this ${product.name} on SaajNika ✨`,
//       url: window.location.href,
//     };

//     try {
//       if (navigator.share) {
//         await navigator.share(shareData);
//       } else {
//         await navigator.clipboard.writeText(shareData.url);
//         alert("Product link copied!");
//       }
//     } catch (error) {
//       console.error("Share failed:", error);
//     }
//   };

//   return (
//     <button
//       onClick={handleShare}
//       className="
//     w-10 h-10
//     flex items-center justify-center
//     rounded-full
//     bg-white
//     border border-gray-200
//     shadow-md
//     hover:bg-pink-50
//     hover:text-pink-600
//     active:scale-95
//     transition
//   "
//     >
//       <Share2 size={18} />
//     </button>
//   );
// };

// export default ShareButton;

import { Share2 } from "lucide-react";

const ShareButton = ({ product }) => {
  const handleShare = async () => {
    // ✅ WhatsApp / Insta friendly text
    const shareText = `✨ Check out this ${product.name} on SaajNika ✨

${window.location.href}`;

    try {
      if (navigator.share) {
        await navigator.share({
          text: shareText, // 👈 text + url combined
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert("Product link copied!");
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="
        w-10 h-10
        flex items-center justify-center
        rounded-full
        bg-white
        border border-gray-200
        shadow-md
        hover:bg-pink-50
        hover:text-pink-600
        active:scale-95
        transition
      "
      aria-label="Share product"
      title="Share product"
    >
      <Share2 size={18} />
    </button>
  );
};

export default ShareButton;
