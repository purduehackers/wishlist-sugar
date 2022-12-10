import IWish from "../utils/interfaces/IWish";

interface IWishlistProps {
  fetchedWishes: IWish[];
}

const Wishlist = ({ fetchedWishes }: IWishlistProps) => {
  console.log(fetchedWishes);
  return (
    <div className="">
      <div className="border-2 border-dashed rounded border-slate-700">
        <div className="p-5">
          <h1 className="text-lg text-center font-noto ">
            Wishes from wonderful people
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
