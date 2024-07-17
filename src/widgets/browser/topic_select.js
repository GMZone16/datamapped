import { Comfortaa } from "next/font/google";
import "./topic_select.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function TopicSelect(){
    const categories = [
        "All",
    "Demography", 
    "Economy", 
    "Environmental",
    "Health",
    "Education",
    "Social Development"
    ];
    const metrics = ["Any", ];
    return <div className="topic-select">
        <div className="category-select">
            <p className="category-text">Category:&nbsp;&nbsp;</p>
        <select name="category" style={comfortaa.style}>
            {
                categories.map((e) => {
                return <option key={e} value={e}>{e}</option>
                })
            }
        </select>
        </div>
        <div className="metric-select">
            <p className="category-text">Metric:&nbsp;&nbsp;</p>
        <select name="category" style={comfortaa.style}>
            {
                categories.map((e) => {
                return <option key={e} value={e}>{e}</option>
                })
            }
        </select>
        </div>
        <div className="hr"/>
        <div className="search-topic" >
            <input placeholder="Search topic" style={comfortaa.style}/>
        </div>
    </div>
}