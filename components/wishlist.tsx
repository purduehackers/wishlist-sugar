import IWish from "../utils/interfaces/IWish";
import Card from "./card";

interface IWishlistProps {
  fetchedWishes: IWish[];
}

const Wishlist = ({ fetchedWishes }: IWishlistProps) => {
  return (
    <div className="">
      <div className="mb-12 border-2 border-dashed rounded border-slate-700">
        <div className="p-5">
          <h1 className="pb-4 text-lg text-center font-noto">
            Wishes from Wonderful Hackers
          </h1>
          <div className="grid grid-flow-col grid-cols-3 gap-4">
            {fetchedWishes.map((wish) => {
              return <Card key={wish.title} wish={wish} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
