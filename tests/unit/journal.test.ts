import { getSortedArticles, getArticleData } from '@/lib/journal';
import fs from 'fs';
import path from 'path';

/**
 * Unit Test: Journal Utilities
 * 
 * High-signal tests for MDX processing and article loading.
 * Tests file system operations and data parsing.
 */

describe('Journal Utilities', () => {
    describe('getSortedArticles', () => {
        it('should return array of articles', () => {
            // ACT
            const articles = getSortedArticles();

            // ASSERT
            expect(Array.isArray(articles)).toBe(true);
            expect(articles.length).toBeGreaterThan(0);
        });

        it('should return articles sorted by date (newest first)', () => {
            // ACT
            const articles = getSortedArticles();

            // ASSERT - Check date ordering
            for (let i = 0; i < articles.length - 1; i++) {
                const currentDate = new Date(articles[i].date);
                const nextDate = new Date(articles[i + 1].date);
                expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime());
            }
        });

        it('should include required article metadata', () => {
            // ACT
            const articles = getSortedArticles();

            // ASSERT - Each article has required fields
            articles.forEach(article => {
                expect(article).toHaveProperty('slug');
                expect(article).toHaveProperty('title');
                expect(article).toHaveProperty('date');
                expect(article).toHaveProperty('description');

                // Slug should be non-empty string
                expect(typeof article.slug).toBe('string');
                expect(article.slug.length).toBeGreaterThan(0);
            });
        });
    });

    describe('getArticleData', () => {
        it('should load article content for valid slug', async () => {
            // ARRANGE
            const articles = getSortedArticles();
            const testSlug = articles[0].slug; // Use first article

            // ACT
            const articleData = await getArticleData(testSlug);

            // ASSERT
            expect(articleData).toBeDefined();
            expect(articleData!.slug).toBe(testSlug);
            expect(articleData!.content).toBeTruthy();
            expect(typeof articleData!.content).toBe('string');
        });

        it('should parse frontmatter correctly', async () => {
            // ARRANGE
            const testSlug = 'science-of-recomposition';

            // ACT
            const articleData = await getArticleData(testSlug);
            expect(articleData).toBeDefined();

            // ASSERT - Frontmatter fields present
            expect(articleData!.title).toBeTruthy();
            expect(articleData!.date).toBeTruthy();
            expect(articleData!.description).toBeTruthy();

            // Date should be valid
            const date = new Date(articleData!.date);
            expect(date.toString()).not.toBe('Invalid Date');
        });

        it('should include optional metadata when present', async () => {
            // ARRANGE
            const testSlug = 'science-of-recomposition';

            // ACT
            const articleData = await getArticleData(testSlug);
            expect(articleData).toBeDefined();

            // ASSERT - Optional fields (may or may not be present)
            if (articleData!.category) {
                expect(typeof articleData!.category).toBe('string');
            }

            if (articleData!.readTime) {
                expect(typeof articleData!.readTime).toBe('string');
            }

            if (articleData!.author) {
                expect(typeof articleData!.author).toBe('string');
            }
        });

        it('should return references array when present', async () => {
            // ARRANGE
            const testSlug = 'science-of-recomposition';

            // ACT
            const articleData = await getArticleData(testSlug);
            expect(articleData).toBeDefined();

            // ASSERT
            if (articleData!.references) {
                expect(Array.isArray(articleData!.references)).toBe(true);
                expect(articleData!.references.length).toBeGreaterThan(0);

                // Each reference should be a non-empty string
                articleData!.references.forEach(ref => {
                    expect(typeof ref).toBe('string');
                    expect(ref.length).toBeGreaterThan(0);
                });
            }
        });
    });
});
