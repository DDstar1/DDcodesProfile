"use client";
import React, { useState, useEffect } from "react";

// List of alphabets and numbers for Word_finder
const alphabetAndNumbers = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3",
  "4", "5", "6", "7", "8", "9", " ",
];

// Skeleton component with Tailwind opacity, animation, and transition
// Skeleton component using text visibility with animated background
const SkeletonLoader = ({ text, isVisible }) => {
  return (
    <span
      className={`relative inline-block bg-gray-200 text-transparent rounded-3xl transition-opacity duration-500 ease-in-out overflow-hidden ${
        isVisible ? "opacity-30" : "opacity-0"
      }`}
    >
      {/* Render the text but make it transparent */}
      {text}

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
    </span>
  );
};

// Word Finder with Skeleton loader
function Word_finder_v2({ text }) {
  const wordCount = text.split("");
  const initialDisplay = wordCount.map(() => " ");

  const [words, setWords] = useState(initialDisplay);
  const [alphaAndNumIndex, setAlphaAndNumIndex] = useState(0);
  const [loading, setLoading] = useState(true); // State for loading

  // Simulate loading effect
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // 1s delay for skeleton loading
    return () => clearTimeout(timeout);
  }, []);

  // Word-finding animation effect
  useEffect(() => {
    if (loading) return; // Skip the word-finding animation if still loading

    const interval = setInterval(() => {
      const newWords = wordCount.map((char, index) => {
        return char.toLowerCase() === words[index].toLowerCase()
          ? char
          : alphabetAndNumbers[alphaAndNumIndex];
      });

      setWords(newWords);

      if (text.toLowerCase() === newWords.join("").toLowerCase()) {
        clearInterval(interval);
      }

      setAlphaAndNumIndex((prev) => (prev + 1) % alphabetAndNumbers.length);
    }, 20); // Update every 20ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [alphaAndNumIndex, text, words, loading]);

  return (
    <span className="transition-all duration-1000 max-h-9">
      {loading ? (
        <SkeletonLoader text={text} isVisible={loading} />
      ) : (
        words.join("")
      )}
    </span>
  );
}

export default Word_finder_v2;
