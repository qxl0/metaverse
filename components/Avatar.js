import React from 'react'
import { useMoralis } from 'react-moralis'

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis()

  return <div>Avatar</div>
}

export default Avatar
