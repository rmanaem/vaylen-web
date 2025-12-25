import Link from 'next/link';
import { getSortedPosts } from '@/lib/blog';
import { Metadata } from 'next';
import StandardPage from '../components/StandardPage';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Deep dives into hypertrophy science, training methodology, and nutrition.',
    openGraph: {
        title: 'Vaylen Journal',
        description: 'The science of physical mastery.',
        type: 'website',
    },
};

export default function BlogIndex() {
    const posts = getSortedPosts();

    return (
        <StandardPage>
            <div className="max-w-3xl mx-auto">

                {/* Header Section */}
                <header className="mb-16 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4 tracking-tight">
                        Vaylen Journal
                    </h1>
                    <p className="text-lg text-ink-subtle max-w-xl">
                        The science of physical mastery. No fluff, just evidence-based insights for your training.
                    </p>
                </header>

                {/* Post Grid */}
                <div className="space-y-10">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block group"
                        >
                            <article className="p-6 -mx-6 rounded-2xl transition-all duration-300 hover:bg-steel-idle/10">
                                {/* Date */}
                                <div className="text-sm text-ink-tertiary mb-3">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                            timeZone: 'UTC'
                                        })}
                                    </time>
                                </div>

                                {/* Title (Uses your Silver/Steel color on hover instead of Blue) */}
                                <h2 className="text-2xl font-bold text-ink mb-3 group-hover:text-steel-active transition-colors">
                                    {post.title}
                                </h2>

                                {/* Description */}
                                <p className="text-ink-subtle leading-relaxed line-clamp-3">
                                    {post.description}
                                </p>

                                {/* "Read Article" Arrow */}
                                <div className="mt-4 text-sm font-medium text-steel-active/80 group-hover:text-steel-active transition-colors flex items-center gap-1">
                                    Read article
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </article>
                        </Link>
                    ))}

                    {/* Empty State */}
                    {posts.length === 0 && (
                        <div className="text-center py-20 text-ink-tertiary border border-dashed border-steel-idle/20 rounded-xl">
                            <p className="text-xl font-medium">No articles published yet.</p>
                            <p className="text-sm mt-2">Check back soon for updates.</p>
                        </div>
                    )}
                </div>
            </div>
        </StandardPage>
    );
}