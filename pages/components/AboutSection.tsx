import React from "react"
import Image from "next/image"

const skills = [
  // { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "C/C++" },
  { skill: "React" },
  { skill: "Flutter" },
  // { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "Docker" },
  { skill: "NodeJs" },
  { skill: "ExpressJs" },
  { skill: "NestJs" },
  { skill: "SQL" },
  { skill: "Linux" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-12">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <div className="text-lg">
              <p>
                Hi, my name is
                <span className="font-bold">{" Abderrahim Zabir"}</span>, and I am a{" "}
                <span className="font-bold">{"highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, tech explorer dedicated to making
                the world of technology more exciting.
              </p>
              <br />
              <p>
                {"I'm proud to be part of"}
                <a href="https://www.42network.org/about-us/" target="_blank" className="font-bold text-teal-500"> 42 Network </a> as a sudent at
                <a href="https://1337.ma/" target="_blank" className="font-bold text-teal-500"> 1337 </a>
                coding school in Morocco.
                and also holding a degree in renewable energies from Ibnzohr University, I bring a unique blend of skills to the table.
              </p>
              <br />
              <p>
                {"My real passion lies in crafting innovative software that challenges the status quo.\
                Whether it's creating user-friendly apps or building robust backends,\
                I thrive on turning ideas into impactful solutions. I'm also a devoted tech geek,\
                and always eager to dive into new technologies. This drive pushes me to create software\
                that not only keeps up with the times, but also shapes the future."}
              </p>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            {/* <Image
              src="/dev-ed-wave.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
