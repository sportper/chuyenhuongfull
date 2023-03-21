import Link from 'next/link'
import Head from "next/head"


function Seodefault({locale,sitename}) {
   
    return (

        <Head>


            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />   


            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>



            <meta property="og:locale" content="en_US"/>
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content={sitename+'.vercel.app'} />
            <meta name="twitter:card" content="summary_large_image" />
           


        </Head>
        
       
    );
}

export default Seodefault;