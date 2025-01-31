import React from 'react'
export default function Home() {
    const newReleases = [
      { name: "Rihanna", type: "singer" },
      { name: "S nejo", type: "Artist" },
      { name: "Rihanna", type: "singer" },
      { name: "Raizuok", type: "singer" },
      { name: "Niujuk", type: "singer" },
    ]
  
    const recentlyPlayed = [
      { title: "High is hope", artist: "Rhaima", duration: "5:32" },
      { title: "Shape of you", artist: "Ed sherpan", duration: "2:32" },
      { title: "All we know", artist: "Tr serti", duration: "3:32" },
      { title: "Shape of you", artist: "Ed sherpan", duration: "2:32" },
    ]
  
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
          <button className="bg-cyan-400 text-black px-8 py-2 rounded-full">Play</button>
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
                <div key={index} className="flex items-center bg-[#252B43] p-3 rounded-lg">
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
            <div className="bg-[#252B43] aspect-video rounded-lg"></div>
          </div>
        </div>
      </div>
    )
  }
  
  