import Header from "../components/Header";
import { useState } from "react";

function login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center">
        <div>
          <h1 className="flex-grow pt-20 font-semibold text-2xl text-gray-900">
            Create your Vacafully account
          </h1>
        </div>

        <form className="mt-12 w-3/4 md:w-500px 2xl:w-[600px]">
          {/* FIRST NAME */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            {/* LAST NAME */}
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          {/* EMAIL */}
          <div className="mb-10">
            <label className="block uppercase tracking-wide text-gray-700 font-bold text-xs">
              Email
            </label>
            <input
              placeholder="myemail@gmail.com"
              className="bg-gray-200 appearance-none border border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-300 mt-2"
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

          <button className="button-yellow w-full mt-6">Sign Up</button>

          <p className="text-sm text-center mt-4 mb-10 text-gray-900">
            Already have a Vacafully account?{" "}
            <span className="font-bold text-yellow-500 cursor-pointer">
              Log In
            </span>
          </p>
        </form>
      </main>
    </div>
  );
}

export default login;
