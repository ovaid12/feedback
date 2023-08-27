'use client'
import React, { useState } from 'react'
import axios from 'axios'

const addFeedback = () => {
    const [feedback, setFeedback] = useState({})

    const handleInput = (e:any) => {
        var name = e.target.name
        setFeedback({
            ...feedback,
            [name]:e.target.value
        })

    }

    const handleChange = (e:any) => {

        var name = e.target.name
        setFeedback({
            ...feedback,
            [name]:e.target.value
        })

    }

    const handleSubmit = async (e:any) => {

        try {
            await axios.post('http://localhost:3001/save/feedback', feedback)
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='flex items-center flex-col justify-between'>
            <div className="w-full max-w-[500px]">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gray-200" onSubmit={handleSubmit}>
                    <div className=''>
                        <h5 className='text-gray-900  font-bold'>Add New Feedback</h5>
                    </div>
                    <div className="mb-4 mt-10">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Feedback Title
                        </label>
                        <textarea className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='title' id="title" placeholder="title" onInput={handleInput}></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Category
                        </label>
                        <div className="inline-block relative w-full">
                            <select className="block appearance-none w-full text-gray-500 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='category' onChange={handleChange}>
                                <option value="feature">Feature</option>
                                <option value="enhancement">Enhancement</option>
                                <option value="bug">Bug</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="detail">
                            Feedback Details
                        </label>
                        <textarea className="shadow resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='detail' id="detail" placeholder="feedback details" onInput={handleInput}></textarea>
                    </div>

                    <div className="flex">
                        <button className="bg-red-500 hover:bg-blue-700 mr-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => {window.history.back()}}>
                            Cancel
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default addFeedback