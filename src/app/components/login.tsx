'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export function Login() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <div className="flex flex-col">
        <div className="flex gap-3">
          {session.user?.image && <Image className="rounded-full h-7 w-7" alt="" src={session.user.image} width={20} height={20}></Image>}
          Signed in as {session?.user?.name} <br />
        </div>
        <button className="s" onClick={() => signOut()}>Sign out</button>

      </div>
    )
  }
  return (

    <button onClick={() => {
      signIn()
    }} className="rounded-full px-6 py-3 text-white font-semibold hover:scale-105 transition-all ease-out shadow-md bg-gradient-to-r from-green-600 to-green-900 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300">
      Sign in
    </button>

  )
}