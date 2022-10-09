import { useSession, signIn, signOut } from "next-auth/react";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const { data: session } = useSession();
  
  let loginButton;
  let form;
  if (!session) {
    loginButton = <button onClick={() => signIn()} className="px-3 py-1 text-white bg-black rounded-full">Sign in</button>
    form =
      <div className="mt-16 text-center">
        <p>Please signed in first</p>
        <button onClick={() => signIn()} className="px-3 py-1 text-white bg-black rounded-full">Sign in</button>
      </div>
  }
  else {
    loginButton = <div><p>Hi, {session.user!.name}</p> <button onClick={() => signOut()} className="px-3 py-1 text-white bg-black rounded-full">Sign out</button></div>
    form = 
      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-4 col-start-2">
          <form className="">
            <div className="px-3 mb-6 md:flex md:items-center">
              <div className="w-1/4">
                <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0">
                  Title
                </label>
              </div>
              <div className="w-3/4">
                <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none" id="inline-full-name" type="text"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      
  }

  const formRef = useRef<null | HTMLDivElement>(null); 
  const scroll = () => formRef.current!.scrollIntoView({behavior: "smooth"});

  return (
    <div className="h-max bg-amber-50">
      <div className="grid grid-cols-6 gap-4">
        <div className="px-3 py-3 font-noto">
          {loginButton}
        </div>
        <div className="items-center justify-center col-span-4 col-start-2 mt-10">
          <h1 className="text-5xl text-center font-noto">Purdue Hackers' Wishlist. &nbsp;
          <FontAwesomeIcon
            icon={faChessKnight}
            style={{ fontSize: 50}}
          />
          </h1>
          <div className="flex-grow border-t-2 border-black"></div>
          <div className="flex items-center justify-center w-full mt-5">
            <button onClick={scroll} className="px-5 py-2 text-white bg-black rounded-full">Start An Idea</button>
          </div>
          <div className="flex items-center justify-center w-full mt-2">
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{ fontSize: 25}}
              className="animate-bounce"
            />
          </div>
          <img className="mx-auto mt-5 w-96" src="typewriter.png"></img>
          <div className="mt-4 mb-12 bg-white rounded-md min-h-fit h-96 drop-shadow-lg font-noto" ref={formRef}>
            <h3 className="pt-5 text-lg tracking-wide text-center">Help us build Purdue Hackers</h3>
            {form}
          </div>
        </div>
      </div>
    </div>
  );
}
