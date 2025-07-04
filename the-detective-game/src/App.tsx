import { Routes, Route } from "react-router-dom";
import { HomeRoom } from "./components/Home Room/Home-Room";
import { GuessingRoom } from "./components/Guessing Room/Guessing-Room";
import { GameProvider } from "./components/GameContext";

function App() {
  return (
    <GameProvider>
      <Routes>
        <Route path="/" element={<HomeRoom />} />
        <Route path="/guessing-room" element={<GuessingRoom />} />
      </Routes>
    </GameProvider>
  );
}

export default App;
