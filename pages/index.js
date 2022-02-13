import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'

export default function Home() {
  const { isAuthenticated } = useMoralis()

  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen">
      <Head>
        <title>My Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to metaverse</h1>
    </div>
  )
}
