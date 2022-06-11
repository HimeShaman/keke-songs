import Link from "next/link";
import axios from "axios";

import styles from "../index.module.css";
import type {Song} from "../../types/Song";

export async function getStaticProps() {
  const { data } = await axios.get("https://acnhapi.com/v1/songs/");

  const newData = Object.values(data)

  return {
    props: {
      songs: newData
    }
  };
}

export default function Home({ songs }: {songs: Song[]}) {
  return (
      <div className={styles.root}>
        {songs.map(res => <div>{res.id}</div>)}
      </div>
  );
}