import { people } from "../../game-info/people";
import { Card } from "./card";
import { useGame } from "../GameContext";

export function RenderCards() {
  const {selectedCase} = useGame();

  if (!selectedCase || selectedCase.length !== people.length) {
    return <p>Loading cards...</p>;
  }

  return (
    <div className="cards-div">
      {people.map((person, index) => (
        <Card
          key={person.id}
          image={person.image}
          name={person.name}
          hint={selectedCase[index].message}
        />
      ))}
    </div>
  );
}