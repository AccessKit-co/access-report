import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query;
    try {
        console.log('url', url);
        const response = await axios.get(`https://${url}`);
        console.log('response', response);
        const sitemapXML: string = response.data;
        res.status(200).send(sitemapXML);
    } catch (error) {
        console.error('Error fetching sitemap:', error);
        res.status(500).end();
    }
}