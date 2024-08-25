import { Comfortaa } from "next/font/google";
import "./sidebar.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function TopicSelect(){
    const categories = [
    "Select category",
    "Demography", 
    "Economy", 
    "Environmental",
    "Social Development"
    ];

    const sources = [
        "Select source",
    "World Bank", 
    "IMF", 
    "Unicef",
    ];

    const topics = [
        "Select topic",
        "Population",
        "Population Density",
        "GDP",
        "GDP per Capita",

    ];

    const visualization = [
        "Default visualization",
        "World Map",
        "Pie Chart",
        "Bar Graph"
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
        <select >
        {
                topics.map((e) => {
                    return <option key={e} value={e}>{e}</option>
                })
            }
        </select>
        <div className="or">
            or
        </div>
        <form>
            <input list="topic-search" className="topic-search"placeholder="Search topic" />
            <datalist id="topic-search">
        <option value="Gryfindor" />
        <option value="Hufflepuff" />
        <option value="Slytherin" />
        <option value="Ravenclaw" />
        <option value="Horned Serpent" />
        <option value="Thunderbird" />
        <option value="Pukwudgie" />
        <option value="Wampus" />

        </datalist>
        </form>
    </div>
}