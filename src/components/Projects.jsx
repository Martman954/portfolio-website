import sem2_1 from "/Projects/2ndSem-1.png";
import sem3_1 from "/Projects/3rdSem-1.png";
import sem4_1 from "/Projects/4thSem-1.png";
import pokedex from "/Projects/pokedex.png";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const projectsData = [
    {
        image: sem4_1,
        title: "Plant & Go",
        description: "A remote-controlled green house that houses several plants and automatically waters them while collecting data about plants’ environment.",
        technologies: ["FastAPI", "Mosquitto", "React", "mongoDB", "Docker & Kuberneters"],
        link: ""
    },
    {
        image: pokedex,
        title: "Pokedex",
        description: "A List of Pokemons with information about them, including their types and stats.",
        technologies: ["React", "Tailwindcss", "JavaScript", "HTML"],
        link: "https://martman954.github.io/pokedex/"
    },
    {
        image: sem3_1,
        title: "EatWise",
        description: "The system enables businesses to sell surplus food at discounted prices to customers, effectively reducing food waste while offering affordable meals.",
        technologies: ["SpringBoot", "RESTful API", "gRPC", "Blazor", "mongoDB", "Azure blob storage", "JWT & Spring Security"],
        link: "https://github.com/Maria0603/SEP3"
    },
    {
        image: sem2_1,
        title: "BidHub",
        description: "Users either sell an item or participate in an auction by bidding on one. All this depending on the role they assumed in this interaction.",
        technologies: ["JavaFX", "PostgreSQL", "Bootstrap", "JavaScript", "HTML", "CSS"],
        link: "https://github.com/Maria0603/SEP2_Auction"
    },

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
            <a href={project.link} target="_blank" className="cursor-default">
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
        </a>

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