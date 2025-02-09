import { Col, Row } from "antd";
import NewsCard from "./NewsCard";
import { ArticleI } from "../types/Article";

const NewsListing = ({ articles }: { articles: ArticleI[] }) => {
    return (
        <div className="news-listing-container">
            <Row gutter={[30, 30]}>
                {articles.map((article, index) => (
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} key={index}>
                        <NewsCard article={article} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}


export default NewsListing;