import { ArticleI } from "../types/Article";
import { getSourceName } from "../utils/helpers";

const NewsCard = ({ article }: { article: ArticleI }) => {
    return (
        <div className="news-card">
            <div className="top">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <strong>{article.title}</strong>
                </a>
                <p className="description">{article.description}</p>
            </div>
            <p className="source">Source: {getSourceName(article?.source)}</p>
        </div>
    )
}

export default NewsCard;