import Link from 'next/link';
import { getSortedArticles } from '@/lib/journal';
import { Metadata } from 'next';
import StandardPage from '../components/StandardPage';
import JournalArticleGrid from '../components/JournalArticleGrid';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Deep dives into hypertrophy science, training methodology, and nutrition.',
    openGraph: {
        title: 'Vaylen Journal',
        description: 'The science of physical mastery.',
        type: 'website',
    },
};

export default function JournalIndex() {
    const articles = getSortedArticles();
    const hasArticles = articles.length > 0;

    return (
        <StandardPage showJournal={hasArticles}>
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

                {/*  Article Grid */}
                <JournalArticleGrid articles={articles} />
            </div>
        </StandardPage>
    );
}