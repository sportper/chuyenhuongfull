import Link from 'next/link'
import Image from 'next/image'



function Baivietcm({data}) {

//return JSON.stringify(data)
let linkanh

const manganh = {}

if(data.featuredImage === null){
   linkanh = '/nothumb.jpeg';

}else{
{data.featuredImage.node.mediaDetails.sizes.map((itp)=>(

Object.assign(manganh, {[itp.name]: itp.sourceUrl})



))}



if(manganh.thumbnail){
   linkanh = manganh.thumbnail;

}else if(manganh.medium_large){
   linkanh = manganh.medium_large;

}else{
   linkanh = data.featuredImage.sourceUrl;

}
}



return (
    <div className="w-full md:w-1/2 px-4 mb-8 lg:w-1/2">
              <Link  href={data.uri}>
              <a>
                <Image className="w-full block mb-6 overflow-hidden rounded-md" src={linkanh} alt="" height="225" width="400" />
              </a>
              </Link>
              <p className="mb-2 text-coolGray-500">
              <Link href={`/category/${data.categories.nodes[0].slug}`}><a>{data.categories.nodes[0].name}</a></Link> • {data.date.slice(0,10)}</p>
              <Link  href={data.uri}><a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-black">{data.title}</a></Link>
            </div>

      );
    
}




export default Baivietcm;