import { Comfortaa } from "next/font/google";
import "./sidebar.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function TopicSelect(){
    const categories = [
        "All categories",
    "Demography", 
    "Economy", 
    "Environmental",
    "Health",
    "Education",
    "Social Development"
    ];

    const sources = [
        "All sources",
    "World Bank", 
    "IMF", 
    "Unicef",
    ];
    return <div className="topic-select">
        <select>
            {
                categories.map((e) => {
                    return <option key={e} value={e}>{e}</option>
                })
            }
        </select>
        <select>
            {
                sources.map((e) => {
                    return <option key={e} value={e}>{e}</option>
                })
            }
        </select>
        <hr />
        <input className="search-topic" placeholder="Search topic"/>
    </div>
}