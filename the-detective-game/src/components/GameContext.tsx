import { createContext, useContext, useState, type ReactNode } from "react";

export type HintObject = {
  message: string;
  isLie: boolean;
};

type GameContextType = {
  thiefIndex: number;
  setThiefIndex: (index: number) => void;
  selectedCase: HintObject[] | null;
  setSelectedCase: (caseData: HintObject[]) => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};

export function GameProvider({ children }: { children: ReactNode }) {
  const [selectedCase, setSelectedCase] = useState<HintObject[]>([]);

  const [thiefIndex, setThiefIndex] = useState<number>(0);


  return (
    <GameContext.Provider
      value={{ thiefIndex, setThiefIndex, selectedCase, setSelectedCase }}
    >
      {children}
    </GameContext.Provider>
  );
}

