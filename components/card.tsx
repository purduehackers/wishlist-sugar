import { useEffect } from 'react';
import { fetchWishes } from '../utils/fetchWishes';
import IWish from '../utils/interfaces/IWish';

interface ICardProps {
  wish: IWish;
}

const Card = ({ wish }: ICardProps) => {
  const expandCard = () => {
    const cardP = document.getElementById(`${wish['Title']}-p`);
    const card = document.getElementById(`${wish['Title']}-card`);
    if (cardP && card) {
      if (cardP.offsetHeight > 1000) {
        card.classList.add('row-span-6');
      } else if (card.offsetHeight > 840) {
        card.classList.add('row-span-5');
      } else if (card.offsetHeight > 680) {
        card.classList.add('row-span-4');
      } else if (card.offsetHeight > 520) {
        card.classList.add('row-span-3');
      } else if (card.offsetHeight > 360) {
        card.classList.add('row-span-2');
      }
    }
  };

  useEffect(() => {
    expandCard();
  });

  const date = new Date(wish['Date']);
  return (
    <div
      className="p-5 bg-white drop-shadow-lg font-noto"
      id={`${wish['Title']}-card`}
    >
      <p className="text-sm text-center">{date.toDateString()}</p>
      <h1 className="font-bold text-center capitalize">{wish['Title']}</h1>
      <p className="text-center" id={`${wish['Title']}-p`}>
        {wish['Details']}
      </p>
    </div>
  );
};

export default Card;
