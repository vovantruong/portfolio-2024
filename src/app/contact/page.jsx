'use client'
export const dynamic = "force-dynamic";

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import TextAnimate from '@/components/customs/TextAnimate'

import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)


    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        setSuccess(false)
        setError(false)
        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            })
            .then(
                (result) => {
                    setSuccess(true)
                    form.current.reset()
                },
                (error) => {
                    setError(true)
                },
            );
    };

    useEffect(() => {
        if (success) {
            const timeout = setTimeout(() => {
                setSuccess(false)
            }, 2000)

            clearTimeout(timeout)
        }
    }, [success])

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError(false)
            }, 2000)

            clearTimeout(timeout)
        }
    }, [error])



    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-[95%] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                <div className='h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center'>
                    <TextAnimate
                        className="text-6xl font-semibold"
                        text='Say hello!'
                    />
                </div>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='h-2/3 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-lg flex flex-col md:gap-6 gap-3 justify-center px-12 py-5 md:px-22 md:py-12'
                >

                    <span className='font-light italic'>Dear Gavin Dev,</span>
                    <textarea
                        name='user_message'
                        className='bg-transparent border-b border-b-black outline-none resize-none'
                        rows={6}
                    />
                    <span>My mail address is:</span>
                    <input type="text" className='bg-transparent border-b border-b-black outline-none' name='user_email' autoComplete='off' />
                    <span>Regards!</span>
                    <button
                        className='bg-purple-200 rounded font-semibold text-gray-600 p-4'
                    >
                        Send
                    </button>
                    {success && <span className='text-green-600 font-semibold text-sm'>Your message has been sent successfully</span>}
                    {error && <span className='text-red-600 font-semibold text-sm'>Something went wrong</span>}
                </form>
            </div>
        </motion.div>
    )
}

export default ContactPage