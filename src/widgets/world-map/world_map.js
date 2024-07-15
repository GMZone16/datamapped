"use client"
import { ReactSVG } from "react-svg";
import "./world_map.css";
import WorldMapSVGFile from "./svg_file";
import { useEffect, useState } from "react";


export default function WorldMap () {
   return <div className="world-map"><WorldMapSVGFile/></div>
 
}