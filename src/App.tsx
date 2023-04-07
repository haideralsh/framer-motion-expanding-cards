import { useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

function App() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <div className="p-8 grid auto-rows-min w-full gap-5">
      <h1 className="text-white text-6xl p-8">Arcade Lobby</h1>

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
        color="bg-[#52a9ff]"
        subtitle="A dungeon-crawling RPG where players create their own adventurer and explore dangerous underground labyrinths"
        onClick={() => {
          setOpenIndex(3);
        }}
        open={openIndex === 3}
      />
    </div>
  );
}

function Card({
  open,
  title,
  subtitle,
  color,
  ...rest
}: {
  open: boolean,
  title: string,
  subtitle: string,
  color: string
} & HTMLMotionProps<"div">) {
  let cardClasses = `flex flex-col content-start items-start cursor-pointer overflow-hidden p-4 rounded-xl`

  return (
    <motion.div
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      layout
      className={open ? cardClasses + ` p-8 rounded-2xl ${color}` : cardClasses + ` mx-4 bg-zinc-900 text-zinc-500`}
      {...rest}
    >
      <motion.h2
        className={open ? "text-3xl mb-1" : "text-2xl"}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        layout
      >
        {title}
      </motion.h2>
      <motion.p
        className={open ? "font-sans opacity-60" : "font-sans"}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        layout
      >
        {subtitle}
      </motion.p>

      {open && (
        <motion.button
          className="mt-8 ml-auto text-white bg-black rounded-full text-2xl px-12 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "ease", ease: "easeInOut", duration: 0.3 }}
          layout
        >
          Join Game
        </motion.button>
      )}
    </motion.div>
  );
}

export default App;
