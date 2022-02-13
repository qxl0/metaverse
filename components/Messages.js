import { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from './SendMessage'
import Message from './Message'

const MINS_DURATION = 15
function Messages() {
  const { user } = useMoralis()
  const endOfMessageRef = useRef(null)
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  )

  console.log('data is: ', data)
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          variant="dark"
        />
      </div>

      <div className="space-y-10 p-4">
        {/* messages */}
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
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
