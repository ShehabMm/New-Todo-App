import React, { useState } from "react";

export default function Todo() {
  const [task, settask] = useState(["study cs50", "study photoshop"]);
  const [complete, setcomplete] = useState("");
  const [isopen, setisopen] = useState(0);
  const [yes, setyes] = useState(false);

  return (
    <div className="flex flex-col gap-4 justify-center align-middle text-center">
      <h1 className="text-4xl font-bold mt-7">Welcome To Todos App</h1>

      <input
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            settask([...task, complete]);
            setcomplete("");
          }
        }}
        value={complete}
        className="m-auto py-3 px-6 rounded full border border-indigo-600 focus:ourline-none bg-transparent w-[20%]"
        type="text"
        onChange={(e) => {
          setcomplete(e.target.value);
        }}
      />

      {task
        .filter((i) => i != "")
        .map((item, index) => (
          <div
            className="flex flex-row justify-center gap-2 relative border-2 w-fit m-auto"
            key={index}
          >
            <h1 className="bg-slate-200 rounded w-80 p-5 text-center m-auto font-bold hover:cursor-pointer hover:scale-90 hover:duration-200 active:text-cyan-300 size-800  hover:bg-indigo-300 duration-300  ">
              {item}
            </h1>


            {  yes==true && (
              <input
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    settask([...task, complete]);
                    setcomplete("");
                  }
                }}
                value={complete}
                className="m-auto py-3 px-6 rounded full border border-indigo-600 focus:ourline-none bg-transparent w-[20%]"
                type="text"
                onChange={(e) => {
                  setcomplete(e.target.value);
                }}
              />
            )}














            <button
              className="absolute  right-2 top-5"
              onClick={() => {
                const newarr = task.filter((i) => item !== i);
                settask(newarr);
              }}
            >
              ❌
            </button>


            
            <button onClick={()=>{

const filteration = task.map((item,index)=>index!==index,task   )

            }}   className="absolute right-10 top-5">
              📝
            </button>

          </div>
        ))}

      <button
        className="bg-slate-500 w-[20%] text-white py-2 rounded-lg m-auto active:scale-90 duration-200"
        onClick={() => {
          settask([...task, complete]);
          setcomplete("");
        }}
      >
        add task
      </button>
    </div>
  );
}
