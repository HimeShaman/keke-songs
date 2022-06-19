import {Song} from "../types/Song";
import Link from "next/link";
import {motion} from "framer-motion";

export default function SongCard({song}: { song: Song }) {
    return (
        <div>
            <motion.div
                transition={{duration: 0.2, ease: "easeInOut"}}
                whileHover={{scale: 1.05}}
                viewport={{once: true}}
            >
                <Link href={`/songs/${song.id}`}>
                    <div className="flex flex-col text-white bg-white/40 hover:bg-white/50 backdrop-blur-lg rounded drop-shadow-lg
        w-60 md:w-48 h-64 p-4 saturate-0 hover:saturate-100 cursor-pointer hover:shadow-white/50 red-500 hover:shadow-lg">
                        <img src={song.image_uri} alt={song.name["name-EUfr"]}
                             className="w-32 h-32 rounded-lg shadow-lg self-center mb-4"/>
                        <p className="text-zinc-800">{song.name["name-JPja"]}</p>
                        <h2 className="text-black">{song.name["name-EUen"]}</h2>
                        <p className="text-black">Physical release:
                            <span className={song.isOrderable ? "text-emerald-800" : "text-amber-800"}>
                        {song.isOrderable ? " Yes" : " Soon"}
                    </span>
                        </p>
                    </div>
                </Link>
            </motion.div>
        </div>
    )
}