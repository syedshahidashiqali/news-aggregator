import { useState, useEffect, useCallback } from "react";
import { fetchNYTArticles, fetchBBCArticles, fetchReutersArticles } from "../services/newsService";
import { ArticleI } from "../types/Article";

interface UseNewsFeedParams {
    query: string;
    fromDate: string;
    toDate: string;
    categories: string[];
    sources: string[];
}

const useNewsFeed = ({ query, fromDate, toDate, categories, sources }: UseNewsFeedParams) => {
    const [articles, setArticles] = useState<ArticleI[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    // Update `debouncedQuery` after 500ms
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(handler);
    }, [query]);

    const fetchArticles = useCallback(async () => {
        if (!sources.length) return;

        setLoading(true);
        setError(null);

        try {
            const fetchFunctions: Record<string, Function> = {
                "bbc-news": fetchBBCArticles,
                "reuters": fetchReutersArticles,
                "nyt": fetchNYTArticles
            };

            // Fetch articles from selected sources
            const promises = sources.map(async (source) => {
                const fetchFunction = fetchFunctions[source];
                if (!fetchFunction) return [];

                const data = await fetchFunction({ query: debouncedQuery, fromDate, toDate, categories });

                // Ensure each article has the correct source
                return data.map((article: any) => ({
                    title: article.title || article.headline?.main,
                    description: article.description || article.abstract,
                    url: article.url || article.web_url,
                    source: source // Assign correct source manually
                }));
            });

            const results = await Promise.all(promises);

            setArticles(results.flat());
        } catch (err) {
            setError("Failed to fetch news articles.");
        } finally {
            setLoading(false);
        }
    }, [sources, debouncedQuery, fromDate, toDate, categories]);

    useEffect(() => {
        fetchArticles();
    }, [fetchArticles]);

    return { articles, loading, error, refetch: fetchArticles };
};

export default useNewsFeed;
