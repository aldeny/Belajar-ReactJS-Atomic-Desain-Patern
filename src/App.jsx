import React from "react";
import Button from "./components/Elements/Button";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-xl mb-2 font-bold text-blue-600">Login</h1>
        <p className="text-sm mb-8 text-slate-600 font-medium tracking-wide">
          Selamat datang, silahkan login...
        </p>
        <form action="">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-base text-slate-700"
            >
              Email
            </label>
            <input
              type="text"
              className="text-sm border border-slate-300 rounded font-medium w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 p-2 text-slate-700 placeholder:opacity-50"
              placeholder="Email"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
