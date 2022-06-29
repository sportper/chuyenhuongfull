import '../public/css/tailwind/tailwind.min.css'
import '../public/css/custum.css'
import NextNProgress from "nextjs-progressbar";


import Script from 'next/script'
import Head from 'next/head'


import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'



function MyApp({ Component, pageProps }) {





const IDGA = 'UA-143304873-5';
const router = useRouter()

function loadjswhenclicklink(){

// batmomenu khi dang click ma chuyen trang
let checkbatmo = document.querySelector('.navbar-menu').classList.contains('hidden');
if(checkbatmo === false){
  document.querySelector('.navbar-menu').classList.toggle('hidden');
}

// set bo dem GA
ga.pageview(window.location.pathname);






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


      <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${IDGA}`}/>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${IDGA}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />





    </Head>


      <NextNProgress color="green" height={1}/>
      <Component {...pageProps} />

    </>
  );
}

export default MyApp
