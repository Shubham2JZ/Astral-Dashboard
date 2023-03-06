import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import axios from "axios";
import {
  getHeatMapData,
  stateProjection,
  getRandomInt150to200,
} from "./common/utilsForMap";
import INDIA_MAP from "../public/json/India.topo.json";
import "./map.css";
import INDIA_MAP_2 from "../public/json/india-districts.json";

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
    fill: "#999",
    transition: "all 250ms",
    outline: "none",
    // strokeWidth: 2,
  },
  pressed: {
    outline: "none",
  },
};

const Map = () => {
  const [data, setData] = useState(getHeatMapData());
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const stateRef = useRef();

  const projectionConfigForIndia = {
    scale: 450,
    center: [83, 24],
  };

  const handleMapClick = async (geo) => {
    setSelectedState(geo.properties.name);
  };

  return (
    <div className="map-box">
      {isZoomed ? (
        <ComposableMap
          projectionConfig={stateProjection(selectedState)}
          projection="geoMercator"
          width={300}
          height={290}
          viewBox={"0 0 300 290"}
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
                      stroke="#666"
                      strokeWidth="0.5"
                      strokeOpacity="0.2"
                      fill="#fff"
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
          width={300}
          height={290}
          viewBox={"0 0 300 290"}
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
                    fill="#fff"
                    style={geographyStyle}
                    onClick={() => handleMapClick(geo)}
                  />
                );
              });
            }}
          </Geographies>
        </ComposableMap>
      )}
    </div>
  );
};

export default Map;

const IndiaMap = ({
  projection,
  geography,
  isStateMap = false,
  data,
  selectedState,
  stateRef,
  handleMapClick,
}) => {
  return (
    <ComposableMap
      projectionConfig={projection}
      projection="geoMercator"
      width={300}
      height={290}
      viewBox={"0 0 300 290"}
    >
      <Geographies geography={geography} className="geographies">
        {({ geographies }) => {
          let a = geographies;
          if (isStateMap === true) {
            a = geographies.filter((n) => n.properties.st_nm === selectedState);
          }
          return a.map((geo) => {
            const current = isStateMap
              ? a.find((s) => s.district === geo.properties.district)
              : data.find((s) => s.id === geo.id);
            return (
              <Geography
                ref={isStateMap ? null : stateRef}
                key={geo.rsmKey}
                geography={geo}
                stroke="#666"
                strokeWidth="0.5"
                strokeOpacity="0.2"
                fill="#fff"
                style={geographyStyle}
                onClick={() => {
                  if (!isStateMap) handleMapClick(geo);
                }}
              />
            );
          });
        }}
      </Geographies>
    </ComposableMap>
  );
};
