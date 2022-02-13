import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis()

  const imgSrc = `https://avatars.dicebear.com/api/pixel-art/${
    username || user.get('username')
  }.svg`
  console.log('img src:', imgSrc)
  return (
    <Image
      src={imgSrc}
      layout="fill"
      onClick={() => logoutOnPress && logout()}
      className="cursor-pointer rounded-full bg-black hover:opacity-75"
    />
  )
}

export default Avatar
