import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs"
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "/Logo.png";

const Navbar = () => {
  
    const [isOpen, setIsOpen] = useState(false);
  
    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 
                    px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
        <a href="#home">
            <img src={logo} alt="Logo" className="mx-auto block h-12 sm:mx-0 sm:shrink-0 opacity-80 transition-all
                    duration-300 hover:opacity-100"/>
        </a>
        <ul className="hidden md:flex gap-10">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Home</li>
            </a>
            <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Tech</li>
            </a>
            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Projects</li>
            </a>
            <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Contact</li>
            </a>
        </ul>

        <ul className="hidden md:flex gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                <a href="https://www.linkedin.com/in/matej-palas" target="_blank"><BsLinkedin /></a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500 hover:opacity-100">
                <a href="https://github.com/Martman954/" target="_blank"><BsGithub /></a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <a href="https://www.facebook.com/matopalas/" target="_blank"><BsFacebook /></a>
            </li>
        </ul>

        {isOpen ? (
            <BiX className="block md:hidden text-4xl" onClick={menuOpen}/>
        ) : (
            <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>
        )}

        {isOpen && (
            <div className={`fixed right-0 top-[96px] flex h-screen w-1/2 flex-col items-start justify-start 
                            gap-10 border-l border-gray-800 bg-black/60 p-12 ${isOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-8">
                    <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Home</li>
                    </a>
                    <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Tech</li>
                    </a>
                    <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Projects</li>
                    </a>
                    <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                        <li>Contact</li>
                    </a>
                </ul>
                <ul className="flex flex-warp gap-5">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                <a href="https://www.linkedin.com/in/matej-palas" target="_blank"><BsLinkedin /></a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-500 hover:opacity-100">
                <a href="https://github.com/Martman954/" target="_blank"><BsGithub /></a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <a href="https://www.facebook.com/matopalas/" target="_blank"><BsFacebook /></a>
            </li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Navbar