import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-gray-500 rounded-sm p-6 mt-3">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                            Sorted By
                        </label>
                        <div className="inline-block relative w-md">
                            <select className="block appearance-none w-full text-gray-500 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='category'>
                                <option value="feature">Feature</option>
                                <option value="enhancement">Enhancement</option>
                                <option value="bug">Bug</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Link href="/addFeedback" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Feedback
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar