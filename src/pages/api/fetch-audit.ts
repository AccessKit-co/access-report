import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query;
    try {
        console.log('urlaudit', url);
        const response = await axios.get(`https://wave.webaim.org/api/request?key=FARz2hsx3220&reporttype=4&url=${url}`);
        console.log('response', response);
        console.log('response data', response.data);
        console.log('response data categories', response.data.categories);
        res.status(200).send(response.data.categories);
    } catch (error) {
        console.error('Error fetching sitemap:', error);
        res.status(500).end();
    }
}