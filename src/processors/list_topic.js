import dataMap from "/public/data.json"

export default function ListTopics () {
    const data = dataMap;
    const topics = []
    for(let i = 0; i <data['sources'].length; i++) {
        for(let a = 0; a < data['sources'][i]['data'].length; a++){
            topics.push({"title": data['sources'][i]['data'][a]["title"], "source": data['sources'][i]['source'], link: data['sources'][i]['data'][a]["path"]})
        }
    }
    return topics;
}