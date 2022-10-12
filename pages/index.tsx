import { useSession, signIn, signOut } from "next-auth/react";
import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface FormState {
  title: string;
  details: string;
}

export default function Home() {
  const { data: session } = useSession();
  const [inputs, setInputs] = useState<FormState>({
    title: "",
    details: "",
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    setInputs({
      ...inputs,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
  }
  
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
      <div>
        <form onSubmit={handleSubmit}>
          <label>Idea title:</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
          ></input>
          <br />
          <label>Idea Details:</label>
          <br />
          <textarea 
            name="details"
            onChange={handleChange}
          />
          <br />
          <button type="submit">submit</button>
        </form>
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
