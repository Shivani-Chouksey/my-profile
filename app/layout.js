"use client"
import './globals.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import Navbar from '@/components/Navbar';
import { useEffect } from 'react';
import BootstrapJavaScript from  "@/node_modules/bootstrap/dist/js/bootstrap.min.js";
import Head from 'next/head';
import axios from 'axios';
// import { Inter } from 'next/font/google'


// const inter = Inter({ subsets: ['latin'] })

axios.baseURL = "http://localhost:3000";

export default function RootLayout({ children }) {
  useEffect(()=>{
    if(typeof window !== "undefined"){
    BootstrapJavaScript 
    }
   },[])
 

  return (
    <html>
      <Head>
        <title>Shivani chouksey Portfolio</title>
        <meta
          name="description"
          content="I have dedicated myself to becoming a Full Stack Developer, driven by my passion, for creating web experiences. Over the 9 months I have gained hands-on experience in JavaScript, React.js, Next.js, Node.js, and MongoDb for development allowing me to build robust and responsive applications. My expertise also extends to HTML, CSS, TailwindCSS, and Bootstrap enabling me to design appealing interfaces that are user-friendly. Additionally, I have experience with MongoDB for database solutions which adds scalability to projects. To add a layer of interactivity and bring websites to life I utilize GSAP, a library specifically designed for animations. In addition, to these skills, I am well-versed in WordPress for Project Development. If you are seeking a developer who can elevate your web projects to heights of success let's connect and explore how I can contribute."
        />
      </Head>
      <body>
      <Navbar/>
        {children}
        </body>
    </html>
  )
}
