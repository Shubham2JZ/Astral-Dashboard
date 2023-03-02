import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import axios from "axios";
import {
  getHeatMapData,
  colors,
  stateProjection,
  getAchievedTargetData,
  getRandomInt150to200,
} from "./common/utilsForMap";
import INDIA_MAP from "../public/json/India.topo.json";
import "./map.css";
import INDIA_MAP_2 from "../public/json/india-districts.json";

const projectionConfigForIndia = {
  scale: 450,
  center: [82, 25],
};

// Random Gujarat Data
const a = INDIA_MAP_2.objects["india-districts-2019-734"].geometries
  .filter((n) => n.properties.st_nm === "Gujarat")
  .map((n) => n.properties.district)
  .map((n) => ({ district: n, value: getRandomInt150to200() }));

const geographyStyle = {
  default: {
    outline: "none",
    transition: "all 250ms",
  },
  hover: {
    fill: "#333",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

const Map = () => {
  console.log(window.innerHeight);
  const [data, setData] = useState(getHeatMapData());
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const stateRef = useRef();

  const colorScale = scaleQuantile()
    .domain(
      data.map((d) => getAchievedTargetData(d.data.achievement, d.data.target))
    )
    .range(colors);

  const colorScaleStates = scaleQuantile()
    .domain(a.map((d) => d.value))
    .range(colors);

  const handleMapClick = async (geo) => {
    await setIsZoomed(true);
    await setSelectedState(geo.properties.name);
    const path = stateRef;
    console.log(path);
  };

  return (
    <>
      {" "}
      {isZoomed ? (
        <ComposableMap
          projectionConfig={stateProjection(selectedState)}
          projection="geoMercator"
          width={300}
          height={300}
          viewBox={"0 0 300 300"}
        >
          <Geographies geography={INDIA_MAP_2}>
            {({ geographies }) => {
              return geographies
                .filter((n) => n.properties.st_nm === selectedState)
                .map((geo) => {
                  const current = a.find(
                    (s) => s.district === geo.properties.district
                  );
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      stroke="#000"
                      strokeWidth="0.5"
                      strokeOpacity="1"
                      fill={current ? colorScaleStates(current.value) : "#eee"}
                      style={geographyStyle}
                    />
                  );
                });
            }}
          </Geographies>
        </ComposableMap>
      ) : (
        <ComposableMap
          projectionConfig={projectionConfigForIndia}
          projection="geoMercator"
          width={290}
          height={290}
          viewBox={"0 20 300 300"}
        >
          <Geographies geography={INDIA_MAP} className="geographies">
            {({ geographies }) => {
              return geographies.map((geo) => {
                const current = data.find((s) => s.id === geo.id);
                return (
                  <Geography
                    ref={stateRef}
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="#666"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                    fill="#fff  "
                    style={geographyStyle}
                    onClick={() => handleMapClick(geo)}
                  />
                );
              });
            }}
          </Geographies>
        </ComposableMap>
      )}
    </>
  );
};

export default Map;
