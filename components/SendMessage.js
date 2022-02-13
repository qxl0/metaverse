import { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({ endOfMessageRef }) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')
  const sendMessage = (e) => {
    e.preventDefault()

    if (!message) return

    const Messages = Moralis.Object.extend('Messages')
    const messages = new Messages()

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (msg) => {
          console.log('message just sent:', msg)
        },
        (error) => {
          console.log('error occured, ', error.message)
        }
      )
    endOfMessageRef.current.scrollIntoView({ behavior: 'smooth' })

    setMessage('')
  }
  return (
    <form
      className="opacity-full fixed bottom-10 flex w-11/12 max-w-2xl
    rounded-full border-4 border-blue-400
     bg-black px-6 py-4 shadow-xl"
    >
      <input
        placeholder={`Enter a Message ${user.getUsername()}`}
        type="text"
        className="flex-grow bg-transparent pr-5 text-white placeholder-gray-500 outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage
