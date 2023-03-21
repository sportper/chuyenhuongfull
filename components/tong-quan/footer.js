import Image from 'next/image'
import Link from "next/link"


function Footer() {
   
return (


    <section className="bg-white overflow-hidden" style={{ backgroundPosition: 'center'}}>
    <div className="w-full text-center md:w-auto p-3 md:py-0 md:px-6"><Link className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium" href="/privacy">Privacy</Link></div>
        
      </section>


      );
    
};



export default Footer;
