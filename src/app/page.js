import Image from "next/image";
import WorldMap from "../widgets/world-map/world_map";
import styles from "./page.module.css";
import Navbar from "@/widgets/navbar/navbar";
import TopicSelect from "@/widgets/sidebar/sidebar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className="main-view">
        <div className="sidebar">
          <TopicSelect />
        </div>
        <div className="content">
          <WorldMap />
        </div>
      </div>
    </main>
  );
}
