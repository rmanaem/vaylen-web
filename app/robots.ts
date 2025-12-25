import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',       // Don't index your API routes
                '/dashboard/', // Don't index the private user dashboard (if applicable)
                '/admin/',     // Don't index admin areas
            ],
        },
        // We will create this sitemap next—it's the map for the bots.
        sitemap: 'https://vaylen.app/sitemap.xml',
    };
}