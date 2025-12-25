"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { VARIANTS } from '../design-system/animations';

type Article = {
    slug: string;
    title: string;
    date: string;
    description: string;
};

interface JournalArticleGridProps {
    articles: Omit<Article, 'content'>[];
}

export default function JournalArticleGrid({ articles }: JournalArticleGridProps) {
    return (
        <motion.div
            variants={VARIANTS.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-10"
        >
            {articles.map((article) => (
                <motion.div key={article.slug} variants={VARIANTS.fadeInUp}>
                    <Link
                        href={`/journal/${article.slug}`}
                        className="block group"
                    >
                        <article className="p-6 -mx-6 rounded-2xl transition-all duration-300 hover:bg-steel-idle/10">
                            {/* Date */}
                            <div className="text-sm text-ink-tertiary mb-3">
                                <time dateTime={article.date}>
                                    {new Date(article.date).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                        timeZone: 'UTC'
                                    })}
                                </time>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-ink mb-3 group-hover:text-steel-active transition-colors">
                                {article.title}
                            </h2>

                            {/* Description */}
                            <p className="text-ink-subtle leading-relaxed line-clamp-3">
                                {article.description}
                            </p>

                            {/* "Read Article" Arrow */}
                            <div className="mt-4 text-sm font-medium text-steel-active/80 group-hover:text-steel-active transition-colors flex items-center gap-1">
                                Read article
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </article>
                    </Link>
                </motion.div>
            ))}

            {/* Empty State */}
            {articles.length === 0 && (
                <div className="text-center py-20 text-ink-tertiary border border-dashed border-steel-idle/20 rounded-xl">
                    <p className="text-xl font-medium">No articles published yet.</p>
                    <p className="text-sm mt-2">Check back soon for updates.</p>
                </div>
            )}
        </motion.div>
    );
}
