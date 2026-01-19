"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [eye, SetEye] = useState(false);

  const handleRegistration = async (data) => {
    const res = await fetch("/api/Registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (res.ok) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Registration successful",
        showConfirmButton: false,
        timer: 1000,
      });
      router.push("/");
      reset();
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: result.message,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 my-10">
      <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-lg p-8 border border-base-content">
        <h2 className="text-3xl font-bold text-neutral mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-4">
          <div>
            <label className="label text-neutral">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label text-neutral">
              <span className="label-text">NID Number</span>
            </label>
            <input
              type="number"
              placeholder="Enter NID number"
              {...register("nid", {
                required: true,
                pattern: /^(\d{10}|\d{17})$/,
              })}
              className="input input-bordered w-full"
            />
            {errors.nid && (
              <p className="text-warning">
                NID must be 10 or 17 digits (numbers only)
              </p>
            )}
          </div>

          <div>
            <label className="label text-neutral">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              type="tel"
              placeholder="Phone number"
              {...register("phoneNumber", {
                required: true,
                pattern: /^01[3-9]\d{8}$/,
              })}
              className="input input-bordered w-full"
            />
            {errors.phoneNumber && (
              <p className="text-warning">
                Enter a valid Bangladeshi phone number (01XXXXXXXXX)
              </p>
            )}
          </div>

          <div>
            <label className="label text-neutral">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="relative">
            <label className="label text-neutral">
              <span className="label-text">Password</span>
            </label>
            <input
              type={eye ? "text" : "password"}
              placeholder="At least 6 characters"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              })}
              className="input input-bordered w-full pr-9"
            />
            {errors.password && (
              <p className="text-warning">
                Password must be at least 6 characters and include uppercase,
                lowercase, number, and special character
              </p>
            )}
            {eye ? (
              <span className="cursor-pointer absolute top-9 right-3 ">
                <FaRegEye onClick={() => SetEye(!eye)} />
              </span>
            ) : (
              <span className="cursor-pointer absolute top-9 right-3 ">
                <FaRegEyeSlash onClick={() => SetEye(!eye)} />
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
          <div className="text-center text-neutral">
            <strong>OR</strong>
          </div>
          <button
            type="button"
            className="btn text-base-100 w-full border-[#e5e5e5] bg-primary"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>

        <p className="text-center text-sm text-base-content mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-primary font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;
