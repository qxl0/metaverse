import { useMoralis } from 'react-moralis'

function SendMessage() {
  const { user } = useMoralis()

  return (
    <form
      className="opacity-full fixed bottom-10 flex w-11/12 max-w-2xl
    rounded-full
     bg-black px-6 py-4 shadow-xl"
    >
      <input
        placeholder={`Enter a Message ${user.getUsername()}`}
        type="text"
        className="flex-grow bg-transparent pr-5 text-white placeholder-gray-500 outline-none"
      />
      <button className="font-bold text-pink-500">Send</button>
    </form>
  )
}

export default SendMessage
