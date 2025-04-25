/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import heroImage from "/Hero/pfp.png";
const Hero = () => {
const cvDownload = () => {
    const link = document.createElement("a");
    link.href = "MatejPalasCV.pdf";
    link.download = "Matej-Palas-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    };

  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
        <div className="flex flex-col items-center justify-center gap-10 text-white">
            <motion.div
                initial={{y: -50, opacity:0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}

            >
                <img src={heroImage} alt="Me" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all
                                                        duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1 hover:shadow-indigo-600 md:w-[350px]"/>
            </motion.div>

            <motion.div 
                initial={{y: -50, opacity:0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
                className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                    <h1 className="text-white bg-clip-text text-transparent text-4xl font-light md:text-7xl">Matej Palas</h1>
                    <h3 className="text-white bg-clip-text text-transparent text-2xl font-light md:text-3xl">Software Developer </h3>
                    <p className="md:text-base text-pretty text-sm text-gray-400">
                    Full-stack software engineer able to deliver seamless user experiences with data-driven intelligence and machine learning insight.</p>
            </motion.div>
            <motion.div
                initial={{y: -50, opacity:0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}

            >
                <button onClick={cvDownload}  className="cursor-pointer text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 
                            text-lg font-bold text-white shadow-lg shadow-indigo-700 trnsition-all
                            duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">
                    Get My CV
                </button>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero