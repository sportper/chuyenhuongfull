import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/tong-quan/header'
import Footer from '../components/tong-quan/footer'
import Headertitle from '../components/tong-quan/headtitle'
import Baiviet from '../components/tong-quan/baiviet'
import Phantrang from '../components/tong-quan/phantrang'
import { useRouter } from 'next/router'
import Link from "next/link"
import Baivietsidebar from '../components/tong-quan/baivietsibar'
import Baivietcm from '../components/tong-quan/baivietchuyenmuc'

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
else {


if(pagetype==="homepage"){

    return (
        <>
      <Head>
      <title>{setup.tieudehom}</title>
      <meta name="description" content={setup.des_home}/>
      <meta property="og:title" content={setup.tieudehom}/>
      <meta property="og:description" content={setup.des_home}/>
      <meta property="og:url" content={setup.siteurl}/>

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

}

if(pagetype==="category"){

    return (
        <>
      <Head>
      <title>{data.category.seo.title}</title>
      <meta name="description" content={data.category.seo.metaDesc}/>
      <meta property="og:title" content={data.category.seo.title}/>
      <meta property="og:description" content={data.category.seo.metaDesc}/>
      <meta property="og:url" content={`${setup.siteurl}/category/${slugpage}`}/>

      </Head>
      <Seodefault locale={setup.locale}  sitename={setup.sitename}/>

      <Header menu={setup.menu1} titlehome={setup.tieudehom}/>

      <section className="mx-auto container px-4">
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <Headertitle des={data.category.seo.metaDesc} title={data.category.seo.title}/>
          {data.posts.edges.map((item,index) => (<Baiviet key={index} data={item}/>))}
      </div>

      <Phantrang rot={`/category/${slugpage}`} pagec={page} sau={data.posts.pageInfo.offsetPagination.hasMore} truoc={data.posts.pageInfo.offsetPagination.hasPrevious}/>



      


      </section>


      <Footer/>
      </>
    )
}

if(pagetype==="post"){



   

let bienbreak = []


data.postBy.seo.breadcrumbs.forEach((element,key) => {
  
if(key ===0){
    const mang = {}

    mang.text = 'Home';
    mang.url = setup.siteurl;
    bienbreak.push(mang)
}else{

    const urlmacdinh = element.url.split('/')
    const mang = {}


    if(urlmacdinh[3] === "category"){
        if(urlmacdinh[5]){

            

            mang.url = '/category/'+urlmacdinh[5]
            mang.text = element.text
            bienbreak.push(mang)


        }else{
            mang.url = '/category/'+urlmacdinh[4]
            mang.text = (element.text)
            bienbreak.push(mang)


        }
    }





}



});



let htmltagstitle = []
let htmltagsarlistpost = []

if(data.postBy.tags.nodes.length >0){

data.postBy.tags.nodes.forEach((element,key) => {
htmltagstitle.push(element.name)

if(element.posts.nodes.length>0){

    element.posts.nodes.forEach((element,key) => {
htmltagsarlistpost.push(element)

    })

}




});

}

let listpostincat = []
data.postBy.categories.nodes.forEach((element,key) => {

if(element.posts.nodes.length>0){

element.posts.nodes.forEach((element,key) => {
listpostincat.push(element)

    })
}
})



  
   
let mangjson = JSON.parse(data.postBy.seo.schema.raw)

const obj = {};

mangjson['@graph'].forEach((element,key) => {
const typeee = element['@type']


obj[typeee] = element




})

obj['Organization']['@id'] = setup.siteurl+'/#organization';
obj['Organization']['url'] = setup.siteurl;
//obj['Organization']['logo']['@id'] = obj['Organization']['logo']['@id'].replace(process.env.setup.cmsdomain,process.env.setup.sitename)

delete obj['Organization']['logo']
delete obj['Organization']['image']

obj['WebSite']['@id'] = setup.siteurl+'/#website';
obj['WebSite']['url'] = setup.siteurl;
obj['WebSite']['name'] = setup.sitename;
obj['WebSite']['description'] = setup.tieudehom;
obj['WebSite']['publisher']['@id'] = setup.siteurl+'/#organization';
obj['WebSite']['inLanguage'] = setup.lang;


delete obj['WebSite']['potentialAction']

obj['ImageObject']['inLanguage'] = setup.lang;
obj['ImageObject']['@id'] = obj['ImageObject']['@id'].replace(setup.cmsdomain,setup.sitename)

obj['WebPage']['@id'] = obj['WebPage']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['WebPage']['url'] = obj['WebPage']['url'].replace(setup.cmsdomain,setup.sitename)
obj['WebPage']['isPartOf']['@id'] = obj['WebPage']['isPartOf']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['WebPage']['primaryImageOfPage']['@id'] = obj['WebPage']['isPartOf']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['WebPage']['breadcrumb']['@id'] = obj['WebPage']['isPartOf']['@id'].replace(setup.cmsdomain,setup.sitename)

delete obj['WebPage']['potentialAction']

obj['BreadcrumbList']['@id'] = obj['BreadcrumbList']['@id'].replace(setup.cmsdomain,setup.sitename)

obj['BreadcrumbList']['itemListElement'].forEach((element,key) => {

    if(element.item){
const checkcat = element.item.split('/')
if(checkcat[3]==="category"){
    if(checkcat[5]){
obj['BreadcrumbList']['itemListElement'][key]['item'] = checkcat[0]+'/'+checkcat[1]+'/'+setup.sitename+'/'+checkcat[3]+'/'+checkcat[5]

    }else{
    obj['BreadcrumbList']['itemListElement'][key]['item'] = obj['BreadcrumbList']['itemListElement'][key]['item'].replace(setup.cmsdomain,setup.sitename)

    }

}else{
    obj['BreadcrumbList']['itemListElement'][key]['item'] = obj['BreadcrumbList']['itemListElement'][key]['item'].replace(setup.cmsdomain,setup.sitename)
}

}
})

obj['Article']['@id'] = obj['Article']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['Article']['isPartOf']['@id'] = obj['Article']['isPartOf']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['Article']['author']['@id'] = obj['Article']['author']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['Article']['mainEntityOfPage']['@id'] = obj['Article']['mainEntityOfPage']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['Article']['publisher']['@id'] = obj['Article']['publisher']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['Article']['image']['@id'] = obj['Article']['image']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['Person']['@id'] = obj['Article']['@id'].replace(setup.cmsdomain,setup.sitename)
obj['Person']['image']['@id'] = obj['Article']['image']['@id'].replace(setup.cmsdomain,setup.sitename)



let jsonokilfd = {}
jsonokilfd['@context'] = 'https://schema.org'
jsonokilfd['@graph'] = []

for (const [key, value] of Object.entries(obj)) {
jsonokilfd['@graph'].push(value)

}



const jsonokiem = JSON.stringify(jsonokilfd)


    return (
        <>
      <Head>
      <title>{data.postBy.seo.title}</title>
      <meta name="description" content={data.postBy.seo.metaDesc}/>
      <meta property="og:title" content={data.postBy.seo.title}/>
      <meta property="og:description" content={data.postBy.seo.metaDesc}/>
      <meta property="og:url" content={`${setup.siteurl}/${slugpage}`}/>
      <meta property="article:publisher" content={setup.siteurl}/>
      <meta property="article:published_time" content={data.postBy.date}/>
      <meta property="og:image" content={data.postBy.featuredImage.node.sourceUrl}/>

      <script type="application/ld+json" className="toan-le-coder" dangerouslySetInnerHTML={{ __html: jsonokiem }}></script>




      </Head>
      <Seodefault locale={setup.locale}  sitename={setup.sitename}/>

      <Header menu={setup.menu1} titlehome={setup.tieudehom}/>


      <section className="mx-auto container px-4">

      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <div className="w-full px-4 mb-4 md:mb-0 lg:w-2/3">

        <div className="flex flex-wrap items-center mt-10">
          <div className="w-full">
            <ul className="flex flex-wrap items-center gap-x-3 mb-2">

            <li>
                  <svg className="mr-0" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3334 5.33334L9.3334 1.82667C8.96671 1.4987 8.49202 1.31738 8.00006 1.31738C7.50811 1.31738 7.03341 1.4987 6.66673 1.82667L2.66673 5.33334C2.45498 5.52272 2.286 5.75504 2.17104 6.01483C2.05609 6.27463 1.9978 6.55592 2.00006 6.84V12.6667C2.00006 13.1971 2.21078 13.7058 2.58585 14.0809C2.96092 14.456 3.46963 14.6667 4.00006 14.6667H12.0001C12.5305 14.6667 13.0392 14.456 13.4143 14.0809C13.7894 13.7058 14.0001 13.1971 14.0001 12.6667V6.83334C14.0014 6.55038 13.9426 6.27036 13.8277 6.01179C13.7128 5.75322 13.5443 5.52197 13.3334 5.33334ZM9.3334 13.3333H6.66673V10C6.66673 9.82319 6.73697 9.65362 6.86199 9.5286C6.98702 9.40357 7.15659 9.33334 7.3334 9.33334H8.66673C8.84354 9.33334 9.01311 9.40357 9.13813 9.5286C9.26316 9.65362 9.3334 9.82319 9.3334 10V13.3333ZM12.6667 12.6667C12.6667 12.8435 12.5965 13.0131 12.4715 13.1381C12.3464 13.2631 12.1769 13.3333 12.0001 13.3333H10.6667V10C10.6667 9.46957 10.456 8.96086 10.0809 8.58579C9.70587 8.21072 9.19716 8 8.66673 8H7.3334C6.80296 8 6.29426 8.21072 5.91918 8.58579C5.54411 8.96086 5.3334 9.46957 5.3334 10V13.3333H4.00006C3.82325 13.3333 3.65368 13.2631 3.52866 13.1381C3.40363 13.0131 3.3334 12.8435 3.3334 12.6667V6.83334C3.33352 6.73868 3.35379 6.64513 3.39287 6.55892C3.43196 6.47271 3.48895 6.39581 3.56006 6.33334L7.56006 2.83334C7.68172 2.72646 7.83812 2.66751 8.00006 2.66751C8.162 2.66751 8.3184 2.72646 8.44006 2.83334L12.4401 6.33334C12.5112 6.39581 12.5682 6.47271 12.6073 6.55892C12.6463 6.64513 12.6666 6.73868 12.6667 6.83334V12.6667Z" fill="#BBC3CF" />
                  </svg>
              </li>

          {bienbreak.map((item,index) => (<li key={index}><Link href={item.url}><a className="flex font-medium text-xs text-coolGray-500 hover:text-coolGray-700" href={item.url} dangerouslySetInnerHTML={{ __html: item.text }}></a></Link></li>))}

            

             


            </ul>
            <h1 className="font-semibold text-black text-3xl">{data.postBy.seo.title}</h1>
          </div>


          <div className="content toanle mt-5 post-details"
          dangerouslySetInnerHTML={{ __html: data.postBy.content }}
          >

          </div>
          <div id="M798692ScriptRootC1324976"></div>
          <script src="https://jsc.mgid.com/9/0/90rocks.net.1324976.js" async></script>


          {htmltagsarlistpost.length>1 ?

          <div className="boxlienquan mb-10 w-full">

          <h3 className="mb-3 font-heading">The post for tags <b>{htmltagstitle.map((item) => (item))}</b> you can like:</h3>
          <ul>
          {htmltagsarlistpost.map((item,key) => (<li key={key} className="flex mb-2 items-center"><h3 className="text-xl"><Link href={item.slug}>{item.title}</Link></h3></li>))}
          </ul>
          </div>
          :''}

          {listpostincat.length>1 ?

          <h3 className="mb-3 text-3xl font-heading">Same category</h3>
          :''}

{listpostincat.length>1 ?
            
          <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">


          
          {listpostincat.map((item,key) => (<Baivietcm key={key} data={item}/>))}
          
          </div>
          :''}




            
            







        </div>

        </div>

        <div className="w-full px-4 mb-4 md:mb-0 lg:w-1/3">
        <h3 className="mb-4 text-xl md:text-3xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter p-4 mt-10">News Post</h3>

          {data.posts.edges.map((item,index) => (<Baivietsidebar key={index} data={item}/>))}


        

        </div>
      </div>

      


      
      </section>


      <Footer/>
      </>
    )
}








}



export async function getServerSideProps(props) {


     

    const ref = props.req.headers.referer


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




    const { params } = props
    const { slug } = params


    let page = 1
    let data
    let pagetype
    let slugpage

    if(slug[0] === "page"){
         pagetype = 'homepage'
         page = slug[1]
         data = await getposthome(page)
         slugpage = ''



    }else if(slug[0] === "category"){
         pagetype = 'category'

         if(slug[3]){
            page = slug[3]

         }
         
         slugpage = slug[1]
         data = await getpostcat(slugpage,page)


    }else{
         pagetype = 'post'
         slugpage = slug[0]


    if(ref==="https://l.facebook.com/"  ||ref==="https://l.facebook.com" ||ref==="https://m.facebook.com" ||ref==="http://m.facebook.com" ){


    const urrlnew = setupdata.siteredect+'/'+slugpage

    return {
  redirect: {
    permanent: false,
    destination: urrlnew,
  },
  props:{},
};
}



        
         
         data = await getPostDetailsByUri(slugpage)


    }
    



    return {
        props: {
            setup: setupdata,
            data: data,
            page: page,
            pagetype: pagetype,
            slugpage:slugpage,
            refff:ref
        }
    }
}





export default OtherPages;