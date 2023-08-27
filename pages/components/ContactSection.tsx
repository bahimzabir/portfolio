import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
// import some icone from react icons
import { IoLogoGithub, IoGlobe, IoLink, IoCall, IoMail } from "react-icons/io5"
import { IconType } from 'react-icons'


const Contact: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium">{name}</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
            </input>
        </div>
    )
}


const Infos: React.FC<{ content: string, Icone: IconType }> = ({ content, Icone }) => {
    return (
        <div className='mt-7 flex items-center'>
            <Icone size={30} color={"gray"} />
            <div className="ml-2">
                <p className="font-bold dark:text-white">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default function ContactSection() {
    return (

        <section id='Contact'>
            <div>
                <h1 className="text-center font-bold text-4xl">
                    Contact
                </h1>
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </div>
            <div className='flex flex-col mb-14 dark:bg-slate-800 bg-slate-100 rounded-3xl animate-slideUp animation-delay-2  md:flex-row md:space-x-10 md:text-left'>
                <div className='flex-grow divide-y p-5'>
                    <Form>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <Contact name={"First Name"} />
                            <Contact name={"Last Name"} />
                            <Contact name={"Company"} />
                            <Contact name={"Phone Number"} />
                        </div>
                        <div className="mb-6">
                            <Contact name={"Email"} />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="text" className="peer block mb-2 text-sm font-medium">Message</label>
                            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </Form>

                </div>
                <div className=" flex-grow flex-col sm:rounded-b-3xl md:rounded-none md:rounded-r-3xl p-5 md:py-20 dark:bg-slate-700 bg-slate-200">
                    <Infos content={"Bahimzabir@gmail.com"} Icone={IoMail} />
                    <Infos content={"+212 6 00 00 00 00"} Icone={IoCall} />
                    <Infos content={"Bahimzabir@gmail.com"} Icone={IoMail} />
                    <Infos content={"Bahimzabir@gmail.com"} Icone={IoMail} />
                </div>
            </div>
        </section>
    );
}

