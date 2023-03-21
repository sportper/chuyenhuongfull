//const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins');
//const withOffline = require('next-offline')




const nextConfig = {
   
    images: {
        domains: [""],
    }
    
}



module.exports = withPlugins(
  [
    [nextConfig],
  ],
  {
  
 
},
);

