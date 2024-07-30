"use client"
import "./world_map.css";
import WorldMapSVGFile from "./svg_file";
import { useRef, useState } from "react";
import { SvgPanZoom } from 'react-zoom-pan';

const WorldMap = () => {
   const svgRef = useRef(null);
   const [currentHoveredCountry, setCurrentHoveredCountry] = useState(null);
  
 
   return <div className="world-map">
        <WorldMapSVGFile
          setHover={setCurrentHoveredCountry}
          hoverRef={currentHoveredCountry}
          svgRef={svgRef}
        />
      <div className="zoom-ctn">
        <button className="zoom-btn" onClick={()=> {}}>+</button>
        <button className="zoom-btn" onClick={() => {}}>-</button>
      </div>
      {currentHoveredCountry && (
        <div className="hovering">Hovering over: {currentHoveredCountry}</div>
      )}
      </div>
 
}

export default WorldMap;