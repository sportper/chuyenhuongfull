import '../public/css/tailwind/tailwind.min.css'
import '../public/css/custum.css'
import NextNProgress from "nextjs-progressbar";

 

function MyApp({ Component, pageProps }) {


  return (
    <>
    
      <NextNProgress color="red" height={1}/>
      <Component {...pageProps} />
      <script src="/js/main.js" defer=""/>      
    </>
  );
}


export default MyApp
