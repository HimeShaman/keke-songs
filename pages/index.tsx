import {StaticFileData} from "../types/default";
import {getStaticFileData} from "../lib/staticPage";
import Link from "next/link";
import Header from "../components/header";
import {motion} from "framer-motion";

export async function getStaticProps({filename}: { filename: string }) {
    const staticFileData = await getStaticFileData("homepage");

    return {
        props: {
            staticFileData
        }
    };
}

export default function Home({staticFileData}: { staticFileData: StaticFileData }) {
    return (
        <div className="">
            <motion.div>
                <Header/>
                <div
                    className="flex flex-col my-5 mx-auto p-3 bg-white/40 backdrop-blur-lg rounded drop-shadow-lg w-full md:w-3/4 lg:w-1/2 xl:w-3/5">
                    <p>{staticFileData.teasing}</p>
                    <h1 className="text-3xl font-bold text-black">{staticFileData.title}</h1>
                    <Link href="songs">
                        <a className="flex w-20 h-10 rounded bg-zinc-400 text-white self-center justify-center items-center hover:bg-zinc-300 hover:text-black transition-colors ease-in-out duration-300 m-5">{staticFileData.callToAction}</a>
                    </Link>
                    <div dangerouslySetInnerHTML={{__html: staticFileData.contentHtml}}/>
                </div>
            </motion.div>
        </div>
    );
}