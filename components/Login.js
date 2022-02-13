import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate, isAuthUndefined, user } = useMoralis()

  const handleLogin = async () => {
    console.log('TRY TO LOGIN')
    try {
      const res = await authenticate({
        onError: (err) => {
          console.log('error', err.message)
        },
      })
      console.log('LOGIN SUCCCESSFUL:', res)
    } catch (err) {
      console.log('Failed Login', err.message)
    }
  }

  return (
    <div className="relative bg-black">
      <h1>Login</h1>

      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          className="rounded-full object-cover"
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
        />
        <button
          className="animate-pulse rounded-lg bg-yellow-500 p-5 font-bold 
           hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login to the METAVERSE!
        </button>
      </div>
      <div className="relative h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
