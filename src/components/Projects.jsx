import sem2_1 from "/Projects/2ndSem-1.png";
import sem3_1 from "/Projects/3rdSem-1.png";
import sem4_1 from "/Projects/4thSem-1.png";

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const projectsData = [
    {
        image: sem4_1,
        title: "Plant & Go",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed eum laborum dicta assumenda eligendi quasi a qui saepe itaque distinctio corrupti cumque natus dolor et rerum, praesentium aliquid. Animi!",
        technologies: ["Tech1", "TEch2", "Tech3", "Tecj5"]
    },
    {
        image: sem3_1,
        title: "EatWise",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed eum laborum dicta assumenda eligendi quasi a qui saepe itaque distinctio corrupti cumque natus dolor et rerum, praesentium aliquid. Animi!",
        technologies: ["Tech1", "TEch2", "Tech3", "Tecj5"]
    },
    {
        image: sem2_1,
        title: "BidHub",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sed eum laborum dicta assumenda eligendi quasi a qui saepe itaque distinctio corrupti cumque natus dolor et rerum, praesentium aliquid. Animi!",
        technologies: ["Tech1", "TEch2", "Tech3", "Tecj5"]
    }
]

const ScrollReveal = ({children}) => {
    return (
        <motion.div
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.8}}
        >
            {children}
        </motion.div>
    )
}

const ProjectCard = ({project}) => {
    return (
        <ScrollReveal>
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
            <img src={project.image} alt={project.title}  className="w-full cursor-pointer 
                    rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>

            <div className="flex flex-wrap">
            <div className="flex flex-col pag-5">
                <div className="text-xl font-semibold">{project.title}</div>
                <p className="text-gray-400">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-5">
                {
                    project.technologies.map((tech, index) => (
                        <span key={index} className="rounded-lg bg-black p-3">{tech}</span>
                    ))
                }
            </div>
            </div>
        </div>
        </ScrollReveal>
    );
};

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-14">
        <ScrollReveal>
            <h1 className="text-4xl font-light text-white md:text-6xl">Projects</h1>
        </ScrollReveal>
        <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
            {
                projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project}></ProjectCard>
                ))
            }
        </div>
    </div>
  )
};

export default Projects;