import axios from "axios";

import type {Song} from "../../types/Song";
import SongCard from "../../components/song-card";
import Header from "../../components/header";
import { motion } from "framer-motion";

export async function getStaticProps() {
    const {data} = await axios.get("https://acnhapi.com/v1/songs/");

    const newData = Object.values(data)

    return {
        props: {
            songs: newData
        }
    };
}

export default function Home({songs}: { songs: Song[] }) {
    return (
        <div>
            <motion.div>
                <Header/>
                <div className="flex justify-center">
                    <div className="grid place-content-center
                grid grid-cols-1 gap-3
                sm:grid-cols-3 sm:gap-5
                lg:grid-cols-4 lg:gap-6">
                        {songs.map(res =>
                            <SongCard song={res} key={res.id}/>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}