import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function ContactSection() {
    return (
        <section id='Contact' className="my-20 md:my-12">
            <h1 className="text-center font-bold text-4xl text-neutral-900 dark:text-neutral-100">
                Contact
            </h1>
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            <div className="flex flex-wrap md:m-12 m-8 flex-row justify-center z-10 md:justify-start">
                <form className="md:w-3/5 bg-white shadow-md dark:bg-stone-900 dark:border dark:border-stone-600 rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                            First Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="first-name"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
                            Last Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="last-name"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center text-sm text-gray-700" htmlFor="agree">
                            <input
                                className="mr-2 leading-tight"
                                type="checkbox"
                                id="agree"
                            />
                            <span className="select-none">I agree to the Terms and Conditions</span>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows={4}
                            placeholder="Your message..."
                        />
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="md:w-2/5 md:ml-8 md:mt-0 mt-8">
                    <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Email: your.email@example.com
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Phone: (123) 456-7890
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Address: 123 Street, City, Country
                    </p>
                </div>
            </div>
        </section>
    );
}

