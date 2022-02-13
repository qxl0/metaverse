import React from 'react'
import { useMoralis } from 'react-moralis'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import ChangeUsername from '../components/ChangeUsername'

function Header() {
  const { user } = useMoralis()

  return (
    <div className="text-pink-500">
      <div className="">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            objectFit="cover"
            layout="fill"
            className="rounded-full"
          />
        </div>

        <div>
          <div className="relative h-48 w-48 rounded-full border-8 border-pink-500 lg:mx-auto">
            <Avatar logoutOnPress={true} />
          </div>

          <h1 className="text-3xl">Welcome to Metaverse!!!</h1>

          <h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header
