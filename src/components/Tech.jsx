/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import frontendImage from "/Tech/frontend.png";
import backendImage from "/Tech/backend.png";
import aiImage from "/Tech/AI.png";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="px-10 flex min-h-[70vh] w-full flex-col 
                items-center justify-center gap-16
                md:gap-32 
                "
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-lignt text-white gap-10 p-5"
      >
        Experience
      </motion.h1>

      <div className="flex flex-col md:flex-row text-white gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0, ease: "easeInOut" }}
          className="bg-gray-900/60 max-w-full md:max-w-1/3 text-justify mb-12 px-6 py-6  rounded-xl transition-all
                                                        duration-300 hover:-translate-y-5 hover:scale-105 
                                                        border-2 border-indigo-600"
        >
          <div className="flex justify-center">
            <img
              src={frontendImage}
              alt="frontend"
              className="w-[200px] mb-8"
            />
          </div>
          <h2 className="text-center text-2xl font-semibold mb-16">Frontend</h2>
          <p className="mb-8">
          I specialize in creating seamless, responsive, and accessible user interfaces using modern frontend technologies. 
          As people are visual creatures, it is crucial to choose the right approach and have a result that is pleasent
          to look at. 
          </p>
          <div className="flex flex-wrap justify-center py-2 px-2 gap-2">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://reactnative.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://reactnative.dev/img/header_logo.svg"
                  alt="reactnative"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                  alt="figma"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
          className="bg-gray-900/60 max-w-full md:max-w-1/3 text-justify mb-12 px-6 py-6  rounded-xl transition-all
                                                        duration-300 hover:-translate-y-5 hover:scale-105 
                                                        border-2 border-indigo-600"
        >
          <div className="flex justify-center">
            <img src={backendImage} alt="backend" className="w-[200px] mb-8" />
          </div>
          <h2 className="text-center text-2xl font-semibold  mb-16">Backend</h2>
          <p className="mb-8">
          From APIs to databases, I develop robust backend systems tailored to application needs. I prioritize clean architecture, optimized queries, and scalable deployments to support both startups and enterprise-level systems.
          </p>
          <div className="flex flex-wrap justify-center py-2 px-2 gap-2">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.cprogramming.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                  alt="c"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.w3schools.com/cpp/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                  alt="cplusplus"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.w3schools.com/cs/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                  alt="csharp"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a href="https://www.java.com" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                  alt="java"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a href="https://www.python.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://dotnet.microsoft.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
                  alt="dotnet"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a href="https://spring.io/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                  alt="spring"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.postgresql.org"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.sqlite.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
                  alt="sqlite"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.docker.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                  alt="docker"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://azure.microsoft.com/en-in/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
                  alt="azure"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a href="https://kubernetes.io" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
                  alt="kubernetes"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
          className="bg-gray-900/60 max-w-full md:max-w-1/3 text-justify mb-12 px-6 py-6 rounded-xl transition-all
                                                        duration-300 hover:-translate-y-5 hover:scale-105 
                                                        border-2 border-indigo-600"
        >
          <div className="flex justify-center mb-8">
            <img src={aiImage} alt="ai" className="w-[200px]" />
          </div>
          <h2 className="text-center text-2xl font-semibold  mb-16">AI & ML</h2>
          <p className="mb-8">
          With a deep interest in data-driven solutions, I develop ML models and AI applications that solve real-world problems—ranging from predictive analytics to natural language processing.
          </p>
          <div className="flex flex-wrap justify-center py-2 px-2 gap-2">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://pandas.pydata.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg"
                  alt="pandas"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 pt-2 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://scikit-learn.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                  alt="scikit_learn"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
              >
              <a
                href="https://matplotlib.org/"
                target="_blank"
                rel="noreferrer"
              >   
                <img
                  src="https://matplotlib.org/_static/images/logo2.svg"
                  alt="matplotlib"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px] pt-3"
                />
              </a>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://seaborn.pydata.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg"
                  alt="seaborn"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px]"
                />
              </a>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://numpy.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/numpy/numpy/main/branding/logo/primary/numpylogo.svg"
                  alt="numpy"
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-5 w-[60px] md:w-[70px] lg:w-[80px] pt-4"
                />
              </a>
            </motion.div>

          </div>
          <h4 className="text-white text-center text-xl font-medium mb-4">My Work:</h4>
            <ul className="flex flex-wrap  justify-center  w-full text-center">
              <li
                className="cursor-pointer text-nowrap rounded-lg border border-indigo-600 bg-black px-3 py-3 mx-2 my-2
                        text-xs font-bold text-white shadow-lg shadow-indigo-700/20 trnsition-all
                        duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
              >
                <a href="https://github.com/Martman954/CopenhavenAirBnB" target="_blank">CopenhavenAirBnB</a>
                </li>
              <li
                className="cursor-pointer text-nowrap rounded-lg border border-indigo-600 bg-black px-3 py-3 mx-2 my-2
                        text-xs font-bold text-white shadow-lg shadow-indigo-700/20 trnsition-all
                        duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
              >
                <a href="https://github.com/Martman954/Car-prices" target="_blank">Car Prices</a>
              </li>
              <li
                className="cursor-pointer text-nowrap rounded-lg border border-indigo-600 bg-black px-3 py-3 mx-2 my-2
                        text-xs font-bold text-white shadow-lg shadow-indigo-700/20 trnsition-all
                        duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
              >
                <a href="https://github.com/Martman954/Candidates-Test-2022" target="_blank">Candidates Test</a>
              </li>
              <li
                className="cursor-pointer text-nowrap rounded-lg border border-indigo-600 bg-black px-3 py-3 mx-2 my-2
                        text-xs font-bold text-white shadow-lg shadow-indigo-700/20 trnsition-all
                        duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
              >
                <a href="https://github.com/Martman954/Mushroom-Foraging" target="_blank">Mushroom Foraging</a>
              </li>
              <li
                className="cursor-pointer text-nowrap rounded-lg border border-indigo-600 bg-black px-3 py-3 mx-2 my-2
                        text-xs font-bold text-white shadow-lg shadow-indigo-700/20 trnsition-all
                        duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
              >
                <a href="https://github.com/Martman954/Sentiment-Analysis" target="_blank">Sentiment Analysis</a>
              </li>
            </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
