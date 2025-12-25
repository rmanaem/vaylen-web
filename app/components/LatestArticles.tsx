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

interface LatestArticlesProps {
    articles: Omit<Article, 'content'>[];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
    // Safety Check: If no articles exist, render nothing.
    if (!articles || articles.length === 0) {
        return null;
    }

    // Take only the latest 3
    const recentArticles = articles.slice(0, 3);

    return (
        <motion.section
            variants={VARIANTS.fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full py-24 border-t border-steel-idle/20 bg-bg"
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-ink mb-2 tracking-tight">
                            The Vaylen Journal
                        </h2>
                        <p className="text-ink-subtle max-w-md">
                            Evidence-based insights on hypertrophy, nutrition, and training mechanics.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="text-sm font-medium text-steel-active hover:text-white transition-colors flex items-center gap-1"
                    >
                        View all articles →
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentArticles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/journal/${article.slug}`}
                            className="group block"
                        >
                            <article className="flex flex-col h-full bg-steel-idle/5 rounded-2xl p-6 hover:bg-steel-idle/10 transition-colors border border-transparent hover:border-steel-idle/20">
                                {/* Date */}
                                <time className="text-xs font-medium text-ink-tertiary mb-3 block">
                                    {new Date(article.date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                        timeZone: 'UTC'
                                    })}
                                </time>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-steel-active transition-colors">
                                    {article.title}
                                </h3>

                                {/* Description (Truncated) */}
                                <p className="text-sm text-ink-subtle leading-relaxed line-clamp-3 mb-4 flex-grow">
                                    {article.description}
                                </p>

                                {/* Micro-Interaction */}
                                <div className="text-xs font-semibold text-ink-tertiary group-hover:text-ink transition-colors mt-auto">
                                    Read Article
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

            </div>
        </motion.section>
    );
}