'use client';

import { useEffect } from 'react';

export default function ThemeFavicon() {
    useEffect(() => {
        // Remove default favicon
        const defaultFavicon = document.querySelector('link[rel="icon"]');

        // Create theme-aware favicon links
        const lightModeFavicon = document.createElement('link');
        lightModeFavicon.rel = 'icon';
        lightModeFavicon.href = '/favicon-onyx.ico';
        lightModeFavicon.media = '(prefers-color-scheme: light)';

        const darkModeFavicon = document.createElement('link');
        darkModeFavicon.rel = 'icon';
        darkModeFavicon.href = '/favicon-silver.ico';
        darkModeFavicon.media = '(prefers-color-scheme: dark)';

        // Insert into head
        document.head.appendChild(lightModeFavicon);
        document.head.appendChild(darkModeFavicon);

        // Cleanup
        return () => {
            lightModeFavicon.remove();
            darkModeFavicon.remove();
        };
    }, []);

    return null;
}
