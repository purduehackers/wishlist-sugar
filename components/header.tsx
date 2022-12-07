import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface IHeaderProps {
  formScroll(): void;
}

const Header = (props: IHeaderProps) => {
  return (
    <div>
      <h1 className="text-5xl text-center font-noto">Purdue Hackers&apos; Wishlist. &nbsp;
      <FontAwesomeIcon
        icon={faChessKnight}
        style={{ fontSize: 50}}
      />
      </h1>
      <div className="flex-grow border-t-2 border-black"></div>
      <div className="flex items-center justify-center w-full mt-5">
        <button onClick={props.formScroll} className="px-5 py-2 text-white bg-black rounded-full">Start An Idea</button>
      </div>
      <div className="flex items-center justify-center w-full mt-2">
        <FontAwesomeIcon
          icon={faArrowDown}
          style={{ fontSize: 25}}
          className="animate-bounce"
        />
      </div>
      <img className="mx-auto mt-5 w-96" src="typewriter.png"></img>
    </div>
  )
}

export default Header;