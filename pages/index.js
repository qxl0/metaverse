import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'
import Header from '../components/Header'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />
  return (
    <div className="overflow-y h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>My Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <Header />

        {/* Message */}
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  )
}
