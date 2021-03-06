import React from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()
  const setUsername = () => {
    const username = prompt(
      `Enter your nnew Username (current username: ${user.getUsername()})`
    )
    if (!username) return

    setUserData({ username })
  }
  return (
    <div className="absolute top-5 right-5 text-sm">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  )
}

export default ChangeUsername
