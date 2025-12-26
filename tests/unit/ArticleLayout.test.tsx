import { render, screen } from '@testing-library/react';
import ArticleLayout from '@/components/ArticleLayout';
import type { Article } from '@/lib/journal';

/**
 * Unit Test: ArticleLayout Component
 * 
 * High-signal tests for article wrapper layout.
 * Tests metadata display, conditional rendering, and proper structure.
 */

describe('ArticleLayout Component', () => {
    const mockArticle: Article = {
        slug: 'test-article',
        title: 'Test Article Title',
        date: '2025-12-26',
        description: 'Test description',
        content: 'Test content',
        category: 'Test Category',
        readTime: '5 Min Read',
        author: 'Test Author',
    };

    const mockChildren = <p>Article content goes here</p>;

    it('should render article title', () => {
        // ACT
        render(<ArticleLayout article={mockArticle}>{mockChildren}</ArticleLayout>);

        // ASSERT
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toHaveTextContent('Test Article Title');
    });

    it('should render article metadata', () => {
        // ACT
        render(<ArticleLayout article={mockArticle}>{mockChildren}</ArticleLayout>);

        // ASSERT - All metadata visible
        expect(screen.getByText(/test category/i)).toBeInTheDocument();
        expect(screen.getByText(/5 min read/i)).toBeInTheDocument();
        expect(screen.getByText(/test author/i)).toBeInTheDocument();
    });

    it('should format date correctly', () => {
        // ACT
        render(<ArticleLayout article={mockArticle}>{mockChildren}</ArticleLayout>);

        // ASSERT - Date should be formatted (not raw YYYY-MM-DD)
        const dateElement = screen.getByText(/december/i);
        expect(dateElement).toBeInTheDocument();
        expect(dateElement).toHaveTextContent(/2025/);
    });

    it('should render article children content', () => {
        // ACT
        render(<ArticleLayout article={mockArticle}>{mockChildren}</ArticleLayout>);

        // ASSERT
        expect(screen.getByText('Article content goes here')).toBeInTheDocument();
    });

    it('should render back to journal link', () => {
        // ACT
        render(<ArticleLayout article={mockArticle}>{mockChildren}</ArticleLayout>);

        // ASSERT
        const backLink = screen.getByRole('link', { name: /back to journal/i });
        expect(backLink).toHaveAttribute('href', '/journal');
    });

    it('should conditionally render references when provided', () => {
        // ARRANGE
        const articleWithRefs: Article = {
            ...mockArticle,
            references: [
                'Reference 1',
                'Reference 2',
            ],
        };

        // ACT
        render(<ArticleLayout article={articleWithRefs}>{mockChildren}</ArticleLayout>);

        // ASSERT
        expect(screen.getByRole('heading', { name: /references/i })).toBeInTheDocument();
        expect(screen.getByText('Reference 1')).toBeInTheDocument();
        expect(screen.getByText('Reference 2')).toBeInTheDocument();
    });

    it('should not render references section when not provided', () => {
        // ARRANGE - Article without references
        const articleNoRefs: Article = {
            ...mockArticle,
            references: undefined,
        };

        // ACT
        render(<ArticleLayout article={articleNoRefs}>{mockChildren}</ArticleLayout>);

        // ASSERT
        expect(screen.queryByRole('heading', { name: /references/i })).not.toBeInTheDocument();
    });

    it('should have proper semantic structure', () => {
        // ACT
        const { container } = render(<ArticleLayout article={mockArticle}>{mockChildren}</ArticleLayout>);

        // ASSERT - Uses article element
        const articleElement = container.querySelector('article');
        expect(articleElement).toBeInTheDocument();
    });
});
