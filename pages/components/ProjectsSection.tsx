import React from "react"
import { Container, Row, Col } from "reactstrap";
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"


export default function ProjectsSection() {

    let projects = [
        {
            name: "Project 1",
            description: "Description 1",
            image: "https://via.placeholder.com/150",
            link: "https://www.google.com/",

        },
        {
            name: "Project 2",
            description: "Description 2",
            image: "https://via.placeholder.com/150",
            link: "https://www.google.com/",
        },
        {
            name: "Project 3",
            description: "Description 3",
            image: "https://via.placeholder.com/150",
            link: "https://www.google.com/",
        },
        {
            name: "Project 4",
            description: "Description 4",
            image: "https://via.placeholder.com/150",
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
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start ">
            {projects.map((project, index) => {
                return (
                    <div className="mx-10">
                        <Container>
                            <Row>
                                <Col xs="6" sm="4">
                                    <h1>{project.name}</h1>
                                    <p>{project.description}</p>
                                    <Link to={project.link}>
                                        <img src={project.image} alt={project.name} />
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )
            })}
            </div>
        </section>
    )
}