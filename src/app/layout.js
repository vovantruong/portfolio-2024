import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/customs/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Gavin Dev - Portfolio",
    description: "Hi, My name is Truong. I'm a Frontend Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" /> */}
                <meta property="og:title" content="Gavin Dev - Portfolio" />
                <meta property="og:description" content="Hi, My name is Truong. I'm a Frontend Developer, I am a web programmer, with a passion for creating and building simple, beautiful websites in general and Frontend websites in particular, so I chose and pursued it to the end. This website was created to introduce a little about myself." />
                <meta name="keywords" content="portfolio gavin, gavin dev fe, fontend developer" />
            </head>
            <body className={`${inter.className} wrap-scrollbar`} cz-shortcut-listen="true">
                {/* <body className={`${inter.className} overflow-hidden`} cz-shortcut-listen="true"> */}
                <TransitionProvider>{children}</TransitionProvider>
            </body>
        </html>
    );
}
