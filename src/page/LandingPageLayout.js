import React, { useState } from "react";
import Map from "../components/Map";
import ScoreManage from "../components/ScoreManage";

const LandingPageLayout = () => {
  const [citychosen, setCitychosen] = useState({
    name: "",
    position: { latitude: 0, longitude: 0 },
  });
  const [curscore, setCurscore] = useState(0);
  const [curpoint, setCurpoint] = useState(1500);
  const [playable, setPlayable] = useState(true);
  const [level,setLevel] = useState(0);

console.log(level)
 

  console.log(curpoint);
  return ( <div className="h-full">
      <div className="w-full h-50 text-zinc-800 text-center bg-slate-100 p-5 ">
          <h1 className="font-bold m-3 ">The Map Game</h1>
     <h1 className="text-sm"> How well do you know the world map? Guess the cities only by looking at country borders and name. Each correct identification will take you to the next level.The distance of mis-identified city will be deducted from initial points of 1500. Game will be over as soon as it becomes 0.</h1>
      </div>
      <div className="flex h-screen  ">
        <ScoreManage
          setCitychosen={setCitychosen}
          curpoint={curpoint}
          curscore={curscore}
          level={level}
          setLevel={setLevel}
          setCurscore={setCurscore}
          setCurpoint={setCurpoint}
        />
        <div className="rounded-md p-3 flex-auto m-2 w-96 bg-slate-500">
          <Map
        
            citychosen={citychosen}
            curpoint={curpoint}
            curscore={curscore}
            setscore={setCurscore}
            setpoint={setCurpoint}
            level={level}
            setLevel={setLevel}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageLayout;
