import Head from "next/head";
import Script from "next/script";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div className="">
      <div className="grid min-h-screen grid-cols-6 gap-4 bg-amber-50">
        <div className="items-center justify-center col-span-4 col-start-2 mt-10">
          <h1 className="text-5xl text-center font-noto">Purdue Hackers' Wishlist. &nbsp;
          <FontAwesomeIcon
            icon={faChessKnight}
            style={{ fontSize: 50}}
          />
          </h1>
          <div className="flex-grow border-t-2 border-black"></div>
          <div className="flex items-center justify-center w-full mt-5">
            <button className="px-5 py-2 text-white bg-black rounded-full">Start An Idea</button>
          </div>
          <div className="flex items-center justify-center w-full mt-2 animate-bounce">
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{ fontSize: 25}}
            />
          </div>
          <img className="mx-auto mt-5 w-96" src="typewriter.png"></img>
          <div className="mt-4 mb-12 bg-white rounded-md drop-shadow-lg">
            <h3 className="min-h-full pt-5 text-lg tracking-wide text-center h-96 font-noto">Help us build Purdue Hackers</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
