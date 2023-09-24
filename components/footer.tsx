import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface IFooterProps {
  topScroll(): void;
}

const Footer = (props: IFooterProps) => {
  return (
    <div className="rotate-180">
      <div className="h-30 bg-neutral-700">
        <div className="grid grid-cols-6 gap-4">
          <div className="items-center justify-center col-span-4 col-start-2 mt-10">
            <h1 className="mt-10 text-5xl text-center text-white font-noto">
              Purdue Hackers&apos; Wishlist. &nbsp;
              <FontAwesomeIcon icon={faChessKnight} style={{ fontSize: 50 }} />
            </h1>
            <div className="flex-grow border-t-2 border-white"></div>
            <div className="flex items-center justify-center w-full mt-5">
              <button
                onClick={props.topScroll}
                className="px-5 py-2 text-black bg-white rounded-full"
              >
                Go Back Up
              </button>
            </div>
            <div className="flex items-center justify-center w-full mt-4 mb-4">
              <FontAwesomeIcon
                icon={faArrowDown}
                style={{ fontSize: 25 }}
                className="text-white animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
