import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

// ✅ Social Icons (FIX)
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

import API from "../../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user._id);

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login coming soon 🚀`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6F0] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-5xl rounded-[40px] shadow-xl overflow-hidden flex"
      >
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 p-10 md:p-16">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!!</h2>
          <p className="text-gray-400 mb-8">
            Please enter your details to login
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="email@gmail.com"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-10 p-3 rounded-xl bg-gray-100 outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 p-3 rounded-xl bg-gray-100 outline-none"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <div className="text-red-500 text-sm font-medium">{error}</div>
            )}

            {/* BUTTON */}
            <button
              disabled={loading}
              className="w-full bg-[#F3D5C0] py-3 rounded-xl font-bold flex justify-center items-center gap-2"
            >
              {loading ? "Loading..." : "Login"}
              {!loading && <ArrowRight />}
            </button>
          </form>

          {/* SOCIAL LOGIN */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">OR</p>

            <div className="flex justify-center gap-4">
              <SocialBtn
                icon={<FcGoogle size={22} />}
                onClick={() => handleSocialLogin("Google")}
              />
              <SocialBtn
                icon={<FaFacebook size={22} className="text-blue-600" />}
                onClick={() => handleSocialLogin("Facebook")}
              />
              <SocialBtn
                icon={<FaApple size={22} />}
                onClick={() => handleSocialLogin("Apple")}
              />
            </div>
          </div>

          <p className="mt-6 text-center text-gray-500">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="font-bold cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex w-1/2 bg-[#FDF6F0] items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/ee/12/09/ee12095467693a0527b8d5bb5893e8b9.jpg"
            alt="illustration"
            className="w-[80%]"
          />
        </div>
      </motion.div>
    </div>
  );
}

function SocialBtn({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-white border rounded-xl hover:shadow-md"
    >
      {icon}
    </button>
  );
}
