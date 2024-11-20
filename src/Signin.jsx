import React, { useState } from 'react'

function Signin() {

  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  const [confirmpassword,setconfirmpassword]=useState('')





  return (
    <div> 
      <div className="  flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
    <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto bg-white shadow-2xl rounded-lg p-6 lg:p-12">

   
    <form className="flex flex-col  rounded-xl items-center sm:max-w-96 m-auto mt-14 gap-4 text-gray-600">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">Sign in</p>
      </div>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800 rounded-xl"
        placeholder="Enter your name"
        required
      ></input>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800 rounded-xl"
        placeholder="Enter your email"
        required
      ></input>
      <input
        type="Password"
        id="password"
        value={pass}
        onChange={(e) => setpass(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800 rounded-xl"
        placeholder="Enter your password"
        required
      ></input>
      <input
        type="Password"
        id="cofirmpassword"
        value={confirmpassword}
        onChange={(e) => setconfirmpassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800 rounded-xl"
        placeholder="Conform password"
        required
      ></input>
      <button
        className="bg-blue-600 text-white py-1 px-2 rounded-xl"
        type="submit"
      >
        Submit
      </button>
    </form>
    </div>
  </div>
  </div>
  )
}

export default Signin