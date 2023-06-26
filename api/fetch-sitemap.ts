import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query;
    try {
        const response = await axios.get(`/www.vintageframescompany.com/sitemap_products_1.xml?from=180922381&to=2156796545`);
        const sitemapXML: string = response.data;
        res.status(200).send(response);
    } catch (error) {
        console.error('Error fetching sitemap:', error);
        res.status(500).end();
    }
}