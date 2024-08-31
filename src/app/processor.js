"use client"
import React from "react";
import styles from "./page.module.css";
import WorldMap from "@/widgets/world-map/world_map";
import MainView from "@/widgets/main-view/main_view";
import FindTopicSource from "@/processors/find_topic_source";

export default function Processor({params}) {
  const information = FindTopicSource(`/${params.source}/${params.data}`)
  return (<main className={styles.main}>
      <div className="main-view">
       
        <div className="content">
          <MainView selectedTopic={information.topic} selectedSource={information.source}/>
        </div>
      </div>
    </main>)
}