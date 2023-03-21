import '../public/css/tailwind/tailwind.min.css'
import '../public/css/custum.css'
import NextNProgress from "nextjs-progressbar";


import Script from 'next/script'
import Head from 'next/head'


import { useEffect } from 'react'
import { useRouter } from 'next/router'



function MyApp({ Component, pageProps }) {





const router = useRouter()


  return (
    <>
    <NextNProgress color="green" height={1}/>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
