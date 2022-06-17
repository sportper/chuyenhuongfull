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
      <title>{setup.tieudehom}</title>
      <meta name="description" content={setup.des_home}/>
      <meta property="og:title" content={setup.tieudehom}/>
      <meta property="og:description" content={setup.des_home}/>
      <meta property="og:url" content={setup.siteurl}/>
      <meta property="og:image" content={`${setup.siteurl}/news-banner.jpeg`}/>




      </Head>
      <Seodefault locale={setup.locale}  sitename={setup.sitename}/>

      <Header menu={setup.menu1} titlehome={setup.tieudehom}/>

      <section className="mx-auto container px-4">
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <Headertitle des={setup.des_home}/>
          {data.edges.map((item,index) => (<Baiviet key={index} data={item}/>))}
      </div>

      <Phantrang rot={slugpage} pagec={page} sau={data.pageInfo.offsetPagination.hasMore} truoc={data.pageInfo.offsetPagination.hasPrevious}/>



      


      </section>


      <Footer/>
      </>


      
  )
}


export async function getStaticProps() {

  
    let setupdata = {}
    setupdata.tieudehom = process.env.titleanddes.split('||')[0]
    setupdata.des_home = process.env.titleanddes.split('||')[1]
    setupdata.locale = process.env.localeandlang.split('||')[0]
    setupdata.lang = process.env.localeandlang.split('||')[1]
    setupdata.sitename = process.env.sitenameandsiteurl.split('||')[0]
    setupdata.siteurl = process.env.sitenameandsiteurl.split('||')[1]
    setupdata.cmsdomain = process.env.cmsdomainandsiteredect.split('||')[0]
    setupdata.siteredect = process.env.cmsdomainandsiteredect.split('||')[1]

    const mangmemnu = process.env.menu1.split("||")

    const menu1 = []
    mangmemnu.forEach((element) => {
        const menucon = {}
        menucon.text = element.split('|')[1]
        menucon.slug = element.split('|')[0]
        menu1.push(menucon)

    });
    setupdata.menu1 = menu1


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

