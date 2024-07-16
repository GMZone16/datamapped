"use client"
import { ReactSVG } from "react-svg";
import "./world_map.css";
import WorldMapSVGFile from "./svg_file";
import { useEffect, useState } from "react";


export default function WorldMap () {
   const [currentHoveredCountry, setCurrentHoveredCountry] = useState(null);
   return <div className="world-map">
      <WorldMapSVGFile setHover={setCurrentHoveredCountry} hoverRef={currentHoveredCountry} />
      {currentHoveredCountry && (
        <div className="hovering">Hovering over: {currentHoveredCountry}</div>
      )}
      </div>
 
}