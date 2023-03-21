import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/tong-quan/header'
import Footer from '../components/tong-quan/footer'
import Headertitle from '../components/tong-quan/headtitle'
import Baiviet from '../components/tong-quan/baiviet'
import Phantrang from '../components/tong-quan/phantrang'
import { useRouter } from 'next/router'


import Seodefault from '../components/seo-meta/seo-default'

import { getposthome } from '../lib/api'


export default function privacy({setup,data}) {


  return (
    <>
      <Head>
      <title>Privacy {setup.domainvc}</title>
      <meta name="description" content={setup.des_home}/>




      </Head>
      <Seodefault  sitename={setup.domainvc}/>



      <section className="mx-auto container px-4">
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
        <Headertitle  title="Privacy Policy"/>

        <div className="content container mx-auto p-4">
    
<h2>Who we are</h2>



<p>Our website address is: {setup.domainvc}</p>



<h2>Comments</h2>



<p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>



<p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>



<h2>Media</h2>



<p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>



<h2>Cookies</h2>



<p>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>



<p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>



<p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>



<p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>



<h2>Embedded content from other websites</h2>



<p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>



<p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>



<h2>Who we share your data with</h2>



<p>If you request a password reset, your IP address will be included in the reset email.</p>



<h2>How long we retain your data</h2>



<p>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p>



<p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p>



<h2>What rights you have over your data</h2>



<p>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>



<h2>Where your data is sent</h2>



<p>Visitor comments may be checked through an automated spam detection service.</p>
      </div>

      </div>




      


      </section>


      <Footer/>
      </>


      
  )
}


export async function getServerSideProps(context) {
let setupdata = {}
    setupdata.domain = process.env.domaingoc
    setupdata.domainvc = process.env.domainvc

  return {
    props: {setup: setupdata}, // will be passed to the page component as props
  }
}



