import type {AppProps} from 'next/app'
import '../styles/globals.css'
import {AnimatePresence, motion} from "framer-motion";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div key="app" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="content">
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    )
}

export default MyApp