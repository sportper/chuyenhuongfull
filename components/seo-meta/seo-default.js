import Link from 'next/link'
import Head from "next/head"


function Seodefault() {
    const locale = process.env.setup.locale
    const sitename = process.env.setup.sitename


    return (

        <Head>


            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />   


            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>



            <meta property="og:locale" content={locale}/>
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content={sitename} />
            <meta name="twitter:card" content="summary_large_image" />
           

            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143304873-23" dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-143304873-3');`
            }}/>
            <script src="https://jsc.mgid.com/9/0/90rocks.net.1324978.js" async></script>
            



           






        </Head>
        
       
    );
}

export default Seodefault;