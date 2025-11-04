import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#F08080")}
            className='outline-none px-4 py-1  
          rounded-full text-white shadowlg'
            style={{ backgroundColor: "#F08080" }}>Coral</button>
          <button
            onClick={() => setColor("#dbae5cff")}
            className='outline-none px-4 py-1  
          rounded-full text-white shadowlg'
            style={{ backgroundColor: "#dbae5cff" }}>Light Brown</button>
          <button
            onClick={() => setColor("#90EE90")}
            className='outline-none px-4 py-1  
          rounded-full text-white shadowlg'
            style={{ backgroundColor: "#90EE90" }}> Light Green</button>
          <button
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-1  
          rounded-full text-white shadowlg'
            style={{ backgroundColor: "orange" }}>Orange</button>
          <button
            onClick={() => setColor("pink")}
            className='outline-none px-4 py-1  
          rounded-full text-white shadowlg'
            style={{ backgroundColor: "Pink" }}>Pink</button>
          <button
            onClick={() => setColor("")}
            className='outline-none px-4 py-1  
          rounded-full text-white shadowlg'
            style={{ backgroundColor: "#D3D3D3" }}>Light Grey</button>
          <button
            onClick={() => setColor("#E6E6FA")}
            className='outline-none px-4 py-1  
          rounded-full text-white shadowlg'
            style={{ backgroundColor: "#E6E6FA" }}>Light Purple</button>
          <button
            onClick={() => setColor("#E0FFFF")}
            className='outline-none px-4 py-1  
          rounded-full text-white shadowlg'
            style={{ backgroundColor: "#E0FFFF" }}>Cyan</button>
        </div>
      </div>
    </div>
  )
}

export default App
