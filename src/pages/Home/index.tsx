import GameBoard from "../../components/GameBoard";
import Hangaroo from "../../assets/Hangaroo.png";
import { useContext } from "react";
import { HangArooContext } from "../../store/gameContext";

const Home = () => {
  const { game } = useContext(HangArooContext);
  return (
    <div className="text-center bg-yellow-700 h-screen flex justify-center ">
      <div className="flex">
        <img
          src={Hangaroo}
          alt="Hangaroo"
          className="w-[300px] h-[600px] px-4"
        />
      </div>
      <div className="flex justify-center">
        <GameBoard />
      </div>
      <div className="flex text-white flex-col border border-white">
        <div className="flex">
          <p className="w-[200px] border-r-2 border-white">Guess Word</p>
          <p className="w-[200px]">Status</p>
        </div>
        {game.length > 0 &&
          game.map((game, index) => (
            <div key={index} className="flex border-2 border-white">
              <p className="w-[200px] border-r-2 border-white">{game.phrase}</p>
              <p className="w-[200px]">{game.status}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
