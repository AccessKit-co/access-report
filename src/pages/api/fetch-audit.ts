import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query; // get the url from the query string
    try {
        const response = await axios.get(`https://wave.webaim.org/api/request?key=FARz2hsx3220&reporttype=4&url=${url}`); // fetch the scan from the WAVE api
        res.status(200).send(response.data.categories);
    } catch (error) {
        console.error('Error fetching sitemap:', error);
        res.status(500).end();
    }
}