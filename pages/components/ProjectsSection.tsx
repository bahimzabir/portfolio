import React, { useEffect } from "react"
import { Container, Row, Col } from "reactstrap";
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { IoLogoGithub, IoGlobe, IoLink, IoLinkOutline } from "react-icons/io5"
// import Typewriter from "typewriter-effect";


export default function ProjectsSection() {
    let { resolvedTheme, systemTheme, theme } = useTheme()
    // console.log({systemTheme, theme, resolvedTheme})
    let projects = [
        {
            name: "Trancsedence",
            description: ["⦿ A multiplayer online Game!", "⦿ Players can PLAY, CHAT, and COMPETE!", "⦿ They can stream games, and create chat rooms!", "⦿ They can add friends and block users!", "⦿ Developed with: NestJs, PotgreSQL, ReactJs and Socket.io!"],
            image: "/tran.gif",
            image_dark: "/tran.dark.gif",
            link: "https://github.com/bahimzabir/transcedence",

        },
        {
            name: "Webserver",
            description: ["⦿ A Custom HTTP server workes like Nginx", "⦿ It can serve static websites and Any type of data", "⦿ The server uses CGI binary execute PHP and Perl scriptes", "⦿ It can Handle A lot of requests in the same time!", "⦿ Developed with: C++ 🚀🚀!"],
            image: "/webserver.gif",
            image_dark: "/webserver.dark.gif",
            link: "https://github.com/bahimzabir/webserve",
        },
        {
            name: "Minishell",
            description: ["⦿ A simple shell implementation!", "⦿ The project aims to enhance my understanding of processes, file descriptors, and various shell functionalities.!", "⦿ It supports Pipes, Quoting, Redirections, Signals and More", "⦿ Developed with: C 💪", "⦿ Just As Beautiful As Shell ❤️"],
            image: "/shell.gif",
            image_dark: "/shell.dark.gif",
            link: "https://github.com/bahimzabir/Minishell",
        },
        {
            name: "Inception",
            description: ["⦿ A Docker System Administration Project!", "⦿ Setting up a virtualized infrastructure with various Docker containers!", "⦿ All Images are built using Docker Files", "⦿ Services: Nginx, Mariadb, Wordpress, Redis, Adminer and more", "⦿ Developed with: Docker and Shell scripting!"],
            image: "/Docker.gif",
            image_dark: "/Docker.dark.gif",
            link: "https://github.com/bahimzabir/inception",
        }
    ];

    const Typewriter: React.FC<{ text: string; delay: number; waitingTime: number }> = ({ text, delay, waitingTime }) => {
        const [currentText, setCurrentText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isWaiting, setIsWaiting] = useState(true);

        useEffect(() => {
            if (!isWaiting && currentIndex < text.length) {
                const typingTimeout = setTimeout(() => {
                    setCurrentText(prevText => prevText + text[currentIndex]);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, delay);

                return () => clearTimeout(typingTimeout);
            }
        }, [currentIndex, delay, text, isWaiting]);

        useEffect(() => {
            const waitingTimeout = setTimeout(() => {
                setIsWaiting(false);
            }, waitingTime);

            return () => clearTimeout(waitingTimeout);
        }, [waitingTime]);

        return (<div className="pt-2"><span>{currentText}</span></div>);
    };

    return (
        <section id='Projects'>
            <div className="md:my-12">
                <h1 className="text-center font-bold text-4xl">
                    Projects
                </h1>
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </div>
            <div className="flex flex-wrap md:m-12 m-8 flex-row justify-center z-10 md:justify-start ">
                {projects.map((project, index) => {
                    // create title-image-description divs
                    return (
                        <div key={index} className="flex flex-col text-center  justify-center animate-slideUp animation-delay-2 my-10  md:py-12 md:flex-row md:space-x-12 md:text-left">
                            <div className="md:mt-2">
                                <img className="animate-wiggle rounded-3xl shadow-xl dark:shadow-slate-900" src={theme == "light" ? project.image : project.image_dark} alt={project.name} />
                            </div>

                            <div className="mt-12 md:mt-2 md:w-1/2">
                                <div className="flex space-x-4">
                                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-4xl">{project.name}</h1>
                                    <div className="flex-row space-x-4 inline-flex items-center">
                                        <button className=" hover:animate-pulse">
                                            <a href={project.link} target="_blank">
                                                <IoLinkOutline size={40} />
                                            </a>
                                        </button>
                                        {/* <button className=" hover:animate-pulse ">
                                            <a href={project.link} target="_blank">
                                                <IoLink size={50} />
                                            </a>
                                        </button> */}
                                    </div>
                                </div>
                                <div className="text-xl text-left w-fit pt-5 pl-1 pr-3 pb-5">
                                    <Typewriter text={project.description[0]} delay={20} waitingTime={0} />
                                    <Typewriter text={project.description[1]} delay={20} waitingTime={900} />
                                    <Typewriter text={project.description[2]} waitingTime={1800} delay={20} />
                                    <Typewriter text={project.description[3]} waitingTime={2700} delay={20} />
                                    <Typewriter text={project.description[4]} waitingTime={3600} delay={20} />
                                </div>
                                {/*button takes to github*/}

                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="my-20 md:my-12">
                {/* <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr> */}
                <h1 className="text-center font-bold text-4xl">
                    More Projects Are on my <a href="https://github.com/bahimzabir" target="_blank" className="text-teal-500 underline"> GitHub </a>
                </h1>
            </div>
        </section>
    )
}