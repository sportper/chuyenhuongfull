import Link from 'next/link'


function Headertitle({title='',des=''}) {

  if(title =="" && des ==""){

return ('');
  }else{



return (
    <div className="flex flex-wrap items-center sm:mb-2 container mx-auto p-4">
            <div className="w-full mb-8 md:mb-0">
              {title ? <h3 className="mb-4 text-3xl  leading-tight text-black  tracking-tighter">{title}</h3> : ''}
              {des ? <p className="text-lg md:text-xl text-black">{des}</p> : ''}
            </div>
          </div>






      );
    
}
}



export default Headertitle;