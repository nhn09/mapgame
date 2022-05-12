import React, { useState } from "react";
import Levels from "./Levels";

const ScoreManage = ({
  level,
  setLevel,
  setCitychosen,
  curpoint,
  curscore,
  setCurscore,
          setCurpoint
}) => {
  const welcome = `Welcome to map game.
    
    `;

  const allCities = {
    cities: [
      {
        name: "Amsterdam",
        position: {
          lat: 52.370216,
          lng: 4.895168,
        },
      },
      {
        name: "Rome",
        position: {
          lat: 41.902783,
          lng: 12.496366,
        },
      },
      {
        name: "Helsenki",
        position: {
          lat: 60.169856,
          lng: 24.938379,
        },
      },
      {
        name: "Stockholm",
        position: {
          lat: 59.329323,
          lng: 18.068581,
        },
      },
      {
        name: "London",
        position: {
          lat: 51.507351,
          lng: -0.127758,
        },
      },
      {
        name: "Oslo",
        position: {
          lat: 59.913869,
          lng: 10.752245,
        },
      },
      {
        name: "Paris",
        position: {
          lat: 48.856614,
          lng: 2.352222,
        },
      },
      {
        name: "Wien",
        position: {
          lat: 48.208174,
          lng: 16.373819,
        },
      },
      {
        name: "Budapest",
        position: {
          lat: 47.497912,
          lng: 19.040235,
        },
      },
    ],
  };
 

  const cityPicked = (level) => {
    setCitychosen(allCities.cities[level]);
  };

  const Refresh =()=>{
      setLevel(0)
      setCitychosen(allCities.cities[level])
      setCurpoint(1500)
      setCurscore(0)
      
  }


  return (
    <div className="rounded-md p-3 flex-auto m-2 w-40 bg-slate-500">
      <h1 className="text-zinc-50 my-3 ">{welcome}</h1>
     {/* <h1 className="text-xs">Initial points : 1500.</h1> */}
      <h1 className="text-sm">Correct Location Found : {curscore}</h1>
      <h1 className="text-sm">Points left: {curpoint}</h1>
      <div className=" font-thin my-3 text-zinc-50">Current Level:{level}</div>
      <div>
        <Levels
          currentCity={() => {
            cityPicked(level);
          }}
          nameofcity={allCities.cities[level].name}
        />

       {level>0 && <button onClick={Refresh} >Restart</button>} 
       
      </div>
    </div>
  );
};

export default ScoreManage;
