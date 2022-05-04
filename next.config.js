const path = require('path');
//const allowedImageWordPressDomain = new URL( process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL ).hostname;
// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')
//const BuildDestination =(process.env.NODE_ENV=='production' ? '.next':'.build' );
const withPWA = require("next-pwa");

module.exports = withPWA({
	// async redirects() {
	// 	return [
	// 	  {
	// 		source: '/woocommerce',
	// 		destination: 'http://localhost:8020',
	// 		permanent: true,
	// 	  },
	// 	]
	//   },
	staticPageGenerationTimeout: 1000,
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
	  }, 

	reactStrictMode:true,
	
	//distDir: BuildDestination,
			

	trailingSlash: false,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}
		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	/**
	 * We specify which domains are allowed to be optimized.
	 * This is needed to ensure that external urls can't be abused.
	 * @see https://nextjs.org/docs/basic-features/image-optimization#domains
	 */
	images: {
		
		domains: [ 'images.unsplash.com' ,'via.placeholder.com','api.bugtech.ir','dkstatics-public.digikala.com','dkstatics-public-2.digikala.com', 'api.bugtech.ir' ],
	},
})