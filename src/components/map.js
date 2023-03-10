import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import {
  getHeatMapData,
  stateProjection,
  getRandomInt150to200,
} from "./common/utilsForMap";
import geographyIndia from "../public/json/India.topo.json";
import "./map.css";
import geographyStates from "../public/json/india-districts.json";
import DropDown from "./common/dropdown";

// Random Gujarat Data
const a = geographyStates.objects["india-districts-2019-734"].geometries
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

const granuralityOptions = [
  "Monthly",
  "Quarterly",
  "Half Yearly",
  "Yearly",
  "Weekly",
];

const Map = () => {
  const [data, setData] = useState(getHeatMapData());
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const stateRef = useRef();

  useEffect(() => {
    console.log(selectedState);
  }, [selectedState]);

  const projectionConfigForIndia = {
    scale: 450,
    center: [83, 24],
  };

  const handleMapClick = async (geo) => {
    setSelectedState(geo.properties.name);
    // setIsZoomed(true);
  };

  return (
    <div className="map-box">
      {isZoomed ? (
        <IndiaMap
          projection={stateProjection(selectedState)}
          geography={geographyStates}
          isStateMap={true}
          data={data}
          selectedState={selectedState}
        />
      ) : (
        <IndiaMap
          projection={projectionConfigForIndia}
          geography={geographyIndia}
          data={data}
          selectedState={selectedState}
          stateRef={stateRef}
          handleMapClick={handleMapClick}
        />
      )}
      <div className="map-state-dropdown ">
        <span>Select State</span>
        <DropDown options={granuralityOptions} width={10} bold={false} />
      </div>
      <div className="map-state-details border-shadow">
        <div className="map-state-details-name bold">INDIA</div>
        <div className="map-state-details-statedetails">
          <div>
            <span>No. of Districts</span>
            <span>1</span>
          </div>
          <div>
            <span>No. of Districts</span>
            <span>1</span>
          </div>
          <div>
            <span>No. of Districts</span>
            <span>1</span>
          </div>
          <div>
            <span>No. of Districts</span>
            <span>1</span>
          </div>
        </div>
      </div>
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
  stateRef = null,
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
                ref={stateRef}
                key={geo.rsmKey}
                geography={geo}
                stroke="#666"
                strokeWidth="0.5"
                strokeOpacity="0.2"
                fill="#fff"
                style={geographyStyle}
                onClick={() => {
                  if (!isStateMap) handleMapClick(geo);
                  else return;
                }}
              />
            );
          });
        }}
      </Geographies>
    </ComposableMap>
  );
};
