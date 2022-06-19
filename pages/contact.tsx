import Header from "../components/header";
import {useForm, ValidationError} from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("xlezvpaa");

    if (state.succeeded) {
        return (
            <div>
                <Header/>
                <div className="flex flex-col my-5 mx-auto p-3 md:p-5 lg:px-10 bg-white/40 backdrop-blur-lg rounded drop-shadow-lg w-full md:w-3/4 lg:w-1/2 xl:w-2/5">
                    <h1 className="text-3xl font-bold text-black">Contact</h1>
                    <p>Thank you for messaging us ! We will reach back to you ASAP.</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Header/>
            <div className="flex flex-col my-5 mx-auto p-3 md:p-5 lg:px-10 bg-white/40 backdrop-blur-lg rounded drop-shadow-lg w-full md:w-3/4 lg:w-1/2 xl:w-2/5">
                <h1 className="text-3xl font-bold text-black">Contact</h1>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="email" className="text-sm text-zinc-500">Email Address</label>
                    <input id="email" type="email" name="email" required className="rounded text-zinc-600"/>
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500"/>

                    <label htmlFor="message" className="text-sm text-zinc-500">Message</label>
                    <textarea id="message" name="message" required className="rounded text-zinc-600"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500"/>
                    <button type="submit" className="flex w-20 h-10 rounded bg-zinc-400 text-white self-center justify-center items-center hover:bg-zinc-300 hover:text-black transition-colors ease-in-out duration-300 m-5" disabled={state.submitting}>
                        Submit
                    </button>
                    <ValidationError errors={state.errors} className="text-red-500"/>
                </form>

            </div>
        </div>
    )
}