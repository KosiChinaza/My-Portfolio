
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";

const collaborators = [
  {
    initials: "PU",
    name: "PATRIC U.",
    role: "CEO — NUPAT TECHNOLOGY",
    comment: "A very smart and hardworking developer, eager to learn and ready to work.",
  },
  {
    initials: "OA",
    name: "Ox Ahmed.",
    role: "Team Lead HashFi Group",
    comment: "I highly recommend her if you want to work with someone with an innovative mindset and have great result.",
  },
  {
    initials: "CD",
    name: "Cheta David",
    role: "Blockchain Developer — web3",
    comment:
      "Kosi got the potential from day one. Fast learner, easy going, clean build — always active.",
  },
  {
    initials: "CD",
    name: "Chimezie D.",
    role: "Auto Dealership",
    comment:
      "She is one of my best staff, with her I always know I am getting the best result.",
  },
  {
    initials: "SO",
    name: "Stephanie O.",
    role: "UI/UX — Web3",
    comment: "Clean code, good communication, team spirited. Will always love to work with her.",
  },
];

export default function Collaborators() {
  const controls = useAnimation();

  
  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"], 
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse", 
          duration: 25, 
          ease: "linear",
        },
      },
    });
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="min-h-[90vh] bg-gradient-to-r from-black via-purple-900 to-black py-16 text-white overflow-hidden flex flex-col justify-center"
      aria-label="Trusted by Early Collaborators"
    >
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white">
        Trusted by Early Collaborators
      </h2>

      <div className="relative w-full">
        <motion.div
          className="flex gap-6 items-stretch"
          animate={controls}
          // pause on hover (desktop)
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() => startAnimation()}
          // enable touch to pause (mobile)
          onTouchStart={() => controls.stop()}
          onTouchEnd={() => startAnimation()}
        >
          {[...collaborators, ...collaborators].map((person, index) => (
            <article
              key={index}
              className="flex-shrink-0 w-[80%] sm:w-[47%] md:w-[32%] lg:w-[24%] bg-[#0b0b0d] border border-purple-700/40 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-purple-600 to-purple-400 text-black font-bold rounded-full w-12 h-12 flex items-center justify-center">
                  {person.initials}
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-lg">{person.name}</h3>
                  <p className="text-purple-200/70 text-sm">{person.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">“{person.comment}”</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
