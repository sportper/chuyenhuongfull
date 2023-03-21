import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/tong-quan/header'
import Footer from '../components/tong-quan/footer'
import Headertitle from '../components/tong-quan/headtitle'
import Baiviet from '../components/tong-quan/baiviet'
import { useRouter } from 'next/router'


import Seodefault from '../components/seo-meta/seo-default'

import { getposthome } from '../lib/api'


export default function Home({setup,data,page,pagetype,slugpage}) {


  return (
    <>
      <Head>
      <title>{setup.domainvc}</title>
      <meta name="description" content={setup.domainvcn}/>
      <meta property="og:description" content={setup.domainvc}/>
      <meta property="og:url" content={"https://"+setup.domainvc+".vercel.app"}/>
      </Head>
      <Seodefault sitename={setup.domainvc}/>


      <section className="mx-auto container px-4">
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <Headertitle/>
          {data.edges.map((item,index) => (<Baiviet key={index} data={item}/>))}
      </div>




      


      </section>


      <Footer/>
      </>


      
  )
}


export async function getStaticProps() {

  
    let setupdata = {}
    setupdata.domain = process.env.domaingoc;
    setupdata.domainvc = process.env.domainvc;
   


    const data = await getposthome(1)

  return {
    props: {
      setup: setupdata,
            data: data
    },
    revalidate: 15 //10 minutes
  }
}

