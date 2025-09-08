import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function DelayedButton({ children, to, className }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(to);
      setLoading(false);
    }, 2000); // ⏱️ 2 sec delay
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
      disabled={loading}
    >
      {loading ? <Loader text="Please wait..." /> : children}
    </button>
  );
}
