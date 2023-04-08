import { HTMLMotionProps, motion } from "framer-motion";

function Card({
  open,
  title,
  subtitle,
  color,
  ...rest
}: {
  open: boolean;
  title: string;
  subtitle: string;
  color: string;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      layout
      className={
        `flex flex-col content-start items-start cursor-pointer overflow-hidden p-4` +
        (open
          ? ` p-8 rounded-2xl ${color}`
          : ` mx-4 bg-zinc-900 text-zinc-500 rounded-lg`)
      }
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
        className={"font-sans" + (open ? " font-sans opacity-60" : "")}
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

export default Card;
