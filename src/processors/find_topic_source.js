import dataMap from "/public/data.json"

export default function FindTopicSource (path) {
    const data = dataMap;
    var output = {source: "", topic: ""}
    
    for (const source of data.sources) {
        for (const item of source.data) {
            if (item.path === path) {
                output = { source: source.source, topic: item.title };
        return output; 
            }
        }
    }
    return output
}