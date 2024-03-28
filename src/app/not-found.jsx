import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='h-full w-full flex items-center justify-center flex-col'>
            <h1 className='text-[80px] font-extrabold'>OOPS!</h1>
            <p className='mb-10 font-medium text-3xl text-gray-700'>We can't find the page</p>
            <Link href="/" className='px-5 py-3 rounded-md bg-black text-white font-medium text-lg hover:scale-[0.95] transition-all duration-200 shadow-md'>
                Go to Home
            </Link>
        </div>
    )
}

export default NotFound