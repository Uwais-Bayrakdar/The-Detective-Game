import { useState } from "react";
import { people } from "../../game-info/people";
import { useNavigate } from "react-router-dom";

export function GuessingRoom() {
    const thief = localStorage.getItem("thiefIndex") || -1;
    const [selectedThief, setSelectedThief] = useState("0");
    const [result, setResult] = useState("");
    const [submitBtnClicked, setSubmitBtnClicked] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
      const guessedIndex = Number(selectedThief);

      if (guessedIndex === Number(thief)) {
        setResult("✅ Correct! You caught the thief.");
        setSubmitBtnClicked(true);
      } else {
        setResult(`❌ Wrong! The thief was ${people[Number(thief)].name}.`);
        setSubmitBtnClicked(true);
      }

    }

    function backHome() {
      navigate("/");
    }
    
    return (
        <>
          <h1>GUESSING ROOM</h1>
          <select name="select-thief" className="select-thief" value={selectedThief} onChange={e => {setSelectedThief(e.target.value)}}>
            {people.map(person => (
                <option key={person.id} value={person.id}>{person.name}</option>
            ))}
          </select>
          {!submitBtnClicked && <button className="submit-answer" onClick={handleClick}>Submit Answer</button>}
          {result && <div className="result-msg-back-btn-div">
              <p className="result-msg">{result}</p>
              <button className="go-back-btn" onClick={backHome}>Go Back Home</button>
            </div>
          }
        </>
    )
}