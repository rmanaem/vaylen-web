import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// This looks for a "content" folder in the root of your project
const contentDirectory = path.join(process.cwd(), 'content');

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    description: string;
    content: string; // The raw markdown content
};

export function getSortedPosts(): Omit<BlogPost, 'content'>[] {
    // 1. Create the content directory if it doesn't exist (safety check)
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);

    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(contentDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                ...(data as { title: string; date: string; description: string }),
            };
        });

    // 2. Sort posts by date (newest first)
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): BlogPost | null {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);

    return {
        slug,
        content,
        ...(data as { title: string; date: string; description: string }),
    };
}