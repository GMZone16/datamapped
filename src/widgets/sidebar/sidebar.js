"use client"
import { Comfortaa } from "next/font/google";
import "./sidebar.css";
import ListTopics from "@/processors/list_topic";
import Link from "next/link";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function TopicSelect() {
  function filterFunction() {
    const input = document.getElementById("search-input");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("search-results");
    const a = div.getElementsByTagName("a");
    if(filter == null || filter == "" ) {
      div.style.display = "hidden"
    } else {
      div.style.display = "show"
      for (let i = 0; i < a.length; i++) {
        const txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }
    
  }

  const dat = ListTopics()
  return (
    <div className="sidebar">
        <a href="/" className="sidebar-title">DataMapped</a>
        <div className="search-container">
            <input type="text" id="search-input" placeholder="Search" onKeyUp={filterFunction}/>
            <ul id="search-results" className="search-results-list">
              {dat.map((e) => {
               return <li key={e.link}><a href={e.link}>{e.title} ({e.source})</a></li>
              })}
                </ul>
        </div>
    </div>
  );
}
