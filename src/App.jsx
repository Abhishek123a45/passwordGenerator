import { useState } from 'react'


function App() {

  const [bgColor, setBgColor] = useState("white");
  
  return (
    <>
      <div className="colorContainer flex place-items-end  px-7 w-full h-screen" style={{backgroundColor: bgColor}}> 
        <div className="color w-full flex justify-between mb-7">

          <button className='px-12 py-5  focus:outline-none focus:ring focus:ring-violet-300' style={{backgroundColor:"red"}}
           onClick={()=>setBgColor("red")}>
            Red
          </button>

          <button className='px-12 py-5 focus:outline-none focus:ring focus:ring-violet-300' style={{backgroundColor:"blue"}}
          onClick={()=>setBgColor("blue")}>
            Blue
          </button>

          <button className='px-12 py-5  focus:outline-none focus:ring focus:ring-violet-300' style={{backgroundColor:"green"}}
          onClick={()=>setBgColor("green")}>
            Green
          </button>

          <button className='px-12 py-5  focus:outline-none focus:ring focus:ring-violet-300' style={{backgroundColor:"purple"}}
          onClick={()=>setBgColor("purple")}>
            Purple
          </button>

        </div>
      </div>
    </>
  );
}

export default App
