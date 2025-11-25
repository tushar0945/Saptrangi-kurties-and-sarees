// const CardPayment = () => {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold mb-6">Debit & Credit Card</h2>

//       <input
//         type="text"
//         placeholder="Enter Card Number"
//         className="w-full border p-3 rounded mb-4"
//       />

//       <div className="flex gap-4">
//         <input
//           type="text"
//           placeholder="MM/YY"
//           className="w-full border p-3 rounded"
//         />

//         <input
//           type="password"
//           placeholder="CVV"
//           className="w-full border p-3 rounded"
//         />
//       </div>

//       <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg">
//         PAY NOW
//       </button>
//     </div>
//   );
// };

// export default CardPayment;

import React, { useState } from "react";

const CardPayment = ({ onPay }) => {
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border">
      <h3 className="text-lg font-semibold mb-4">Debit & Credit Card</h3>

      <div className="space-y-3">
        <input
          value={card}
          onChange={(e) => setCard(e.target.value)}
          placeholder="Card Number"
          className="w-full border p-3 rounded text-sm"
        />

        <div className="flex gap-3">
          <input
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            placeholder="MM/YY"
            className="flex-1 border p-3 rounded text-sm"
          />
          <input
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
            className="w-28 border p-3 rounded text-sm"
          />
        </div>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name on the card"
          className="w-full border p-3 rounded text-sm"
        />

        <button
          onClick={() => onPay?.()}
          className="mt-3 w-full py-3 rounded-lg font-semibold bg-primary text-white hover:opacity-95 transition"
        >
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default CardPayment;
