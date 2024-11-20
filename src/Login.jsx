import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

const [mail,setMail]=useState("")
const[pass,setPass]=useState("")


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
    <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto bg-white shadow-2xl rounded-lg p-6 lg:p-12">
      <form
        className="flex flex-col items-center border-gray-800 rounded-xl sm:max-w-96 m-auto mt-14 gap-4 text-gray-600"
        // onSubmit={handleSignIn}
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="text-4xl">Login</p>
        </div>
        <input
          type="email"
          id="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800 rounded-xl"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          id="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800 rounded-xl"
          placeholder="Enter your password"
          required
        />
        <p>Don't have an account?</p>
        <Link to={"/Signin"}>
          <p>Signin</p>
        </Link>
        <button
          className="bg-blue-600 text-white py-1 px-2 rounded-xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login