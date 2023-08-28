import React, { useEffect, useRef, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { IoLogoGithub, IoGlobe, IoLink, IoCall, IoMail, IoLogoLinkedin } from "react-icons/io5"
import { IconType } from 'react-icons'
import emailjs from "@emailjs/browser";


const Contact: React.FC<{ name: string, label: string, req: boolean }> = ({ name, label, req }) => {
    return (
        <div>
            <label className="block mb-2 text-sm font-bold">{name} {req ? <span className="text-red-500">*</span> : null}</label>
            <input type="text" name={label} className="block w-full p-2.5 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder={name} required={req} />
        </div>
    )
}


const SubmetAlert: React.FC<{ good: boolean }> = ({ good }) => {
    const message = good
        ? 'Your message has been sent successfully.'
        : 'An error occurred while sending the message. Please try to contact me via my email.';

    const alertClassName = good ? 'bg-green-500' : 'bg-red-500';

    return (
        <div className={`${alertClassName} text-white px-6 py-4 border-0 rounded relative mb-4 mt-2`} role="alert">
            <span className="block sm:inline">{message}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Close</title>
                    <path className="text-white" fillRule="evenodd" d="M14.348 5.652a.5.5 0 010 .707L10.707 10l3.641 3.641a.5.5 0 11-.707.707L10 10.707l-3.641 3.641a.5.5 0 11-.707-.707L9.293 10 5.652 6.359a.5.5 0 01.707-.707L10 9.293l3.641-3.641a.5.5 0 01.707 0z" clipRule="evenodd" />
                </svg>
            </span>
        </div>
    )
}

const MyForm = () => {
    const form = useRef()
    const [submissionResult, setSubmissionResult] = useState(null)
    const [showAlert, setShowAlert] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        
        emailjs.sendForm("service_6nqhim8", 'template_sqvjh9t', form.current, 'FBOZXkByZsEGyb5VV')
        .then((result) => {
            console.log(form.current);
            console.log(result.text);
            setSubmissionResult({ success: true });
            setShowAlert(true);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
            setSubmissionResult({ success: false });
            setShowAlert(false);
            e.target.reset();
            });
    };

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    return (
        <div className='flex flex-col mb-14 dark:bg-slate-800 bg-slate-100 rounded-3xl animate-slideUp animation-delay-2  md:flex-row md:space-x-10 md:text-left'>
            <div className='flex-grow divide-y p-5'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <Contact label={"from_name"} name={"First Name"} req={true} />
                        <Contact label={"from_last_name"} name={"Last Name"} req={false} />
                        <Contact label={"from_company"} name={"Company"} req={false} />
                        <Contact label={"from_phone"} name={"Phone Number"} req={false} />
                        <Contact label={"from_email"} name={"Email"} req={true} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="text" className="peer block mb-2 text-sm font-bold">Message</label>
                        <textarea name="message" id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
                {submissionResult !== null && showAlert && <SubmetAlert good={submissionResult.success} />}
            </div>
            <div className=" flex-grow flex-col sm:rounded-b-3xl md:rounded-none md:rounded-r-3xl p-5 md:py-20 dark:bg-slate-700 bg-slate-200">
                <Infos content={"bahimzabir@gmail.com"} Icone={IoMail} />
                <Infos content={"+212 6 37 70 87 58"} Icone={IoCall} />
                <Infos content={"bahimzabir"} Icone={IoLogoGithub} link={'https://github.com/bahimzabir'} />
                <Infos content={"bahimzabir"} Icone={IoLogoLinkedin} link={'https://www.linkedin.com/in/bahimzabir/'} />
            </div>
        </div>
    )
}

const Infos: React.FC<{ content: string, Icone: IconType, link?: string }> = ({ content, Icone, link }) => {
    return (
        <div className='hover:animate-pulse mt-7 flex items-center'>
            <Icone href={link} target={"_blank"} size={30} color={"gray"} />
            <div className="ml-2">
                <a href={link} target={"_blank"} className="font-bold dark:text-white">
                    {content}
                </a>
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
            <MyForm />
        </section>
    );


}

