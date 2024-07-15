"use client"
import { ReactSVG } from "react-svg";
import "./world_map.css";
import WorldMapSVGFile from "./svg_file";
import { useEffect, useState } from "react";


export default function WorldMap () {
   const [width, setWidth] = useState(0); // Initial width set to 0
  const [height, setHeight] = useState(0); // Initial height set to 0

  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth < 400) {
         setWidth(window.innerWidth * 1);
         
        console.log("mobile");
      } else if (window.innerWidth < 800) {
         setWidth(window.innerWidth * 1.5);
         console.log("tablet");
      } else if (window.innerWidth < 1200){
         setWidth(window.innerWidth * 1);
         console.log("laptop");
      } else {
         setWidth(window.innerWidth * 0.7);
         console.log("Desktop")
      }
      setHeight(window.innerHeight);
   };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
   return <div className="world-map"><WorldMapSVGFile height={height} width={width}/></div>
 
}