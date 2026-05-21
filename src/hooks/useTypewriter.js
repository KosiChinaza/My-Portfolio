import { useState, useEffect } from "react";

/**
 * Cycles through an array of words with a typewriter + delete effect.
 * @param {string[]} words - Words to cycle through
 * @param {number} speed - Typing speed in ms (default 100)
 * @param {number} deleteSpeed - Deleting speed in ms (default 60)
 * @param {number} pause - Pause before deleting in ms (default 1800)
 * @returns {string} Currently displayed text
 */
export function useTypewriter(words, speed = 100, deleteSpeed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setCharIndex(0);
          setWordIndex((w) => (w + 1) % words.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, deleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, deleteSpeed, pause]);

  return display;
}
