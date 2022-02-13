import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'
import Header from '../components/Header'
import Messages from '../components/Messages'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />
  return (
    <div
      className="overflow-y h-screen overflow-hidden 
      overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900"
    >
      <Head>
        <title>My Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <Header />

        {/* Message */}
        <Messages />
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  )
}
