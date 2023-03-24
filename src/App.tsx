import { useState } from 'react'
import './App.css'
import { HTMLMotionProps, motion } from "framer-motion";

function App() {
  const [openIndex, setOpenIndex] = useState(1)

  return (
    <div>
      <h1>Arcade Lobby</h1>

      <div className="App">
        <Card
          title="Mystic Realms"
          subtitle=" A fantasy adventure game where players explore a mystical world full of magic and danger."
          onClick={() => { setOpenIndex(1) }}
          open={openIndex === 1} />

        <Card
          title="Galactic Conquest"
          subtitle="A sci-fi strategy game where players command their own interstellar empire."
          onClick={() => { setOpenIndex(2) }}
          open={openIndex === 2} />

        <Card
          title="Dungeon Delve"
          subtitle="A dungeon-crawling RPG where players create their own adventurer and explore dangerous underground labyrinths."
          onClick={() => { setOpenIndex(3) }}
          open={openIndex === 3} />
      </div>
    </div>
  )
}

function Card({ open, title, subtitle, ...rest }: { open: boolean; title: string; subtitle: string } & HTMLMotionProps<"div">) {
  return <motion.div
    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
    layout
    className={open ? "card open-card" : "card closed-card"}
    {...rest}>

    <motion.h2
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      layout>{title}
    </motion.h2>
    <motion.p
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      layout>{subtitle}
    </motion.p>

    {open && (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "ease", ease: "easeInOut", duration: 0.3 }}
        layout>Join Game
      </motion.button>
    )}
  </motion.div>
}

export default App
