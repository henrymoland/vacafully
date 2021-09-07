import Header from "../components/Header";
import { useState } from "react";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center">
        <div>
          <h1 className="flex-grow pt-20 font-semibold text-2xl text-gray-900">
            Log into your Vacafully account
          </h1>
        </div>

        <form className="mt-12 w-3/4 md:w-500px 2xl:w-[600px]">
          {/* EMAIL */}
          <div className="mb-10">
            <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs">
              Email
            </label>
            <input
              placeholder="myemail@gmail.com"
              className="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/*PASSWORD*/}
          <div>
            <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs">
              Password
            </label>
            <input
              placeholder="************"
              className="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300  mt-2"
              id="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p class="text-gray-600 text-xs italic text-right mt-2 hover:opacity-90 cursor-pointer">
              Forgot password?
            </p>
          </div>

          <button className="button-yellow w-full mt-6 text-[16px]">
            Sign Up
          </button>

          <p className="text-sm text-center mt-4 text-gray-900">
            Don't have a Vacafully account?{" "}
            <span className="font-bold text-yellow-500 cursor-pointer">
              Sign Up
            </span>
          </p>
        </form>
      </main>
    </div>
  );
}

export default login;
