"use client";
import React, { useState, useEffect } from "react";

const alphabetAndNumbers = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  " ",
];

function Word_finder({ text }) {
  const wordCount = text.split("");
  const initialDisplay = wordCount.map(() => " "); // Initial display as "A"

  const [words, setWords] = useState(initialDisplay);
  const [alphaAndNumIndex, setAlphaAndNumIndex] = useState(0);
  const [remainingChars, setRemainingChars] = useState(
    wordCount.map((_, index) => index)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingChars.length === 0) {
        clearInterval(interval);
        return;
      }

      const newWords = [...words];
      const currentIndex = remainingChars[0];

      // Check if the character at currentIndex matches
      if (
        newWords[currentIndex].toLowerCase() ===
        wordCount[currentIndex].toLowerCase()
      ) {
        remainingChars.shift(); // Remove the matched index
      } else {
        newWords[currentIndex] = alphabetAndNumbers[alphaAndNumIndex];
        setAlphaAndNumIndex((prev) => (prev + 1) % alphabetAndNumbers.length);
      }

      setWords(newWords);

      // Check for completion
      if (text.toLowerCase() === newWords.join("").toLowerCase()) {
        clearInterval(interval);
      }
    }, 200); // Run every 200ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [remainingChars, alphaAndNumIndex, text, words]);

  return <span>{words.join("")}</span>;
}

export default Word_finder;
