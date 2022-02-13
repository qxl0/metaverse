import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'

function Messages() {
  const { user } = useMoralis()

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          variant="dark"
        />
      </div>

      <div className="mt-5 text-center text-gray-400">
        <p>You're up to date {user.getUsername()}! 🍢</p>
      </div>
    </div>
  )
}

export default Messages
