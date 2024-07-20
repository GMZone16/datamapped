"use client"
import { ReactSVG } from "react-svg";
import "./world_map.css";
import WorldMapSVGFile from "./svg_file";
import { useEffect, useRef, useState } from "react";
import svgPanZoom, { zoomOut } from "svg-pan-zoom"; 


export default function WorldMap () {
   const svgRef = useRef(null);
   const [currentHoveredCountry, setCurrentHoveredCountry] = useState(null);
   const svgElement = document.getElementsByClassName("svg")
   const [svgScale, setSvgScale] = useState(1.0);

   function parser(scaleString) {
    const cleanedString = scaleString.replace('scale(', '').replace(')', '');

    return parseFloat(cleanedString);

   }
   const zoomIn = function () {
    console.log("Executing");
    if (svgRef.current) {
      const currScale = parser(svgRef.current.style.transform);
      if(svgScale<= 4.75) {
        svgRef.current.style.transform = `scale(${svgScale + 0.25})`;
        setSvgScale(svgScale + 0.25);
      } else if(svgScale<=5.0) {
        svgRef.current.style.transform = `scale(5.0)`;
        setSvgScale(5.0);
      }
    }
  };
  const zoomOut = function () {
    if (svgRef.current) {
      const currScale = parser(svgRef.current.style.transform);
      if(svgScale>= 1.25) {
        svgRef.current.style.transform = `scale(${svgScale - 0.25})`;
        setSvgScale(svgScale - 0.25);
      } else if(svgScale>=1.0) {
        svgRef.current.style.transform = `scale(1.0)`;
        setSvgScale(1.0);
      }
      
    }
  };

  useEffect(() => {
    if(svgRef.current) {
      svgRef.current.style.transform = `scale(${svgScale})`;
    }
  })
   return <div className="world-map" onScrollCapture={(e) => {
    if(svgRef.current.scrollTop > 1) {
      zoomOut()
   } else {
      zoomIn()
   }
   }}>
      <WorldMapSVGFile setHover={setCurrentHoveredCountry} hoverRef={currentHoveredCountry} svgRef={svgRef} zoomIn={zoomIn} zoomOut={zoomOut}/>
      <div className="zoom-ctn">
        <button className="zoom-btn" onClick={zoomIn}>+</button>
        <button className="zoom-btn" onClick={zoomOut}>-</button>
      </div>
      {currentHoveredCountry && (
        <div className="hovering">Hovering over: {currentHoveredCountry}</div>
      )}
      </div>
 
}