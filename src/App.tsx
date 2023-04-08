import { useState } from "react";
import Card from "./Card";

function App() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <div className="p-8 grid auto-rows-min w-full gap-5 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-white text-6xl p-8 text-center">Arcade Lobby</h1>

      <Card
        title="Mystic Realms"
        color="bg-[#25d0ab]"
        subtitle=" A fantasy adventure game where players explore a mystical world full of magic and danger"
        onClick={() => {
          setOpenIndex(1);
        }}
        open={openIndex === 1}
      />

      <Card
        title="Galactic Conquest"
        subtitle="A sci-fi strategy game where players command their own interstellar empire"
        color="bg-[#ff7054]"
        onClick={() => {
          setOpenIndex(2);
        }}
        open={openIndex === 2}
      />

      <Card
        title="Dungeon Delve"
        color="bg-[#00c2d7]"
        subtitle="A dungeon-crawling RPG where players create their own adventurer and explore dangerous underground labyrinths"
        onClick={() => {
          setOpenIndex(3);
        }}
        open={openIndex === 3}
      />
    </div>
  );
}

export default App;
