import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { url } = req.query;
    try {

        const response = await axios.get(`https://${url}/sitemap_products_2.xml?from=2156796609&amp;to=376476958749`);
        const sitemapXML: string = response.data;
        res.status(200).send(response);
    } catch (error) {
        console.error('Error fetching sitemap:', error);
        res.status(500).end();
    }
}
