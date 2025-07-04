import { RenderCards } from "./RenderCards"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { hintsCases } from "../../game-info/hints";
import { useGame } from "../GameContext";
import type { HintObject } from "../GameContext";

let shuffledHints: HintObject[];
let thief: number;

export function HomeRoom() {
    const navigate = useNavigate();
    const { setThiefIndex, setSelectedCase } = useGame();

    useEffect(() => {

      const storedThief = localStorage.getItem("thiefIndex");
      const storedCase = localStorage.getItem("hintsCase");

      if (storedThief && storedCase) {
        setThiefIndex(Number(storedThief));
        setSelectedCase(JSON.parse(storedCase));
        localStorage.removeItem("hintsCase");
        localStorage.removeItem("thiefIndex"); 
      } else {
        const randomHintIndex = Math.floor(Math.random() * hintsCases.length);
        const originalCase = hintsCases[randomHintIndex];
        const theLieHintObj = originalCase.find(obj => obj.isLie === true);
        if (!theLieHintObj) return;

        shuffledHints = [...originalCase].sort(() => Math.random() - 0.5);

        thief = shuffledHints.findIndex(obj => obj === theLieHintObj);

        setSelectedCase(shuffledHints);
        setThiefIndex(thief); 
      }
    }, []);


    function handleClick() {
        navigate('/guessing-room');
        localStorage.setItem("hintsCase", JSON.stringify(shuffledHints));
        localStorage.setItem("thiefIndex", JSON.stringify(thief));
    }

    return (
        <div className="home-container">
          <h1>Detective Game</h1>
          <RenderCards/>
          <div className="btns">
            <button onClick={handleClick} className="goto-guessing-room-btn">Go to guessing room</button>
            <button onClick={() => window.location.reload()} className="restart-btn">Restart</button>
          </div>
        </div>
    )
}