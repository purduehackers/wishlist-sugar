import { useEffect, useContext } from 'react';
import IWish from '../utils/interfaces/IWish';
import Card from './card';

interface IWishlistProps {
  wishes: IWish[];
}

const Wishlist = ({ wishes }: IWishlistProps) => {
  return (
    <div className="">
      <div className="mb-12 border-2 border-dashed rounded border-slate-700">
        <div className="p-2">
          <h1 className="pb-4 text-lg text-center font-noto">
            Wishes from Wonderful Hackers
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {wishes.map((wish) => {
              return <Card key={wish['Title']} wish={wish} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
