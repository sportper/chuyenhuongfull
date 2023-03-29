import Link from 'next/link'
import Image from 'next/image'



function Baiviet({data}) {



let linkanh


if(data.node.featuredImage === null){
   linkanh = '/nothumb.jpeg';

}else{

linkanh = data.node.featuredImage.node.sourceUrl;

}


return (
    <div className="w-full md:w-1/2 px-4 mb-8 lg:w-1/3">
              <Link  href={data.node.uri}>
              <a>
                <img className="w-full block mb-6 overflow-hidden rounded-md" src={linkanh} alt="" height="225" width="400" />
              </a>
              </Link>
              <p className="mb-2 text-coolGray-500">
              <b>{data.node.categories.nodes[0].name}</b> • {data.node.date.slice(0,10)}</p>
              <Link  href={data.node.uri}><a className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-black">{data.node.title}</a></Link>
            </div>

      );
    
}




export default Baiviet;
