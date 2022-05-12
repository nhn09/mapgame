import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import { getDistance } from "geolib";



const FindCityLocation = (
  e,
  citychosen,
  setscore,
  setpoint,
  curpoint,
  curscore,
  setLevel,
  level
) => {
  let clickedLoaction = e.latLng.toJSON();
  let clicklat = clickedLoaction.lat;
  let clicklng = clickedLoaction.lng;

  if (citychosen.position.latitude == 0)
    alert(`Press the play button to start the game`);
  else {
    let distance = getDistance(
      citychosen.position,
      { latitude: clicklat, longitude: clicklng },
      100
    );
    let finalDistance = Math.round(distance / 1000); // converting it to kilo meters

    citychosen.position.latitude = 0;

    let temp = curpoint;

    if (temp < 1) {
      alert(`game over!`);
    }

    console.log(`its current reserve:${curpoint}`);
    console.log(`its current distance:${finalDistance}`);

    if (finalDistance > 50 && finalDistance < 1500) {
      if (curpoint < finalDistance) {
        alert(`game over!`);
        setpoint(0);
        setLevel(0)
        return;
      }
      setpoint(curpoint - finalDistance);
      alert(`You missed it!`);
    } else if (finalDistance > 1500) {
      alert(`its way to far :( `);
    } else {
      let temp = curscore;
      setscore(temp + 1);
      alert(`You did it!`);
      setLevel(level+1);
    }
  }
};



const Map = ({
  center,
  zoom,
  citychosen,
  setscore,
  setpoint,
  curpoint,
  curscore,
  level,
  setLevel,
}) => {
  const [position, setPosition] = useState({ lat: -25.363, lng: 131.044 });

  console.log(citychosen.position);

  return (
    <LoadScript
      mapIds={["34646c4e5d7a5077"]}
      googleMapsApiKey="AIzaSyC5o3KBy9aA46KfS0F3jgwneVHgNqB9Z-c"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={OPTIONS}
        center={center}
        zoom={5}
        onClick={(e) =>
          FindCityLocation(
            e,
  citychosen,
  setscore,
  setpoint,
  curpoint,
  curscore,
  setLevel,
  level
          )
        }
      >
        <Marker  position={{
          lat: 52.370216,
          lng: 4.895168,
        }} 
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        zIndex={100}
        visible={true}/>
      </GoogleMap>
    </LoadScript>
  );
};

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "15px",
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 10,
  mapId: "34646c4e5d7a5077",
};

Map.defaultProps = {
  center: { lat: 54.526, lng: 15.2551 },
  zoom: 6,
};

export default Map;
