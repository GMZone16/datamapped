"use client"
import { ReactSVG } from "react-svg";
import "./world_map.css";
import WorldMapSVGFile from "./svg_file";
import { useEffect, useRef, useState } from "react";
import svgPanZoom, { zoomOut } from "svg-pan-zoom"; 


export default function WorldMap () {
   const svgRef = useRef(null);
   const [currentHoveredCountry, setCurrentHoveredCountry] = useState(null);
  
 
   return <div className="world-map" onScroll={(e) => {
    console.log(e);
      zoomOut()

   }}>
      <WorldMapSVGFile setHover={setCurrentHoveredCountry} hoverRef={currentHoveredCountry} svgRef={svgRef}
      //  zoomIn={zoomIn} zoomOut={zoomOut}
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