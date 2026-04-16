import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaGithub, FaGlobe, FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEyeOff, IoEye } from "react-icons/io5";
import API from "../../services/api";

// Zod Schema for validation
const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Full name must be at least 3 characters")
      .max(50, "Full name is too long"),
    
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be less than 20 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers and underscores"),

    email: z
      .string()
      .email("Please enter a valid email address"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password is too long"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterForm = z.infer<typeof registerSchema>;

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur", // Validates on blur + submit
  });

  const password = watch("password");

  const onSubmit = async (data: RegisterForm) => {
    setServerError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      // Send only required fields to backend
      await API.post("/auth/register", {
        fullName: data.fullName,
        username: data.username,
        email: data.email,
        password: data.password,
      });

      setSuccess(true);
      reset(); // Reset form after successful registration

      setTimeout(() => {
        alert("Account created successfully! 🎉 You can now login.");
        // window.location.href = "/login"; // Uncomment if you want auto-redirect
      }, 1000);
      
    } catch (err: any) {
      console.error(err);
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Registration failed. Please try again.";
      setServerError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#a3ced2] p-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-[30px] overflow-hidden shadow-2xl"
      >
        {/* Left Side */}
        <div className="hidden md:flex md:w-1/2 bg-[#b2e2e7] p-12 flex-col justify-between relative overflow-hidden">
          <div>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md">
              <span className="text-[#76c2c9] font-bold text-3xl">M</span>
            </div>

            <h2 className="mt-10 text-3xl font-semibold text-[#2f5a5f] leading-tight">
              Exchange Skills,<br />Build Connections<br />and Learn Faster
            </h2>
          </div>

          <div className="relative h-72 flex items-center justify-center">
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="https://i.pinimg.com/736x/c3/21/97/c32197d88a4b7ed79aed784ed7176ea0.jpg"
              alt="Illustration"
              className="w-full max-w-[280px] object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <div className="flex justify-end mb-6">
            <select className="text-sm text-gray-500 bg-transparent outline-none cursor-pointer">
              <option>English (UK)</option>
            </select>
          </div>

          <h3 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h3>
          <p className="text-gray-500 mb-8">Join our community and start learning today</p>

          {/* Social Login Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-3 py-3 px-5 border border-gray-200 rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-all text-sm font-medium"
            >
              <FaGlobe size={20} className="text-blue-500" />
              Google
            </button>

            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-3 py-3 px-5 border border-gray-200 rounded-2xl hover:bg-gray-50 active:bg-gray-100 transition-all text-sm font-medium"
            >
              <FaGithub size={20} />
              GitHub
            </button>
          </div>

          <div className="relative flex py-4 items-center mb-8">
            <div className="flex-grow border-t border-gray-200" />
            <span className="flex-shrink mx-6 text-gray-400 text-xs uppercase tracking-widest font-medium">
              or continue with email
            </span>
            <div className="flex-grow border-t border-gray-200" />
          </div>

          <AnimatePresence>
            {serverError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-sm"
              >
                {serverError}
              </motion.div>
            )}

            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl text-sm"
              >
                Account created successfully! 🎉 Please login to continue.
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input
                  id="fullName"
                  type="text"
                  {...register("fullName")}
                  placeholder="John Doe"
                  className="w-full pl-12 py-3.5 border border-gray-200 rounded-2xl focus:border-[#76c2c9] focus:ring-1 focus:ring-[#76c2c9] outline-none transition-all"
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-xs mt-1.5">{errors.fullName.message}</p>}
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1.5">
                Username
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input
                  id="username"
                  type="text"
                  {...register("username")}
                  placeholder="@johndoe"
                  className="w-full pl-12 py-3.5 border border-gray-200 rounded-2xl focus:border-[#76c2c9] focus:ring-1 focus:ring-[#76c2c9] outline-none transition-all"
                />
              </div>
              {errors.username && <p className="text-red-500 text-xs mt-1.5">{errors.username.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <MdEmail className="absolute left-4 top-3.5 text-gray-400" size={20} />
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="you@example.com"
                  className="w-full pl-12 py-3.5 border border-gray-200 rounded-2xl focus:border-[#76c2c9] focus:ring-1 focus:ring-[#76c2c9] outline-none transition-all"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-2xl focus:border-[#76c2c9] focus:ring-1 focus:ring-[#76c2c9] outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1.5">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  placeholder="••••••••"
                  className="w-full pl-12 py-3.5 border border-gray-200 rounded-2xl focus:border-[#76c2c9] focus:ring-1 focus:ring-[#76c2c9] outline-none transition-all"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1.5">{errors.confirmPassword.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#76c2c9] hover:bg-[#65b1b8] disabled:bg-[#9ed4d9] text-white py-4 rounded-2xl font-semibold text-base shadow-lg transition-all mt-4 flex items-center justify-center disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </motion.button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#76c2c9] font-semibold hover:underline transition-colors"
            >
              Log in
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}