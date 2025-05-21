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
      <div className="text-white border border-white w-fit mx-auto h-fit mt-6 rounded-md overflow-hidden">
        <div className="flex bg-white bg-opacity-10 font-semibold">
          <p className="w-[200px] border-r border-white text-black px-4 py-2 text-center">
            Guess Word
          </p>
          <p className="w-[200px] px-4 py-2 text-black text-center">Status</p>
        </div>

        {game.length > 0 &&
          game.map((item, index) => (
            <div key={index} className="flex border-t border-white">
              <p className="w-[200px] border-r border-white px-4 py-2 text-center">
                {item.phrase}
              </p>
              <p className="w-[200px] px-4 py-2 text-center">{item.status}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
