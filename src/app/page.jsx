'use client'

import TextAnimate from "@/components/customs/TextAnimate";
import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl overflow-hidden'>
                <div className='h-[40%] lg:h-full lg:w-1/2 relative'>
                    <Image src="/hero.png" alt='hero' fill className='object-contain' />
                </div>
                <div className='h-[60%] lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
                    <h1 className='text-[32px] leading-[1.2] md:text-5xl font-extrabold'>
                        Hi, My name is Truong. I'm a Frontend Developer.
                    </h1>

                    <p className="text-base md:text-xl">I am a web programmer, with a passion for creating and building simple, beautiful websites in general and Frontend websites in particular, so I chose and pursued it to the end. This website was created to introduce a little about myself.</p>
                    <div className='flex gap-4 md:justify-start justify-center w-full'>
                        <button className='p-4 text-lg font-medium rounded-lg ring-1 ring-black bg-black text-white'>View my world</button>
                        <button className='p-4 text-lg font-medium rounded-lg ring-1 ring-black'>Contact me</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default Homepage;
