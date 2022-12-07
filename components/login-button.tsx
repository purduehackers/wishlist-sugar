import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div></div>
    )
  }
  return (
    <button onClick={() => signIn()} className="px-3 py-1 text-white bg-black rounded-full">Sign in</button>
  )
}

export default LoginButton;