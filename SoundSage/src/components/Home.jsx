import React from "react";
import { useState } from "react";
const cards = ["Card 1", "Card 2", "Card 3", "Card 4"];

export default function Home() {
  const newReleases = [
    { name: "Rihanna", type: "singer" },
    { name: "S nejo", type: "Artist" },
    { name: "Rihanna", type: "singer" },
    { name: "Raizuok", type: "singer" },
    { name: "Niujuk", type: "singer" },
    { name: "Niujuk", type: "singer" },
  ];

  const recentlyPlayed = [
    { title: "High is hope", artist: "Rhaima", duration: "5:32" },
    { title: "Shape of you", artist: "Ed sherpan", duration: "2:32" },
    { title: "All we know", artist: "Tr serti", duration: "3:32" },
    { title: "Shape of you", artist: "Ed sherpan", duration: "2:32" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex-1 bg-[#1A1F33] p-8 overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Enter Keywords"
            className="w-full bg-[#252B43] text-[#8B96B9] px-4 py-2 rounded-lg"
          />
        </div>
      </div>

      <div className="mb-12">
        <h1 className="text-white text-5xl font-bold mb-4">This Weekend</h1>
        <p className="text-[#8B96B9] mb-4">
          As I was walkin' down the road to Bethlehem one night
          <br />I looked up to the sky and there .
        </p>
        <button
          id="playbutton"
          className="bg-cyan-500 text-black px-4 py-2 rounded-md font-semibold cursor-pointer"
        >
          Play
        </button>
      </div>

      <div className="mb-12">
        <h2 className="text-white text-xl mb-4">New Releases</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {newReleases.map((artist, index) => (
            <div key={index} className="flex-none w-48">
              <div className="w-full h-48 bg-[#252B43] rounded-lg mb-2"></div>
              <h3 className="text-white">{artist.name}</h3>
              <p className="text-[#8B96B9] text-sm">{artist.type}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-white text-xl mb-4">New played</h2>
          <div className="space-y-2">
            {recentlyPlayed.map((song, index) => (
              <div
                key={index}
                className="flex items-center bg-[#252B43] p-3 rounded-lg"
              >
                <div className="w-10 h-10 bg-gray-600 rounded mr-3"></div>
                <div className="flex-1">
                  <div className="text-white">{song.title}</div>
                  <div className="text-[#8B96B9] text-sm">{song.artist}</div>
                </div>
                <div className="text-[#8B96B9]">{song.duration}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-white text-xl mb-4">Popular songs</h2>
          <div className="relative w-full mx-auto bg-[#252B43] aspect-video rounded-lg">
            <div className="relative flex items-center justify-center bg-[#252B43] aspect-video rounded-lg text-white text-lg font-bold transition-all duration-500">
              {cards[currentIndex]}
            </div>

            {/* Left Arrow */}
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer  rounded-full text-white"
              onClick={prevCard}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Right Arrow */}
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer rounded-full text-white"
              onClick={nextCard}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
