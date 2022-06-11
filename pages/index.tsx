import Link from "next/link";
import axios from "axios";

import styles from "./index.module.css";
import type {Song} from "../types/Song";

export async function getStaticProps() {
  const { data } = await axios.get("https://acnhapi.com/v1/songs/");

  return {
    props: {
      songs: data
    }
  };
}

export default function Home({ songs }: {songs: Song[]}) {
  return (
      <div className={styles.root}>
        <h1>Homepage</h1>
        <p>Page description</p>
      </div>
  );
}