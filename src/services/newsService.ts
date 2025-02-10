import axios from "axios";
const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY ?? "";
const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY ?? "";

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines";
const NYT_API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";


interface FetchParams {
    query: string;
    fromDate?: string;
    toDate?: string;
    categories?: string[];
}

const fetchArticles = async (source: string, { query, fromDate, toDate }: FetchParams) => {
    try {
        const response = await axios.get(NEWS_API_URL, {
            params: {
                q: query,
                from: fromDate,
                to: toDate,
                sources: source,
                apiKey: NEWS_API_KEY,
            },
        });
        return response.data.articles ?? [];
    } catch (error: any) {
        console.error(`Error fetching ${source} articles`, error);
        return [];
    }
};

export const fetchBBCArticles = (params: FetchParams) => fetchArticles("bbc-news", params);
export const fetchReutersArticles = (params: FetchParams) => fetchArticles("reuters", params);

export const fetchNYTArticles = async ({ query, fromDate, toDate, categories }: FetchParams) => {
    try {
        const filterQuery: string[] = [];
        if (categories && categories.length > 0) filterQuery.push(`section_name.contains:("${categories.map(c => c).join(",")}")`);

        // Construct params and only include begin_date/end_date if they exist
        const params: Record<string, string> = {
            q: query,
            "api-key": NYT_API_KEY,
        };

        if (fromDate) params["begin_date"] = fromDate.replace(/-/g, ""); // YYYYMMDD format
        if (toDate) params["end_date"] = toDate.replace(/-/g, "");

        if (filterQuery.length) params["fq"] = filterQuery.join(" AND ");

        const response = await axios.get(NYT_API_URL, { params });

        return response.data.response.docs;
    } catch (error) {
        console.error("Error fetching NYT articles", error);
        return [];
    }
};