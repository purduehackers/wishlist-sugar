import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import IWish from "../utils/interfaces/IWish";
import { fetchWishes } from "../utils/fetchWishes";

interface FormState {
  title: string;
  details: string;
}

interface IFormProps {
  setWishes: Dispatch<SetStateAction<IWish[]>>;
}

const Form = ({ setWishes }: IFormProps) => {
  const { data: session } = useSession();
  const [inputs, setInputs] = useState<FormState>({
    title: "",
    details: "",
  });
  const [typing, setTyping] = useState<boolean>(false);

  useEffect(() => {
    const removeTypingText = setTimeout(() => {
      setTyping(false);
    }, 500);

    return () => clearTimeout(removeTypingText);
  }, [inputs]);

  const handleChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.FormEvent<HTMLTextAreaElement>
  ) => {
    setInputs({
      ...inputs,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    setTyping(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("/api/table", {
      method: "POST",
      body: JSON.stringify({ inputs }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(async (res) => {
        setInputs({
          title: "",
          details: "",
        });

        console.log("test: " + res);
        // some time there is delay in the api, so fetch after one second
        // there might be a better way of doing this
        setTimeout(async () => {
          const fetchedWishes: IWish[] = await fetchWishes();
          setWishes(fetchedWishes);
        }, 50);
      });
  };

  if (session) {
    let typingText = "";
    if (typing) {
      typingText = "Sugar is typing...";
    }
    return (
      <div>
        <form onSubmit={handleSubmit} className="px-5">
          <label className="">Idea title:</label>
          <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            className="w-full notes focus:outline-none"
            required
          ></input>
          <br />
          <label className="pt-3 leading-9">Idea Details:</label>
          <br className="" />
          <textarea
            name="details"
            value={inputs.details}
            onChange={handleChange}
            className="w-full rounded outline-none resize-none h-52 notes"
            required
          />
          <br />
          <button
            type="submit"
            className="px-3 py-1 text-white bg-black rounded-full"
          >
            submit
          </button>
          <div className="pt-4 text-sm text-slate-700">{typingText}</div>
        </form>
      </div>
    );
  }

  return (
    <div className="mt-16 text-center">
      <p>Please signed in first</p>
      <button
        onClick={() => signIn()}
        className="px-3 py-1 text-white bg-black rounded-full"
      >
        Sign in
      </button>
    </div>
  );
};

export default Form;
