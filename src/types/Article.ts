export type SourceTypes = "bbc-news" | "reuters" | "nyt";
export type SourceLabelTypes = "BBC News" | "Reuters" | "New York Times";

export interface SourcesI {
    value: SourceTypes;
    label: SourceLabelTypes;
}
export interface ArticleI {
    title: string;
    description: string;
    url: string;
    source: SourceTypes;
}