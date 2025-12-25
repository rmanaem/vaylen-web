import { getPostData, getSortedPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Metadata } from 'next';
import StandardPage from '../../components/StandardPage';

// Define the Props type according to Next.js 15+ changes
type Props = {
    params: Promise<{ slug: string }>;
};

// 1. Generate Static Paths (SSG)
// This tells Next.js to pre-build these pages at deploy time for instant loading.
export async function generateStaticParams() {
    const posts = getSortedPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// 2. SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params; // Await params (Next.js 15+ requirement)
    const post = getPostData(slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} | Vaylen`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
        },
    };
}

// 3. Custom Components Map
// If you use Tailwind Typography, you don't strictly need this, 
// but it's great for overriding specific elements.
const components = {
    h1: (props: any) => <h1 className="text-3xl font-bold text-ink mt-8 mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold text-ink mt-8 mb-4" {...props} />,
    p: (props: any) => <p className="text-ink-subtle leading-relaxed mb-4" {...props} />,
    a: (props: any) => <a className="text-blue-400 hover:underline" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-5 mb-4 text-ink-subtle space-y-1" {...props} />,
    li: (props: any) => <li className="pl-1" {...props} />,
};

// 4. The Page Component
export default async function BlogPost({ params }: Props) {
    const { slug } = await params; // Await params here too!
    const post = getPostData(slug);

    if (!post) {
        notFound();
    }

    return (
        <StandardPage>
            <article className="max-w-3xl mx-auto">

                {/* Navigation & Header */}
                <header className="mb-10 border-b border-steel-idle/20 pb-8">
                    <Link
                        href="/blog"
                        className="text-sm text-ink-tertiary hover:text-ink mb-4 inline-block transition-colors"
                    >
                        ← Back to Blog
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4 tracking-tight">
                        {post.title}
                    </h1>

                    <time className="text-sm text-ink-tertiary">
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            timeZone: 'UTC',
                        })}
                    </time>
                </header>

                {/* Content Body */}
                {/* We use 'prose-invert' because your app is dark mode */}
                <div className="prose prose-invert prose-lg max-w-none">
                    <MDXRemote source={post.content} components={components} />
                </div>

            </article>
        </StandardPage>
    );
}