import { getArticleData, getSortedArticles, Article } from '@/lib/journal';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Metadata } from 'next';
import StandardPage from '../../components/StandardPage';
import ArticleLayout from '../../components/ArticleLayout';
import EmailForm from '../../components/EmailForm';

// Define the Props type according to Next.js 15+ changes
type Props = {
    params: Promise<{ slug: string }>;
};

// 1. Generate Static Paths (SSG)
// This tells Next.js to pre-build these pages at deploy time for instant loading.
export async function generateStaticParams() {
    const articles: Omit<Article, 'content'>[] = getSortedArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

// 2. SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params; // Await params (Next.js 15+ requirement)
    const article = getArticleData(slug);

    if (!article) {
        return { title: ' Article Not Found' };
    }

    return {
        title: `${article.title} | Vaylen`,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
            publishedTime: article.date,
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
    EmailForm: EmailForm,
};

// 4. The Page Component
export default async function JournalArticle({ params }: Props) {
    const { slug } = await params; // Await params here too!
    const article = getArticleData(slug);

    if (!article) {
        notFound();
    }

    return (
        <StandardPage>
            <ArticleLayout article={article}>
                <MDXRemote source={article.content} components={components} />
            </ArticleLayout>
        </StandardPage>
    );
}