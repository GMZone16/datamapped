import Image from "next/image";
import WorldMap from "@/widgets/world_map";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <WorldMap />
    </main>
  );
}
