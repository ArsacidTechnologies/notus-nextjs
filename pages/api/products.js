import axios from "axios";
import { GET_Products } from "../../src/constants/endpoints";

export default async function handler(req, res) {
	if (req.method === 'GET'){
		const options = {
			method: 'GET',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			//   token: `Bearer ${process.env.DAILY_API_KEY}`,
			},}
		let text 		= 	req.query?.text
		let page 		= 	req.query?.page

		var uri = `${GET_Products}/?text=${text}&page=${page}`
		var URI = encodeURI(uri); 
		console.log(URI)
		const {data:response} = await axios.get(
			URI,
			options
		  );	
		
		if (response.error) {
		return res.status(500).json(response.error);
		}
	
		return res.status(200).json(response);

	}
   
	return res.status(500);
}