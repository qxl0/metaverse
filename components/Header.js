import React from 'react'
import { useMoralis } from 'react-moralis'
import Image from 'next/image'
function Header() {
  const { user } = useMoralis()

  return (
    <div>
      <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
        <Image
          src="https://links.papareact.com/3pi"
          objectFit="cover"
          layout="fill"
          className="rounded-full"
        />
      </div>
    </div>
  )
}

export default Header
