import Link from 'next/link';
import { Article } from '@/lib/journal';

interface ArticleLayoutProps {
    article: Omit<Article, 'content'>;
    children: React.ReactNode;
}

export default function ArticleLayout({ article, children }: ArticleLayoutProps) {
    return (
        <article className="max-w-3xl mx-auto">
            {/* Navigation */}
            <Link
                href="/journal"
                className="text-sm text-ink-tertiary hover:text-ink mb-8 inline-block transition-colors"
            >
                ← Back to Journal
            </Link>

            {/* Article Header */}
            <header className="mb-12 pb-8 border-b border-steel-idle/20">
                {/* Metadata Bar */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    {article.category && (
                        <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-steel-idle/10 text-steel-active border border-steel-idle/20 rounded-sm">
                            {article.category}
                        </span>
                    )}
                    {article.readTime && (
                        <span className="text-xs font-mono text-ink-tertiary">
                            {article.readTime}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-ink mb-4 tracking-tight leading-tight">
                    {article.title}
                </h1>

                {/* Description */}
                <p className="text-lg text-ink-subtle leading-relaxed mb-6">
                    {article.description}
                </p>

                {/* Byline */}
                <div className="flex items-center gap-4 text-sm text-ink-tertiary">
                    {article.author && (
                        <span className="font-medium">{article.author}</span>
                    )}
                    <span className="text-steel-idle">•</span>
                    <time>
                        {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            timeZone: 'UTC',
                        })}
                    </time>
                </div>
            </header>

            {/* Article Content - Enhanced Legibility */}
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-p:text-gray-300 prose-p:leading-7 prose-li:text-gray-300 prose-strong:text-white prose-a:text-blue-400 hover:prose-a:text-white transition-colors">
                {children}
            </div>

            {/* References Section - Only show if references exist */}
            {article.references && article.references.length > 0 && (
                <div className="mt-24 pt-12 border-t border-white/10">
                    <h4 className="text-xs font-bold text-gray-400 mb-6 uppercase tracking-widest">
                        References
                    </h4>
                    <ol className="list-decimal pl-4 space-y-4 text-xs text-gray-500 font-mono leading-relaxed">
                        {article.references.map((ref, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: ref }} />
                        ))}
                    </ol>
                </div>
            )}

            {/* SEO Keywords (Hidden, for search engines) */}
            {article.keywords && article.keywords.length > 0 && (
                <meta name="keywords" content={article.keywords.join(', ')} />
            )}
        </article>
    );
}
