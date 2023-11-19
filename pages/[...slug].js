import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/tong-quan/header'
import Footer from '../components/tong-quan/footer'
import { useRouter } from 'next/router'
import Link from "next/link"
import Script from 'next/script'


import Seodefault from '../components/seo-meta/seo-default'

import NextNProgress from "nextjs-progressbar"




import { getposthome,getpostcat,getalluriforseo,getPostDetailsByUri } from '../lib/api'


function OtherPages({setup,data,page,pagetype,slugpage,refff}) {

    const router = useRouter()


    if (router.isFallback) {
        return (
            <>
                <NextNProgress />
            </>
        )
    }



if(pagetype==="post"){

    if(data.postBy.fixgrap!="0"){
       var  anhdaidien = data.postBy.fixgrap
    }else{
       var  anhdaidien = data.postBy.featuredImage.node.sourceUrl
        
    }

    return (
        <>
      <Head>
      <title>{data.postBy.title}</title>
      <meta name="description" content={data.postBy.excerpt.trim()}/>
      <meta property="og:title" content={data.postBy.title}/>
      <meta property="og:description" content={data.postBy.excerpt.trim()}/>
      <meta property="og:url" content={`https://${setup.domainvc}/${slugpage}`}/>
      <meta property="article:published_time" content={data.postBy.date}/>
      <meta property="og:image" content={anhdaidien}/>

      </Head>
      <Seodefault  sitename={setup.domainvc}/>



      <section className="mx-auto container px-4">

        <div className="withbytoan px-4 mb-4 md:mb-0">

        <div className="flex flex-wrap items-center mt-10">
            
        <h1 className="font-semibold text-black text-3xl">{data.postBy.title}</h1>
        <h2 className="font-semibold text-black" dangerouslySetInnerHTML={{ __html: data.postBy.excerpt.trim() }}></h2>



          <div className="content toanle mt-5 post-details"
          dangerouslySetInnerHTML={{ __html: data.postBy.content }}
          >

          </div>

 


        </div>

        </div>


      


      
      </section>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-143304873-5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-143304873-5');
        `}
      </Script>


    

      <Footer/>
      </>
    )
}








}

export async function getServerSideProps(props) {

const ref = props.req.headers.referer
const userAgent = props.req.headers['user-agent'];

let device;


if (/facebookexternalhit/.test(userAgent) || /Facebot/.test(userAgent)){
        device = true;

}else if (ref.includes(props.req.headers.host)){
        device = true;

}else{
        device = false;
}










    let setupdata = {}
    setupdata.domain = process.env.dm
    setupdata.domainvc = props.req.headers.host

    const { params } = props
    const { slug } = params


    let data
    let pagetype = 'post';
    let slugpage = slug[0];
    const urrlnew = 'https://'+process.env.dm+'/'+encodeURI(slugpage);





        if(!device){
        return {
          redirect: {
            permanent: false,
            destination: urrlnew,
          },
          props:{},
        };
      }
    





        
         
    data = await getPostDetailsByUri(slugpage)

    if(data.postBy==null){
        return {
         notFound: true,
       }
    }


    
    



    return {
        props: {
            setup: setupdata,
            data: data,
            pagetype: pagetype,
            slugpage:slugpage,
            refff:'kaka_'+ref
        }
    }
}





export default OtherPages;
