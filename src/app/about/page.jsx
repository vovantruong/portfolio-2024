'use client'
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Brain from '@/components/customs/Brain'
import Image from 'next/image'

const itemsSkill = [
    "Javascript", "HTML5", "CSS3", "SCSS", "SASS", "Tailwindcss", "React.js", "Next.js", "Typescript", "Wordpress", "Responsive Web"
]

const itemExperience = [
    {
        title: "Intern Reactjs Developer",
        desc: "Start your personal development path, receive training and learn new things right out of school!",
        time: "11/2021 - 4/2022",
        tech: ["reactjs", "redux", "html", "javascript", "sass", "scss", "web3"],
        company: "Onicorn Company"
    },
    {
        title: "Fresher Frontend Developer",
        desc: "I find working here quite interesting, I enjoy my work more and have developed myself more here.",
        time: "06/2022 - 10/2023",
        tech: ["reactjs", "wordpress", "html", "javascript", "scss", "sass"],
        company: "Isaigon C.o"
    },
    {
        title: "Frontend Developer Remote",
        desc: "The job whose contract I just terminated. Much better than previous positions, learning quite new technologies",
        time: "11/2023 - 03/2024",
        tech: ["reactjs", "nextjs", "typescript", "tailwindcss", "wordpress"],
        company: "The Whykingz"
    },
]

const AboutPage = () => {

    const containerRef = useRef()

    const { scrollYProgress } = useScroll({ container: containerRef })

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-full overflow-scroll noscrollbar-ui lg:flex' ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 xl:pt-20 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY */}
                    <div className="flex flex-col gap-10 justify-center relative">
                        <h1 className='font-bold md:text-3xl text-2xl uppercase flex items-center'>
                            <Image src="/logo-gavin.png" alt='logo' width={35} height={35} className='mr-2' />
                            Biography
                        </h1>
                        <p className='text-base'>
                            Hello everyone! <br />
                            <span className='block py-2'></span>
                            My name is Vo Van Truong, also known as Gavin dev. <br />
                            I have nearly 2 years of experience working as a Frontend developer. <br />
                            My passion is writing code to create beautiful and impressive user interfaces.
                            I am always learning and updating the latest trends in the Frontend industry to bring the best experience for users. <br />
                            <span className='block py-2'></span>
                            Nice to meet you all!
                        </p>
                        <span className='italic text-sm'>The greatest human success is turning passion into income.</span>
                        <div className="self-end">
                            <svg width="225" height="117" viewBox="0 0 550 164" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: "225px", width: "100%" }}>
                                <path d="M2.01321 201.11C5.72882 201.11 7.77815 199.258 10.7846 197.194C24.851 187.537 39.7217 179.63 52.7621 168.452C87.3561 138.8 124.204 104.623 140.633 61.0024C145.096 49.152 152.871 11.8514 149.718 24.1155C143.614 47.8533 139.286 70.4935 129.512 93.347C126.553 100.266 122.988 108.463 123.247 116.215C123.414 121.249 133.845 111.451 134.603 110.733C142.186 103.549 149.367 96.1359 155.356 87.5516C156.555 85.8333 159.963 76.9209 159.116 78.8585C157.408 82.7607 145.197 110.036 150.344 111.751C157.477 114.129 167.633 97.0417 170.55 92.7205C172.176 90.3115 173.349 82.8149 171.176 87.1601C170.543 88.4262 164.009 106.028 169.767 101.492C172.286 99.507 180.1 76.5477 177.911 76.2741C175.292 75.9467 177.547 86.4962 178.303 87.63C181.852 92.954 192.819 88.5017 196.394 85.4371C199.902 82.4306 196.536 75.445 194.828 80.1899C192.788 85.8546 192.23 94.4521 197.647 98.2026C203.136 102.003 210.507 97.8727 214.563 93.6603C216.417 91.7354 216.853 88.2032 216.13 85.6721C215.645 83.9742 211.274 83.6447 211.274 82.3828C211.274 80.8505 229.937 84.1057 231.871 84.1057C233.314 84.1057 247.103 83.1261 244.167 80.1899C241.555 77.5785 237.297 83.8415 244.167 84.1057C247.142 84.2202 254.908 84.68 250.745 79.3284C248.588 76.5544 245.03 85.6282 252.233 84.0274C261.566 81.9536 260.005 92.899 259.752 101.257C259.293 116.414 255.293 132.59 251.529 147.229C249.335 155.759 247.569 166.581 241.582 173.465C230.26 186.485 215.528 154.247 212.684 146.445C210.432 140.27 209.725 135.618 215.895 132.035C226.667 125.78 240.686 122.868 252.468 119.348C268.428 114.581 284.305 109.966 299.928 104.155C308.074 101.125 315.178 98.9082 319.82 91.3108C326.687 80.0751 305.614 67.0641 298.127 62.0989C279.516 49.7568 258.911 41.4362 239.311 30.929C235.007 28.6214 223.193 23.616 226.781 16.4405C237.218 -4.43318 268.617 3.72619 285.988 4.53647C322.972 6.2617 360.106 4.85776 397.118 5.24131C427.294 5.55402 457.256 9.1703 487.417 9.39207C490.627 9.41568 526.693 14.0326 520.78 5.163" stroke="black" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className='absolute md:bottom-0 left-0 -bottom-12'>
                            <motion.svg
                                initial={{ opacity: 0.2, y: 0 }}
                                animate={{ opacity: 1, y: "10px" }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
                            >
                                <path
                                    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                    stroke="#000000"
                                    strokeWidth="1"
                                ></path>
                                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                                <path
                                    d="M15 11L12 14L9 11"
                                    stroke="#000000"
                                    strokeWidth="1"
                                ></path>
                            </motion.svg>
                        </div>
                    </div>
                    {/* SKILLS */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        <motion.h1
                            className='font-bold md:text-3xl text-2xl uppercase flex items-center'
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <Image src="/logo-gavin.png" alt='logo' width={35} height={35} className='mr-2' />
                            SKILLS
                        </motion.h1>
                        <div className='flex gap-4 flex-wrap'>
                            {itemsSkill.map(item => (
                                <div key={item} className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-200'>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EXPERIENCE */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                        <motion.h1
                            className='font-bold md:text-3xl text-2xl uppercase flex items-center'
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <Image src="/logo-gavin.png" alt='logo' width={35} height={35} className='mr-2' />
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=''
                        >
                            {itemExperience.map((item, index) => (
                                <div
                                    className="flex justify-between min-h-48"
                                    key={index}>
                                    {/* LEFT */}
                                    <div className='w-1/2'>
                                        {
                                            index % 2 === 0 && (
                                                <>
                                                    {/* TITLE */}
                                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg md:text-base text-sm'>
                                                        {item.title}
                                                    </div>
                                                    {/* DESCRIPTION */}
                                                    <div className='md:px-3 py-3 text-sm italic'>
                                                        {item.desc}
                                                    </div>
                                                    <div className='flex flex-wrap gap-2 md:px-3 py-3'>
                                                        {item.tech.map((x) => (
                                                            <span className='bg-black text-white rounded px-2 py-1 text-xs font-light'>{x}</span>
                                                        ))}
                                                    </div>
                                                    {/* TIMELINE */}
                                                    <div className='md:px-3 py-3 text-sm text-red-400 font-semibold'>
                                                        {item.time}
                                                    </div>
                                                    {/* COMPANY */}
                                                    <div className='p-1 bg-white rounded text-sm font-semibold w-fit md:ml-3'>
                                                        {item.company}
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                    {/* CENTER */}
                                    <div className='w-1/6 flex justify-center'>
                                        <div className='w-1 h-full bg-gray-600 rounded relative'>
                                            <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                                        </div>
                                    </div>
                                    {/* RIGHT */}
                                    <div className='w-1/2'>
                                        {
                                            index % 2 !== 0 && (
                                                <>
                                                    {/* TITLE */}
                                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg md:text-base text-sm'>
                                                        {item.title}
                                                    </div>
                                                    {/* DESCRIPTION */}
                                                    <div className='md:px-3 py-3 text-sm italic'>
                                                        {item.desc}
                                                    </div>
                                                    <div className='flex flex-wrap gap-2 md:px-3 py-3'>
                                                        {item.tech.map((x) => (
                                                            <span className='bg-black text-white rounded px-2 py-1 text-xs font-light'>{x}</span>
                                                        ))}
                                                    </div>
                                                    {/* TIMELINE */}
                                                    <div className='md:px-3 py-3 text-sm text-red-400 font-semibold'>
                                                        {item.time}
                                                    </div>
                                                    {/* COMPANY */}
                                                    <div className='p-1 bg-white rounded text-sm font-semibold w-fit md:ml-3'>
                                                        {item.company}
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    )
}

export default AboutPage