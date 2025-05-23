'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignupPage() {

  const router = useRouter()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)


  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })

  const onSignUp = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user)
      console.log("Signup success", response.data);
      router.push('/login')

    } catch (error: any) {
      setLoading(false)
      console.log("Signup failed")
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <label htmlFor="username">username</label>
      <input
        className='b-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        id='username'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder='username'
        type="text"
      />
      <label htmlFor="username">email</label>
      <input
        className='b-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        id='username'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='username'
        type="text"
      />
      <label htmlFor="username">password</label>
      <input
        className='b-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
        id='username'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='password'
        type="password"
      />
      <button
        onClick={onSignUp}
        className='p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600'
      >
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link href={"/login"}>Visit Login Page</Link >

    </div>
  )
}
