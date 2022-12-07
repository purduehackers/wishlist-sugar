import { useSession, signIn, signOut } from "next-auth/react";
import React, { useRef, useState } from "react";

interface FormState {
  title: string;
  details: string;
}

const Form = () => {
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch('/api/table', {
      method: 'POST',
      body: JSON.stringify({inputs}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setInputs({
      title: "",
      details: ""
    })
  }

  if (session) {
    return (
      <div>
        <form onSubmit={handleSubmit} className="px-20">
          <label>Idea title:</label>
          <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            className="w-full notes focus:outline-none"
          ></input>
          <br />
          <label className="pt-3 leading-9">Idea Details:</label>
          <br className=""/>
          <textarea 
            name="details"
            value={inputs.details}
            onChange={handleChange}
            className="w-full rounded outline-none resize-none h-52 notes"
          />
          <br />
          <button type="submit" className="px-3 py-1 text-white bg-black rounded-full">submit</button>
          <div className="text-slate-700">Sugar is typing...</div>
        </form>
      </div>
    )
  }

  return (
    <div className="mt-16 text-center">
      <p>Please signed in first</p>
      <button onClick={() => signIn()} className="px-3 py-1 text-white bg-black rounded-full">Sign in</button>
    </div>
  )
}

export default Form;