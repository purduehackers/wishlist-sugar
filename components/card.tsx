import { useEffect } from "react";
import { fetchWishes } from "../utils/fetchWishes";
import IWish from "../utils/interfaces/IWish";

interface ICardProps {
  wish: IWish;
}

const Card = ({ wish }: ICardProps) => {
  const expandCard = () => {
    const card = document.getElementById(wish.title);
    if (card != undefined) {
      if (card.offsetHeight > 1000) {
        card.classList.add("row-span-6");
      } else if (card.offsetHeight > 840) {
        card.classList.add("row-span-5");
      } else if (card.offsetHeight > 680) {
        card.classList.add("row-span-4");
      } else if (card.offsetHeight > 520) {
        card.classList.add("row-span-3");
      } else if (card.offsetHeight > 360) {
        card.classList.add("row-span-2");
      }
    }
  };

  useEffect(() => {
    expandCard();
  });

  const date = new Date(wish.date);
  return (
    <div className="p-5 bg-white drop-shadow-lg font-noto" id={wish.title}>
      <p className="text-sm text-center">{date.toDateString()}</p>
      <h1 className="font-bold text-center capitalize">{wish.title}</h1>
      <p className="text-center">{wish.details}</p>
    </div>
  );
};

export default Card;
