import { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from './SendMessage'

function Messages() {
  const { user } = useMoralis()
  const endOfMessageRef = useRef(null)

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          variant="dark"
        />
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>
      <div className="mt-5 text-center text-gray-400" ref={endOfMessageRef}>
        <p>You're up to date {user.getUsername()}! 🍢</p>
      </div>
    </div>
  )
}

export default Messages
