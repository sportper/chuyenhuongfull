/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'




export default function Phantrang() {
  return (

      <section className="py-24 bg-white" style={{backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")', backgroundPosition: 'center'}}>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
              <h3 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Sign up for our newsletter</h3>
              <p className="text-lg md:text-xl text-coolGray-500 font-medium">Stay in the loop with everything you need to know.</p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="mx-auto md:mr-0 md:max-w-md">
                <div className="flex flex-wrap mb-1">
                  <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
                    <input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm" type="text" placeholder="Enter your email" />
                  </div>
                  <div className="w-full md:w-auto"><a className="inline-block py-3 px-5 w-full leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm" href="#">Subscribe</a></div>
                </div>
                <span className="text-xs text-coolGray-500 font-medium">
                  <span>We care about your data in our</span>
                  <a className="text-green-500 hover:text-green-600" href="#">privacy policy</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
