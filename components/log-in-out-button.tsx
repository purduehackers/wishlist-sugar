import { useSession, signIn, signOut } from "next-auth/react";

const LogInOutButton = () => {
  const { data: session } = useSession();
  if (session) {
    if (session.user) {
      return (
        <div><p>Hi, {session.user.name}</p> <button onClick={() => signOut()} className="px-3 py-1 text-white bg-black rounded-full">Sign out</button></div>
      )
    }
    return (
      <div><button onClick={() => signOut()} className="px-3 py-1 text-white bg-black rounded-full">Sign out</button></div>
    )
  }
  return (
    <button onClick={() => signIn()} className="px-3 py-1 text-white bg-black rounded-full">Sign in</button>
  )
}

export default LogInOutButton;