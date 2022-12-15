import React, { useRef, useContext, createContext, useState } from "react";
import { GetStaticProps, NextPage } from "next";

import Header from "../components/header";
import LogInOutButton from "../components/log-in-out-button";
import Form from "../components/form";
import Wishlist from "../components/wishlist";
import Footer from "../components/footer";
import IWish from "../utils/interfaces/IWish";
import { fetchWishes } from "../utils/fetchWishes";

interface HomeFetchedWishesProps {
  fetchedWishes: IWish[];
}

const Home: NextPage<HomeFetchedWishesProps> = ({ fetchedWishes }) => {
  const formRef = useRef<null | HTMLDivElement>(null);
  const formScroll = () =>
    formRef.current!.scrollIntoView({ behavior: "smooth" });

  const topRef = useRef<null | HTMLDivElement>(null);
  const topScroll = () =>
    topRef.current!.scrollIntoView({ behavior: "smooth" });

  const [wishes, setWishes] = useState(fetchedWishes);

  return (
    <div>
      <div className="h-max bg-amber-50">
        <div className="grid grid-cols-6 gap-4">
          <div className="px-3 py-3 font-noto">
            <LogInOutButton />
          </div>
          <div
            className="items-center justify-center col-span-4 col-start-2 mt-10"
            ref={topRef}
          >
            <Header formScroll={formScroll} />
            <div
              className="pb-4 mt-4 mb-12 bg-white rounded-md min-h-100 h-fit drop-shadow-lg font-noto"
              ref={formRef}
            >
              <h3 className="px-4 pt-5 text-lg tracking-wide text-center">
                Help us build Purdue Hackers
              </h3>
              <Form setWishes={setWishes} />
            </div>
            <Wishlist wishes={wishes}></Wishlist>
          </div>
        </div>
      </div>
      <Footer topScroll={topScroll} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fetchedWishes: IWish[] = await fetchWishes();
  return {
    props: {
      fetchedWishes: JSON.parse(JSON.stringify(fetchedWishes)),
    },
    revalidate: 60,
  };
};

export default Home;
