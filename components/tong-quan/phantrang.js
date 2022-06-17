import Link from 'next/link'


function Phantrang({rot = '',pagec='',sau = true, truoc = true}) {

 
let sauhtml =``
let truochtml =``
 
if(sau){
  sauhtml = <Link href={`${rot}/page/${pagec*1+1}`}><a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium">
          <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-8-6">
            <path d="M4.71006 6.00005L1.17006 9.54005C0.983805 9.72741 0.879264 9.98087 0.879264 10.2451C0.879264 10.5092 0.983805 10.7627 1.17006 10.9501C1.26302 11.0438 1.37362 11.1182 1.49548 11.1689C1.61734 11.2197 1.74804 11.2459 1.88006 11.2459C2.01207 11.2459 2.14277 11.2197 2.26463 11.1689C2.38649 11.1182 2.49709 11.0438 2.59006 10.9501L6.83006 6.71005C6.92378 6.61709 6.99818 6.50649 7.04895 6.38463C7.09972 6.26277 7.12585 6.13206 7.12585 6.00005C7.12585 5.86804 7.09972 5.73733 7.04895 5.61547C6.99818 5.49362 6.92378 5.38301 6.83006 5.29005L2.59006 1.00005C2.49662 0.907371 2.3858 0.834046 2.26396 0.784281C2.14212 0.734517 2.01166 0.70929 1.88006 0.710051C1.74845 0.70929 1.61799 0.734517 1.49615 0.784281C1.37431 0.834046 1.2635 0.907371 1.17006 1.00005C0.983804 1.18741 0.879263 1.44087 0.879263 1.70505C0.879263 1.96924 0.983804 2.22269 1.17006 2.41005L4.71006 6.00005Z" fill="currentColor" />
          </svg>
        </a>
        </Link>

}
if(truoc){
  truochtml = <Link href={`${rot}/page/${pagec*1-1}`}><a className="disabled:disabled inline-flex items-center justify-center w-11 h-11 text-coolGray-300 hover:text-coolGray-400 font-medium border-r border-coolGray-100">
          <svg width={8} height={12} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-7-6">
            <path d="M3.28994 5.99995L6.82994 2.45995C7.01619 2.27259 7.12074 2.01913 7.12074 1.75495C7.12074 1.49076 7.01619 1.23731 6.82994 1.04995C6.73698 0.95622 6.62638 0.881826 6.50452 0.831057C6.38266 0.780288 6.25196 0.75415 6.11994 0.75415C5.98793 0.75415 5.85723 0.780288 5.73537 0.831057C5.61351 0.881826 5.50291 0.95622 5.40994 1.04995L1.16994 5.28995C1.07622 5.38291 1.00182 5.49351 0.951053 5.61537C0.900284 5.73723 0.874146 5.86794 0.874146 5.99995C0.874146 6.13196 0.900284 6.26267 0.951053 6.38453C1.00182 6.50638 1.07622 6.61699 1.16994 6.70995L5.40994 10.9999C5.50338 11.0926 5.6142 11.166 5.73604 11.2157C5.85787 11.2655 5.98834 11.2907 6.11994 11.2899C6.25155 11.2907 6.38201 11.2655 6.50385 11.2157C6.62569 11.166 6.7365 11.0926 6.82994 10.9999C7.01619 10.8126 7.12074 10.5591 7.12074 10.2949C7.12074 10.0308 7.01619 9.77731 6.82994 9.58995L3.28994 5.99995Z" fill="currentColor" />
          </svg>
        </a>
        </Link>


}


return (
    <div className="flex justify-center mx-auto max-w-max bg-white border border-coolGray-100 rounded-md shadow-lg  mb-10">

    {truochtml}

        

        <a className="inline-flex items-center justify-center w-11 h-11 text-coolGray-300 text-green-500 font-medium border-r border-coolGray-100" href="javascript:void(0)" data-config-id="auto-txt-21-6">{pagec}</a>




       {sauhtml}
      </div>





      );
    

}



export default Phantrang;