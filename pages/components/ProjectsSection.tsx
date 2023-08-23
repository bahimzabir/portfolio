import React from "react"
import { Container, Row, Col } from "reactstrap";
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import {IoLogoGithub} from "react-icons/io5"


export default function ProjectsSection() {
    const {theme} = useTheme()
    let projects = [
        {
            name: "Transcedence",
            description: "Description 1",
            image: "/tran.gif",
            image_dark: "/tran.dark.gif",
            link: "https://github.com/bahimzabir/transcedence",

        },
        {
            name: "Project 2",
            description: "Description 2",
            image: "/webserver.gif",
            image_dark: "/webserver.dark.gif",
            link: "https://www.google.com/",
        },
        {
            name: "Project 3",
            description: "Description 3",
            image: "/shell.gif",
            image_dark: "/shell.dark.gif",
            link: "https://www.google.com/",
        },
        {
            name: "Project 4",
            description: "Description 4",
            image: "/web4.png",
            image_dark: "/webserver.dark.gif",
            link: "https://www.google.com/",
        }
    ];

    return (
        <section id='Projects'>
            <div className="my-20 md:my-12">
                <h1 className="text-center font-bold text-4xl">
                    Projects
                </h1>
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </div>
            <div className="flex flex-wrap md:m-12 m-8 flex-row justify-center z-10 md:justify-start ">
                {projects.map((project, index) => {
                    // create title-image-description divs
                    return (
                        <div className="flex flex-col text-center items-center justify-center animate-slideUp animation-delay-2 my-10 py-32 sm:py-32 md:py-12 md:flex-row md:space-x-24 md:text-left">
                            <div className="md:mt-2">
                                <img src= {theme == "dark" ? project.image_dark : project.image} alt={project.name} />
                            </div>
                            <div className="md:mt-2 md:w-3/5">
                                <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">{project.name}</h1>
                                <p className="text-lg mt-4 mb-6 md:text-2xl">
                                    {project.description}
                                </p>
                                {/*button takes to github*/}
                                <button className=" hover:animate-spin inline-flex items-center">
                                    <a href={project.link} target="_blank">
                                        <IoLogoGithub size={30} />
                                    </a>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}