'use client'
import React from 'react'
import { motion } from 'framer-motion'

const TextAnimate = ({ text = "Hello World", className }) => {
    return (
        <div className={`${className}`}>
            {text.split("").map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.1,
                    }}
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    )
}

export default TextAnimate