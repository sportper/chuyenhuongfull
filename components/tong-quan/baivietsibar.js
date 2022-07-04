import Link from 'next/link'
import Image from 'next/image'



function Baivietsidebar({data}) {

//return JSON.stringify(data)

const manganh = {}

{data.node.featuredImage.node.mediaDetails.sizes.map((itp)=>(

Object.assign(manganh, {[itp.name]: itp.sourceUrl})



))}

let linkanh


if(manganh.thumbnail){
   linkanh = manganh.thumbnail;

}else if(manganh.medium_large){
   linkanh = manganh.medium_large;

}else{
   linkanh = data.node.featuredImage.node.sourceUrl;

}

if(!linkanh){
   linkanh = '/nothumb.jpeg';
}

return (
    <div className="w-full px-4 mb-8">
              <Link  href={data.node.uri}>
              <a>
                <Image className="w-full block mb-6 overflow-hidden rounded-md" src={linkanh} alt="" height="225" width="400" />
              </a>
              </Link>
              <p className="mb-2 text-coolGray-500">
              <Link href={`/category/${data.node.categories.nodes[0].slug}`}><a>{data.node.categories.nodes[0].name}</a></Link> • {data.node.date.slice(0,10)}</p>
              <Link  href={data.node.uri}><a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-black">{data.node.title}</a></Link>
            </div>

      );
    
}




export default Baivietsidebar;