import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-center">
            <header className="m-1 flex bg-black/40 backdrop-blur-lg shadow-lg text-white w-72 rounded saturate-0 p-2 flex-row align-middle">
                <img src="/kkslider.jpg" alt="kkslider" className="rounded-full h-10 w-10"/>
                <Link href="../" >
                    <a className="self-center mx-1 hover:text-zinc-300">Home</a>
                </Link>
                <Link href="songs" >
                    <a className="self-center mx-1 hover:text-zinc-300">Songs</a>
                </Link>
                <Link href="" >
                    <a className="self-center mx-1 hover:text-zinc-300">Contact</a>
                </Link>
                <Link href="terms-of-service" >
                    <a className="self-center mx-1 hover:text-zinc-300">Infos</a>
                </Link>
            </header>
        </div>
    )
}