// const DeleteConfirmModal = ({ open, onClose, onConfirm }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]">
//       <div className="bg-white rounded-xl p-6 w-[340px] shadow-lg">
//         <h2 className="text-lg font-semibold mb-3">Delete Confirmation</h2>

//         <p className="text-gray-600 mb-6">
//           Are you sure you want to delete this UPI?
//         </p>

//         <div className="flex items-center justify-end gap-3">
//           <button
//             onClick={onClose}
//             className="px-5 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={onConfirm}
//             className="px-5 py-2 bg-red-100 text-red-600 font-medium rounded-lg hover:bg-red-200"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteConfirmModal;

const DeleteConfirmModal = ({ open, onClose, onConfirm }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[340px] shadow-lg">
        <h2 className="text-lg font-semibold mb-3">Delete Address</h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this address?
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2 border rounded-lg">
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2 bg-red-100 text-red-600 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
