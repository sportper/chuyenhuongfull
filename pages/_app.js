import '../public/css/tailwind/tailwind.min.css'
import '../public/css/custum.css'
import NextNProgress from "nextjs-progressbar";


import Script from 'next/script'
import Head from 'next/head'


import { useEffect } from 'react'
import { useRouter } from 'next/router'



function MyApp({ Component, pageProps }) {





const router = useRouter()

function loadjswhenclicklink(){

// batmomenu khi dang click ma chuyen trang
let checkbatmo = document.querySelector('.navbar-menu').classList.contains('hidden');
if(checkbatmo === false){
  document.querySelector('.navbar-menu').classList.toggle('hidden');
}





}

useEffect(() => {

  router.events.on('routeChangeComplete', loadjswhenclicklink)
  return () => {
  router.events.off('routeChangeComplete', loadjswhenclicklink)
  };
}, [router.events]);







   const unique_id = new Date().getTime();

  return (
    <>
    <Head>






    </Head>



      <NextNProgress color="green" height={1}/>
      <Component {...pageProps} />

    </>
  );
}

export default MyApp
