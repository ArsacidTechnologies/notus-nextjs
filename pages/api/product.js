import axios from "axios";
import { GET_Product } from "../../src/constants/endpoints";

export default async function handler(req, res) {
	// if (req.method === 'POST') {
	//   const options = {
	// 	method: 'POST',
	// 	headers: {
	// 	  Accept: 'application/json',
	// 	  'Content-Type': 'application/json',
	// 	  Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
	// 	},
	// 	body: JSON.stringify({
	// 	  properties: {
	// 		enable_prejoin_ui: true,
	// 		enable_network_ui: true,
	// 		enable_screenshare: true,
	// 		enable_chat: true,
	// 		exp: Math.round(Date.now() / 1000) + 300,
	// 		eject_at_room_exp: true,
	// 	  },
	// 	}),
	//   };
   
	//   const dailyRes = await fetch(
	// 	`${PRODUCTS_ENDPOINTS}/rooms`,
	// 	options
	//   );
   
	//   const response = await dailyRes.json();
   
	//   if (response.error) {
	// 	return res.status(500).json(response.error);
	//   }
   
	//   return res.status(200).json(response);
	// }
	if (req.method === 'GET'){
		const options = {
			method: 'GET',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			  token: `Bearer ${process.env.DAILY_API_KEY}`,
			},}
		let id 		= 	req.query?.id	
		const {data:response} = await axios.get(
			`${GET_Product}/${id}`,
			options
		  );	
		
		if (response.error) {
		return res.status(500).json(response.error);
		}
	
		return res.status(200).json(response);

	}
   
	return res.status(500);
}
 