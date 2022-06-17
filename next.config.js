const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins');
//const withOffline = require('next-offline')


const setup ={
  numposthome: 12,
  tieudehom:"Breaking K-Pop and K-Drama News",
  des_home:"Specializes in providing the most exclusive breaking news, gossip and gossip about the hottest K-pop stars.",
  anhdaidienmacdinh:"https://90rocksnet.vercel.app/ilovekpop.jpeg",
  locale:"en_US",
  lang:'en-US',
  sitename:"90rocksnet.vercel.app",
  siteurl:"https://90rocksnet.vercel.app",
  cmsdomain:"api.90rocks.net",
  siteredect:"https://90rocks.net",
  menu1: {"data":{"menu":{"menuItems":{"edges":[{"node":{"path":"/category/blackpink","label":"BLACKPINK"}},{"node":{"path":"/category/bts","label":"BTS"}},{"node":{"path":"/category/nmixx","label":"NMIXX"}},{"node":{"path":"/category/twice","label":"TWICE"}},{"node":{"path":"/category/txt","label":"TXT"}},{"node":{"path":"/category/rap","label":"RAP"}}]}}}},

}

const nextConfig = {
   
    env: {
        setup: setup,
        linkapi: "https://api.90rocks.net/graphql"
        
    },
    images: {
        domains: ['i0.wp.com',"api.90rocks.net","cms.ideassimple.com", '90rocks.net','secure.gravatar.com', 'babacricnews.s3.ap-south-1.amazonaws.com', 'www.betwaypartners.com'],
    },
    pwa: {
        dest: 'public',
        swSrc: '/public/service-worker.js',
    },
}



module.exports = withPlugins(
  [
    [withPWA, nextConfig],
  ],
  {
  
  async rewrites() {
    return [  
      
      {
        source: '/docs/:slug',
        destination: 'http://example.com/docs/:slug',
      },
    ]
  },
},
);

