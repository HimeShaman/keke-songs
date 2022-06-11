import axios from "axios";
import type {SongCard, Song} from "../../../types/Song";
import type {GetStaticProps} from "../../../types/default";

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

export default function SongCard({ id, song }: SongCard) {

    return (
        <div>
            <h2>{song["file-name"]}</h2>
            <audio controls>
                <source src={'https://acnhapi.com/v1/music/' + id}  />
            </audio>
        <div>
        </div>
        </div>
);
}