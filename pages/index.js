import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/tong-quan/header'
import Footer from '../components/tong-quan/footer'
import Headertitle from '../components/tong-quan/headtitle'
import Baiviet from '../components/tong-quan/baiviet'
import Phantrang from '../components/tong-quan/phantrang'
import { useRouter } from 'next/router'


import Seodefault from '../components/seo-meta/seo-default'

import { getposthome } from '../lib/api'


export default function Home({setup,data,page,pagetype,slugpage}) {


  return (
    <>
      <Head>
      <title>{process.env.setup.tieudehom}</title>
      <meta name="description" content={process.env.setup.des_home}/>
      <meta property="og:title" content={process.env.setup.tieudehom}/>
      <meta property="og:description" content={process.env.setup.des_home}/>
      <meta property="og:url" content={process.env.setup.siteurl}/>
      <meta property="og:image" content={process.env.setup.anhdaidienmacdinh}/>




      </Head>
      <Seodefault/>

      <Header menu={setup.menu1}/>

      <section className="mx-auto container px-4">
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <Headertitle des={process.env.setup.des_home} title={process.env.setup.tieudehom}/>
          {data.edges.map((item,index) => (<Baiviet key={index} data={item}/>))}
      </div>

      <Phantrang rot={slugpage} pagec={page} sau={data.pageInfo.offsetPagination.hasMore} truoc={data.pageInfo.offsetPagination.hasPrevious}/>



      


      </section>


      <Footer/>
      </>


      
  )
}


export async function getStaticProps() {

  
  const setupdata = process.env.setup
  const data = await getposthome(1)

  return {
    props: {
      setup: setupdata,
            data: data,
            page:1,
            pagetype: 'homepage',
            slugpage:''
    },
    revalidate: 15 //10 minutes
  }
}

