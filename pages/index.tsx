import Head from "next/head";
import Script from "next/script";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <div className="">
      <div className="grid min-h-screen grid-cols-6 gap-4 bg-amber-50">
        <div className="justify-center col-span-4 col-start-2 mt-10 flux">
          <h1 className="text-5xl text-center font-noto">Purdue Hackers' Wishlist. &nbsp;
          <FontAwesomeIcon
            icon={faChessKnight}
            style={{ fontSize: 50}}
          />
          </h1>
          <div className="flex-grow border-t-2 border-black"></div>
          <img className="items-center mx-auto mt-10 w-96" src="typewriter.png"></img>
          <div className="mt-4 mb-12 bg-white rounded-md drop-shadow-lg">
            <h3 className="min-h-full pt-5 text-lg tracking-wide text-center h-96 font-noto">Help us build Purdue Hackers</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
