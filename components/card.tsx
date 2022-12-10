import { fetchWishes } from "../utils/fetchWishes";
import IWish from "../utils/interfaces/IWish";

interface ICardProps {
  wish: IWish;
}

const Card = ({ wish }: ICardProps) => {
  const date = new Date(wish.date);
  return (
    <div className="p-5 bg-white drop-shadow-lg font-noto">
      <p className="text-sm text-center">{date.toDateString()}</p>
      <h1 className="font-bold text-center capitalize">{wish.title}</h1>
      <p className="text-center">{wish.details}</p>
    </div>
  );
};

export default Card;
