import { useState } from "react"

function App() {

  const [length, setLength]=useState(0);

  

  return (
  <>
  <div className="h-screen width-screen flex flex-col justify-center items-center gap-10">
    <div className="shadow-lg bg-gradient-to-r from-gray-700 to-gray-400 text-white w-fit p-1 rounded-full">
      <p>Character Counter</p>
    </div>
    <div className="relative flex text-white bg-[#1b1b1b] align-baseline p-10 w-1/2 justify-center items-center rounded-3xl font-mono">
    <div className="absolute top-22 w-full h-2 z-10 border border-black bg-black"></div>
     <p className="text-[220px] font-bold items-baseline">{length}
     <span className="text-[80px] font-bold ml-2">.ch</span>
     </p>
    </div>
    <div className="flex flex-col w-1/2 gap-3 items-start">
    <p className="font-bold text-xl">Your Text</p>
    <input type="text"  className="border-gray-400 border w-full rounded-lg min-h-[200px] p-2 text-center" 
    onChange={(e)=>{
      setLength(e.target.value.length)
    }} 
    placeholder="Type your text here"
    />
    <p>Your number of characters will be shown above.</p>
    </div>
   </div>
  </>
  )
}

export default App


