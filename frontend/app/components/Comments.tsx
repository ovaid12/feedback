'use client'
import React, { useState } from 'react'
import axios from 'axios'


const Comments = ({ comment }:any) => {
    var count = 250
    const [wordCount, setWordCount] = useState(count)
    const [cmnt, setCmnt] = useState({
        comment:'',
        feedbackId:comment[0].id
    })

    const handleInput = (e: { target: { value: any; name: any } }) => {
        var word_count = (e.target.value).length
        setWordCount(count - word_count);
        var name = e.target.name
        setCmnt({
            ...cmnt,
            [name]: e.target.value
        })
    }

    const handleSubmit = async (e: { preventDefault: () => void; target: { name: any; value: any } }) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:3001/save/comment', {cmnt})
                .then((res) => {
                    return  confirm("Added")
                })
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>

            <div className="rounded overflow-hidden px-4 py-2 m-2 shadow-lg w-full">
                <h3 className='text-gray-900 font-bold ml-5 px-4 py-2'>{comment[0].comments.length} Comments</h3>
                {comment[0] && comment[0]?.comments.map((item: any, index: any) => {
                    return (
                        <>
                            <div key={index} className="px-6 py-4 w-md mt-3 w-full">
                                <div className='flex space-between items-center'>
                                    <div className="flex flex-col uppercase  mr-3">
                                        {/* <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fill-rule="evenodd" /></svg> */}
                                        {/* <span classNameName='text-xs text-gray-700 font-bold'>{item.upvotes}</span> */}
                                        <img className='object-fill rounded-full h-7 w-7' src={item.user.image} />
                                    </div>
                                    <div className='mr-auto ml-4'>
                                        <strong className='text-blue-800 font-bold'>{item.user.name}</strong>
                                        <p className='text-gray-800'>@{item.user.username}</p>
                                        <p className='text-gray-700 text-base mt-5'>{item.content}</p>
                                        {/* <span classNameName="rounded-md bg-gray-200 uppercase px-2 py-1 text-xs text-gray-700 font-bold">{item.category}</span> */}
                                    </div>
                                    <div className="flex items-center rounded-md bg-gray-200 uppercase px-2 py-1 mr-0">
                                        {/* <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero" /></svg> */}
                                        <span className='text-xs text-gray-700 font-bold'>Reply</span>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}
            </div>
            <div className="w-full max-w-l mt-10">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
                            Add Comment
                        </label>
                        <textarea className='resize-none shadow appearance-none border border-gray-300 h-full rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' name='comment' onInput={handleInput}></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className='text-gray-500'>Characters left: {wordCount}</span>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Post comment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Comments