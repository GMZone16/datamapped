import ListTopics from "@/processors/list_topic";
import WorldMap from "../world-map/world_map";
import "./main_view.css";
import React from "react";


export default function MainView({selectedTopic, selectedSource}){
  const [searchBarVisible, setSearchBarVisible] = React.useState(false)

  function filterFunction() {
    const input = document.getElementById("search-input");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("search-results");
    const a = div.getElementsByTagName("a");
    if(filter == null || filter == "" ) {
      console.log("display")
      console.log(div.style.display)
      div.style.display = "none"
    } else {
      div.style.display = "block"
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
    
    function toggleSearchBarVisible() {
      const visible = !searchBarVisible;
      setSearchBarVisible(!searchBarVisible)
      const div = document.getElementById("search-input");
      const div1 = document.getElementById("search-results");
      if (visible) {
        div.style.display = "block"
      } else {
        div.style.display = "none"
        div1.style.display = "none"
      }
    }

    React.useEffect(() => {
      filterFunction()
    }, [])
    return (
        <div>
          
            <div className="top-bar">
                <button className="search-btn" onClick={toggleSearchBarVisible}>
                  {
                    searchBarVisible ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                  </svg> :<svg xmlns="http://www.w3.org/2000/svg"width="26" height="26" fill="#000" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                  }
                  
                </button>
                <div className="search-container">
                    <input type="text" id="search-input" autoComplete={false} placeholder="Search" onKeyUp={filterFunction}/>
                    <ul id="search-results" className="search-results-list">
                    {dat.map((e) => {
                    return <li key={e.link}><a href={e.link}>{e.title} ({e.source})</a></li>
                    })}
                    </ul>
                </div>
                <div className="title">
                    <b>{selectedTopic}</b> <span className="source-title">{selectedSource}</span>
                </div>
            </div>
            <br />
         <WorldMap />
        </div>
    )
}