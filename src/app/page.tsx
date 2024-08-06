"use client";
import { useState } from 'react'

export default function Home() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-start w-full md:w-2/3 bg-gray-50 py-4">
        <img 
          src="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1"
          alt="Example"
        />
      </div>
      <div className="flex flex-row w-full md:w-2/3 bg-gray-50 items-end">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">VideoDubber - Fast Video Translator</h1>
          <h3 className="text-2xl mt-4 font-extralight">Translate videos in your own voice, globalize <br /> in a click!</h3>
        </div>
        <div className="flex ml-8">
          <button type="button" className=" text-black border border-gray-300 hover:border-orange-400 font-medium rounded-md text-sm px-5 py-5 text-center me-2 ">Visit</button>
          {
            !clicked ? (
            <button onClick={handleClick} className="px-20 py-5 w-56 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 bg-red-400 ml-1 relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-white group hover:bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white">
              UPVOTE
            </button>
            ) : (
              <button onClick={handleClick} className="px-20 py-5 w-56 border border-orange-400  transition-all ease-in duration-75  rounded-md   ml-1 relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-black ">
              UPVOTED
            </button>
            )
          }
        </div>
      </div>
    </div>
  );
}
