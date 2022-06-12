import axios from "axios";
import type {SongCardData, Song} from "../../../types/Song";
import type {GetStaticProps} from "../../../types/default";
import {motion} from "framer-motion";
import Header from "../../../components/header";

export async function getStaticPaths() {
    const { data } = await axios.get(
        `https://acnhapi.com/v1/songs/`
    );

    const newData: Song[] = Object.values(data)

    return {
        paths: newData.map(({ id }) => `/songs/${id}`),
        fallback: false
    };
}

export async function getStaticProps({ params }: GetStaticProps) {
    const { id } = params;

    const { data } = await axios.get(
        `https://acnhapi.com/v1/songs/${id}`
    );

    return {
        props: {
            id: id,
            song: data
        }
    };
}

export default function SongCard({id, song}: SongCardData) {

    return (
        <motion.div>
            <Header/>
            <div
                className="flex flex-col-reverse lg:flex-row bg-white/40 backdrop-blur-lg rounded drop-shadow-lg m-auto w-full sm:w-5/6 md:w-1/2 h-fit py-10 px-5 my-1 md:mx-auto md:my-10">
                <div className="w-full lg:1/3 lg:p-5">
                    <h2 className="text-xl font-bold mt-2">{song.name["name-EUen"]}</h2>
                    <p className="text-black">Original release name: <span
                        className="font-semibold">{song.name["name-JPja"]}</span></p>
                    <p className="text-black">New price: <span
                        className="font-semibold">{song["buy-price"] ?? "Unavailable"}</span></p>
                    <p className="text-black">Second-hand price: <span
                        className="font-semibold">{song["sell-price"] ? song["sell-price"] + " bells" : "Unavailable"}</span>
                    </p>
                </div>
                <div className="w-full lg:2/3">
                    <img src={song.image_uri} alt={song.name["name-EUen"]} className="w-full shadow-lg rounded-lg"/>
                    <audio controls className="w-full">
                        <source src={'https://acnhapi.com/v1/music/' + id}/>
                    </audio>
                </div>
            </div>
        </motion.div>
    );
}