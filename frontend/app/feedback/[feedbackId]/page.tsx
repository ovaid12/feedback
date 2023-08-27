'use client'
import React, { useState } from 'react'
import data from '../../../data.json'
import Comments from '@/app/components/Comments'

const FeedbackDetails = ({ params }: any) => {
    const data_detail = data.productRequests.filter((item, index) => item.id == params.feedbackId)
    return (
        <>

            <div className='flex flex-col items-center justify-between'>
                {data_detail && data_detail.map((item, index) => {
                    return (
                        <>
                            {/* <div className='flex items-center justify-between flex-wrap bg-grey-500 rounded-sm p-6 mt-3' key={index}>{item.id}</div> */}
                            <div className="rounded overflow-hidden px-4 py-2 m-2 shadow-lg" key={index}>
                                <div className='flex items justify-between w-md mb-10'>
                                    <button className="text-gray-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => { window.history.back() }}>
                                        Go Back
                                    </button>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Edit Feedback
                                    </button>
                                </div>
                                <div className="px-6 py-4">
                                    <div className='flex space-between items-center'>
                                        <div className="flex flex-col items-center rounded-md bg-gray-200 uppercase px-2 py-1 mr-3">
                                            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                                            <span className='text-xs text-gray-700 font-bold'>{item.upvotes}</span>
                                        </div>
                                        <div className='mr-auto ml-4'>
                                            <strong className='text-blue-800 font-bold'>{item.title}</strong>
                                            <p className='text-gray-700 text-base'>{item.description}</p>
                                            <span className="rounded-md bg-gray-200 uppercase px-2 py-1 text-xs text-gray-700 font-bold">{item.category}</span>
                                        </div>
                                        <div className="flex items-center rounded-md bg-gray-200 uppercase px-2 py-1 mr-0">
                                            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero" /></svg>
                                            <span className='text-xs text-gray-700 font-bold'>{item.comments?.length}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <Comments comment={data_detail} />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default FeedbackDetails