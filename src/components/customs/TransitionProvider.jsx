'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Navbar from '../Navbar'
import { usePathname } from 'next/navigation'

const TransitionProvider = ({ children }) => {

    const pathName = usePathname()

    const titlePath = [
        { id: "/", name: "Home Page" },
        { id: "/about", name: "About Page" },
        { id: "/portfolio", name: "Portfolio Page" },
        { id: "/contact", name: "Contact Page" },
    ]


    return (
        <AnimatePresence mode='wait'>
            <div key={pathName} className="w-full h-screen bg-gradient-to-b from-blue-100 to-red-100">
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40 flex items-center justify-center'
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div
                    className='fixed m-auto top-0 bottom-0 right-0 left-0 text-white font-bold text-8xl cursor-default w-fit h-fit z-50 text-center'
                    initial={{ visibility: 'visible' }}
                    animate={{ visibility: 'hidden' }}
                    exit={{ visibility: 'hidden' }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                >
                    {titlePath.find(item => item.id === pathName).name}
                </motion.div>
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }}
                />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider