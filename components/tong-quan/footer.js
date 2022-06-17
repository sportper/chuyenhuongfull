import Image from 'next/image'
import Link from "next/link"


function Footer() {
   
return (


    <section className="bg-white overflow-hidden" style={{ backgroundPosition: 'center'}}>
        <div id="M798692ScriptRootC1324978"></div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center md:pt-10 pb-12 -mx-4">
            <div className="w-full md:w-1/4 lg:w-auto px-4">
            <Link href="/">
              <a className="block mb-5 md:mb-0 max-w-max" href="#">
              <div className="sitetitle">BEST NEWS</div>
              </a>
              </Link>
            </div>
            <div className="w-full md:w-3/4 lg:flex-1 px-4">
              <div className="flex flex-wrap justify-end -mx-3 lg:-mx-6">
                <div className="w-full md:w-auto p-3 md:py-0 md:px-6">
                <Link href="/privacy">
                <a className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium">Privacy</a>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a href="#">
        <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5" id="btn-back-to-top">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" /></svg>
      </button>
      </a>
      </section>


      );
    
};



export default Footer;
