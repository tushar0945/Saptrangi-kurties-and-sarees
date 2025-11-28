import { useState } from "react";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = login(email, password);

    if (!response.success) {
      setError(response.message);
      return;
    }

    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-5">
      <div className="bg-white max-w-sm w-full p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mt-3 text-sm">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            className="w-full border rounded-lg p-3"
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full border rounded-lg p-3"
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Login as Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
