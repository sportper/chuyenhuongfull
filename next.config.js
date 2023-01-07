//const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins');
//const withOffline = require('next-offline')




const nextConfig = {
   
    images: {
        domains: ["taxo.info","sportper.com","cdn.sportper.com",'i0.wp.com',"api.90rocks.net","nbasport247.com","aweu.info","newsupdatess.info","nhadep99.com","kenhthoisu.net","danhgiachat.com","ghiennaunuong.com","cdnimg.ideassimple.com","ideassimple.com", '90rocks.net','secure.gravatar.com', 'babacricnews.s3.ap-south-1.amazonaws.com'],
    }
    
}



module.exports = withPlugins(
  [
    [nextConfig],
  ],
  {
  
 
},
);

