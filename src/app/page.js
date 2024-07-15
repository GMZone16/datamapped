import Image from "next/image";
import WorldMap from "@/widgets/world-map/world_map";
import styles from "./page.module.css";
import Navbar from "@/widgets/navbar/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <WorldMap />
    </main>
  );
}
