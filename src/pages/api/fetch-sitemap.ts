import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query; // get the url from the query string
    try {
        const response = await axios.get(`https://${url}`);
        const sitemapXML: string = response.data; // get the sitemap from the response
        res.status(200).send(sitemapXML);
    } catch (error) {
        console.error('Error fetching sitemap:', error);
        res.status(500).end();
    }
}
