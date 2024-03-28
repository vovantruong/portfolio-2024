'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import TextAnimate from '@/components/customs/TextAnimate'
import ShareTruyenHay from '../../../public/share-truyen-hay-nextjs.png'

const itemsWork = [
    {
        id: 1,
        color: 'from-red-300 to-blue-300',
        title: 'Next.js Comics website',
        desc: 'I really like reading stories and I thought I should create a website to express my interests and this website was born. It is a combination of popular web programming languages such as nextjs, tailwindcss, etc.',
        image: ShareTruyenHay,
        link: 'https://truyenhay.vercel.app/',
    },
    // {
    //     id: 2,
    //     color: 'from-blue-300 to-violet-300',
    //     title: 'Next.js Comics website',
    //     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam voluptate excepturi numquam soluta esse incidunt expedita modi nihil nemo, cum dicta sapiente! Impedit sapiente accusantium corporis nulla et inventore?',
    //     image: '/share-truyen-hay-nextjs.png',
    //     link: 'https://truyenhay.vercel.app/',
    // },
    // {
    //     id: 3,
    //     color: 'from-violet-300 to-purple-300',
    //     title: 'Next.js Comics website',
    //     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam voluptate excepturi numquam soluta esse incidunt expedita modi nihil nemo, cum dicta sapiente! Impedit sapiente accusantium corporis nulla et inventore?',
    //     image: '/share-truyen-hay-nextjs.png',
    //     link: 'https://truyenhay.vercel.app/',
    // },
    // {
    //     id: 4,
    //     color: 'from-purple-300 to-red-300',
    //     title: 'Next.js Comics website',
    //     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam voluptate excepturi numquam soluta esse incidunt expedita modi nihil nemo, cum dicta sapiente! Impedit sapiente accusantium corporis nulla et inventore?',
    //     image: '/share-truyen-hay-nextjs.png',
    //     link: 'https://truyenhay.vercel.app/',
    // },
]

const PortfolioPage = () => {
    const [visible, setVisible] = useState(true)

    const ref = useRef()
    // const { scrollYProgress } = useScroll({ target: ref })
    // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"]) // option in data


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                setVisible(false)
            } else {
                setVisible(true)
            }
        })
    }, [])


    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-[300vh] relative' ref={ref}>
                <div className='relative w-full h-[calc(100vh-6rem)] flex items-center justify-center '>
                    <h1>
                        <TextAnimate text='My World' className="text-8xl text-center font font-bold" />
                    </h1>
                    {visible && <div className='absolute left-[50%] -translate-x-[50%] bottom-10'>
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
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
                    </div>}
                </div>
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    {itemsWork.map(item => (
                        <div
                            key={item.id}
                            className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                        >
                            <div className='flex flex-col gap-8 text-white container mx-auto px-6'>
                                <h2 className='font-bold text-2xl md:text-4xl lg:text-6xl'>{item.title}</h2>
                                <div className='flex md:flex-row flex-col'>
                                    <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] shadow-md rounded-md overflow-hidden'>
                                        <Image src={item.image} alt={item.title} fill />
                                    </div>
                                    <div className='flex-1 md:pl-10 md:mt-0 mt-10'>
                                        <p className='lg:text-lg'>{item.desc}</p>
                                        <Link href={item.link} target='_blank' className='flex justify-start'>
                                            <span className='p-2 text-sm md:p-4 md:text-md lg:text-xl bg-white text-gray-600 font-semibold my-4 rounded'>Visit website</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <motion.div
                        className="flex "
                        style={{ x }}
                    >
                        <div className='`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300'></div>
                        {itemsWork.map(item => (
                            <div
                                key={item.id}
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                            >
                                <div className='flex flex-col gap-8 text-white container mx-auto px-6'>
                                    <h2 className='font-bold text-2xl md:text-4xl lg:text-6xl'>{item.title}</h2>
                                    <div className='flex md:flex-row flex-col'>
                                        <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] shadow-md rounded-md overflow-hidden'>
                                            <Image src={item.image} alt={item.title} fill />
                                        </div>
                                        <div className='flex-1 md:pl-10 md:mt-0 mt-10'>
                                            <p className='lg:text-lg'>{item.desc}</p>
                                            <Link href={item.link} target='_blank' className='flex justify-start'>
                                                <span className='p-2 text-sm md:p-4 md:text-md lg:text-xl bg-white text-gray-600 font-semibold my-4 rounded'>See more</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div> */}
                </div>
            </div>
            <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
                <h1 className='text-6xl md:text-8xl font-medium '>Do you have project?</h1>
                <div className='relative'>
                    <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} viewBox='0 0 300 300' className='w-64 h-64 md:w-[500px] md:h-[500px]'>
                        <defs>
                            <path
                                id='circlePath'
                                d='M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0'
                            />
                        </defs>
                        <text fill='#000'>
                            <textPath xlinkHref='#circlePath' className='text-xl'>Frontend Developer & Responsive Web</textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'
                    >
                        Hire me
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioPage