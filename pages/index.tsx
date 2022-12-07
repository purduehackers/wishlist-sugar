import React, { useRef } from "react";
import Header from "../components/header";
import LogInOutButton from "../components/log-in-out-button";
import Form from '../components/form'
import Footer from '../components/footer'

export default function Home() {
  const formRef = useRef<null | HTMLDivElement>(null); 
  const formScroll = () => formRef.current!.scrollIntoView({behavior: "smooth"});

  const topRef = useRef<null | HTMLDivElement>(null); 
  const topScroll = () => topRef.current!.scrollIntoView({behavior: "smooth"});

  return (
    <div>
      <div className="h-max bg-amber-50">
        <div className="grid grid-cols-6 gap-4">
          <div className="px-3 py-3 font-noto">
            <LogInOutButton />
          </div>
          <div className="items-center justify-center col-span-4 col-start-2 mt-10" ref={topRef}>
            <Header formScroll={formScroll}/>
            <div className="pb-4 mt-4 mb-12 bg-white rounded-md min-h-100 h-fit drop-shadow-lg font-noto" ref={formRef}>
              <h3 className="px-4 pt-5 text-lg tracking-wide text-center">Help us build Purdue Hackers</h3>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <Footer topScroll={topScroll}/>
  </div>
  );
}
