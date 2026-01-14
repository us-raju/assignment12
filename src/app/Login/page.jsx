"use client";

import { useForm } from "react-hook-form";
// import { signIn } from "next-auth/react";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  //   const onSubmit = async (data) => {
  //     await signIn("credentials", {
  //       email: data.email,
  //       password: data.password,
  //       redirect: true,
  //       callbackUrl: "/",
  //     });
  //   };

  return (
    <form
      onSubmit={handleSubmit("onSubmit")}
      className="max-w-md mx-auto my-10 space-y-4 p-5 rounded-[10px] border border-base-content"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <input
        {...register("email")}
        placeholder="Email"
        className="input input-bordered w-full"
      />

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
        className="input input-bordered w-full"
      />

      <button className="btn btn-primary w-full">Login</button>
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
  );
};

export default LoginPage;
