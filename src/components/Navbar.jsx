'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './customs/NavLink'
import { motion } from 'framer-motion'

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)


    const topVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    }

    const bottomVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"
        }
    }

    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const listItemsVariants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            <div className='hidden md:flex items-center gap-4 w-1/3'>
                {links.map((item, index) => (
                    <NavLink link={item} key={index} />
                ))}
            </div>
            {/* Logo */}
            <div className='md:hidden lg:flex xl:w-1/3 justify-center'>
                <Link
                    href="/"
                    className='text-sm rounded-md bg-black p-1 font-semibold flex items-center justify-center select-none w-fit'
                >
                    <span className='text-white mr-1'>Gavin</span>
                    <span className='bg-white w-12 h-8 text-black rounded flex items-center justify-center'>dev</span>
                </Link>
            </div>
            <div className='hidden md:flex gap-4 items-center w-1/3 justify-center'>
                <Link href="https://github.com/vovantruong" target='_blank'>
                    <Image src="/github.png" alt='github' width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/_truong.vo.1007_/" target='_blank'>
                    <Image src="/instagram.png" alt='ins' width={24} height={24} />
                </Link>
                <Link href="https://www.facebook.com/vvtruong.1007" target='_blank'>
                    <Image src="/facebook.png" alt='facebook' width={24} height={24} />
                </Link>
                <Link href="www.linkedin.com/in/vo-van-truong-gavin-dev" target='_blank'>
                    <Image src="/linkedin.png" alt='linkedin' width={24} height={24} />
                </Link>
                <Link href="https://t.me/gavinvo" target='_blank'>
                    <Image src="/telegram.png" alt='linkedin' width={24} height={24} />
                </Link>
            </div>
            {/* RESPOSIVE MEU */}
            <div className='md:hidden'>
                <button
                    className='w-10 h-8 flex flex-col justify-between z-[10000] relative'
                    onClick={() => setOpen(prev => !prev)}
                >
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : 'closed'}
                        className='w-10 h-1 bg-black rounded origin-left'>
                    </motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : 'closed'}
                        className='w-10 h-1 bg-black rounded'>
                    </motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : 'closed'}
                        className='w-10 h-1 bg-black rounded origin-left'>
                    </motion.div>
                </button>
                {open && (
                    <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-[9999]'>
                        {links.map((item, index) => (
                            <motion.div key={index} variants={listItemsVariants}>
                                <Link onClick={() => setOpen(prev => !prev)} href={item.url}>{item.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Navbar