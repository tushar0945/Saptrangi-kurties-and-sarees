import { useState } from "react";
import DeleteConfirmModal from "./DeleteConfirmModal";

const Payments = () => {
  const [upiList, setUpiList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newUpi, setNewUpi] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedUpi, setSelectedUpi] = useState(null);

  const handleRemove = (upi) => {
    setUpiList((prev) => prev.filter((item) => item !== upi));
  };

  const handleAddUpi = () => {
    if (!newUpi.trim()) return;
    setUpiList([...upiList, newUpi]);
    setShowModal(false);
    setNewUpi("");
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-neutral shadow-sm w-full">
      <h1 className="text-xl font-bold text-dark mb-6">Payments</h1>

      {/* --------------------------- */}
      {/* 🔶 Debit & Credit Cards */}
      {/* --------------------------- */}
      <h2 className="text-[15px] font-semibold text-dark mb-3">
        Debit & Credit Cards
      </h2>

      <div className="border  rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <img
            src="/CardPay.png"
            alt="card"
            className="w-[40px] h-[40px] object-contain opacity-80"
          />

          <span className="text-[15px] text-dark/70">
            No Debit/Credit Card saved
          </span>
        </div>
      </div>

      {/* --------------------------- */}
      {/* 🔷 UPI */}
      {/* --------------------------- */}
      <h2 className="text-[15px] font-semibold text-dark mb-3">UPI</h2>

      <div className="border  rounded-xl p-6">
        {upiList.length > 0 &&
          upiList.map((upi) => (
            <div key={upi}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/gpay.jpg"
                    className="w-[26px] h-[26px] object-contain rounded-md"
                  />
                  <span className="text-[15px] text-dark">{upi}</span>
                </div>

                <button
                  onClick={() => {
                    setSelectedUpi(upi);
                    setConfirmDelete(true);
                  }}
                  className="text-primary text-[14px] font-semibold hover:underline"
                >
                  REMOVE
                </button>
              </div>

              <div className="my-4 border-b border-neutral"></div>
            </div>
          ))}

        {/* ADD UPI */}
        <div
          onClick={() => setShowModal(true)}
          className="flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img
              src="/upi.png"
              className="w-[22px] h-[22px] object-contain opacity-90"
            />
            <span className="text-[15px] text-dark/70">Add UPI ID</span>
          </div>

          <div className="w-[26px] h-[26px] rounded-full border border-primary flex items-center justify-center">
            <span className="text-primary text-lg leading-none">+</span>
          </div>
        </div>
      </div>

      {/* ADD UPI MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-8 w-[420px] rounded-xl shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-5 top-5 text-dark text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-center text-dark mb-6">
              Add UPI ID
            </h2>

            <input
              type="text"
              placeholder="Enter UPI Id"
              value={newUpi}
              onChange={(e) => setNewUpi(e.target.value)}
              className="w-full border-b border-neutral pb-2 outline-none mb-4 text-dark"
            />

            <p className="text-[13px] text-dark/70 mb-6">
              UPI ID example: yourname@bankname or yourmobile@bankname
            </p>

            <button
              onClick={handleAddUpi}
              className="bg-primary hover:bg-secondary w-full py-3 rounded-lg font-semibold text-white transition"
            >
              ADD
            </button>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM */}
      <DeleteConfirmModal
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={() => {
          handleRemove(selectedUpi);
          setConfirmDelete(false);
          setSelectedUpi(null);
        }}
      />
    </div>
  );
};

export default Payments;
