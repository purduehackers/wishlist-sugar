import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';

import Footer from '../components/footer';
import Form from '../components/form';
import Header from '../components/header';
import LogInOutButton from '../components/log-in-out-button';
import Wishlist from '../components/wishlist';
import { fetchWishes } from '../utils/fetchWishes';
import IWish from '../utils/interfaces/IWish';

interface HomeFetchedWishesProps {
  fetchedWishes: IWish[];
}

const Home: NextPage<HomeFetchedWishesProps> = () => {
  const formRef = useRef<null | HTMLDivElement>(null);
  const formScroll = () =>
    formRef.current!.scrollIntoView({ behavior: 'smooth' });

  const topRef = useRef<null | HTMLDivElement>(null);
  const topScroll = () =>
    topRef.current!.scrollIntoView({ behavior: 'smooth' });

  const [wishes, setWishes] = useState<IWish[]>([]);

  useEffect(() => {
    const callFetchedWishes = async () => {
      const fetchedWishes: IWish[] = await fetchWishes();
      setWishes(fetchedWishes);
    };

    callFetchedWishes();
  }, []);

  return (
    <div>
      <Head>
        <meta property="og:site_name" content="Purdue Hackers" />
        <meta property="og:name" content="Sugar — Purdue Hackers" />
        <meta property="og:title" content="Sugar — Purdue Hackers" />
        <meta
          property="og:image"
          content="https://og.purduehackers.com/Wishlist.png?theme=light&md=1&fontSize=250px&caption=Put%2520down%2520your%2520thoughts%21&images="
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content="Got any suggestions for Purdue Hackers? Write them down here! >w<"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <title>Sugar — Purdue Hackers</title>
      </Head>
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
                Help Us Build Purdue Hackers
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
