import {getStaticFileData} from "../lib/staticPage";
import {StaticFileData} from "../types/default";
import Header from "../components/header";

export async function getStaticProps({filename}: { filename: string }) {
    const staticFileData = await getStaticFileData("terms-of-service");

    return {
        props: {
            staticFileData
        }
    };
}

export default function TermsOfService({staticFileData}: { staticFileData: StaticFileData }) {
    return (
        <div>
            <Header/>
            <div className="flex flex-col my-5 mx-auto p-3 bg-white/40 backdrop-blur-lg rounded drop-shadow-lg w-5/6">
                <h1 className="text-3xl font-bold text-black">{staticFileData.title}</h1>
                <div dangerouslySetInnerHTML={{__html: staticFileData.contentHtml}}/>
            </div>
        </div>
    );
}