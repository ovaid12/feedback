import Link from 'next/link'
// import React from 'react'

const SideBar = () => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden px-4 py-2 m-2 shadow-lg bg-gradient-to-r from-purple-500 to-pink-500">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Eqaim</div>
                    <p className="text-gray-700 text-base">
                        Feedback Board
                    </p>
                </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden px-4 py-2 m-2 shadow-lg">
                <div className="flex flex-wrap px-4 py-2">
                    <span className="rounded-md bg-white-500 uppercase px-2 py-1 text-gray-500 text-xs shadow-lg font-bold mr-3 mb-3">All</span>
                    <span className="rounded-md bg-white-500 uppercase px-2 py-1 text-xs text-gray-500 shadow-lg font-bold mr-3 mb-3">UI</span>
                    <span className="rounded-md bg-white-500 uppercase px-2 py-1 text-xs text-gray-500 shadow-lg font-bold mr-3 mb-3">UX</span>
                    <span className="rounded-md bg-white-500 uppercase px-2 py-1 text-xs text-gray-500 shadow-lg font-bold mr-3 mb-3">Enhancement</span>
                    <span className="rounded-md bg-white-500 uppercase px-2 py-1 text-xs text-gray-500 shadow-lg font-bold mr-3 mb-3">Feature</span>
                    <span className="rounded-md bg-white-500 uppercase px-2 py-1 text-xs text-gray-500 shadow-lg font-bold mr-3 mb-3">Bug</span>
                </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden px-4 py-2 m-2 shadow-lg ">
                <div className=" flex flex-col justify-between px-6 py-4">
                    <div className='flex justify-between mb-3'>
                        <h3 className='text-gray-700 font-bold'>Roadmap</h3>
                        <Link href="#" className='text-blue-700'>View</Link>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <ul>
                            <div className='flex justify-between text-gray-500'><li className='py-2 px-2'>Active</li><span>1</span></div>
                            <div className='flex justify-between text-gray-500'><li className='py-2 px-2'>Progress</li><span>1</span></div>
                            <div className='flex justify-between text-gray-500'><li className='py-2 px-2'>Live</li><span>1</span></div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar