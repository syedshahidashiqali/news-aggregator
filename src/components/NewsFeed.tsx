import { FC, useState } from "react";
import NewsFilter from "./NewsFilter";
import useNewsFeed from "../hooks/useNewsFeed";
import { Empty, Spin } from "antd";
import NewsPreferences from "./NewsPreferences";
import NewsListing from "./NewsListing";
import NewsHeader from "./NewsHeader";
import { getLocalStorageItem } from "../utils/helpers";

const NewsFeed: FC = () => {
    const [query, setQuery] = useState("technology");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [categories, setCategories] = useState<string[]>(() => getLocalStorageItem("preferredCategories") ?? []);
    const [sources, setSources] = useState<string[]>(() => getLocalStorageItem("preferredSources") as string[] ?? []);
    const [isPrefModalOpen, setIsPrefModalOpen] = useState(false);
    const { articles, loading, refetch } = useNewsFeed({
        query,
        fromDate,
        toDate,
        categories,
        sources,
    });
    return (
        <Spin spinning={loading} size="large" fullscreen={loading} tip={<span>Loading...</span>}>
            <NewsHeader openPreferenceModal={() => setIsPrefModalOpen(true)} />
            <NewsPreferences
                isOpen={isPrefModalOpen}
                onClose={() => setIsPrefModalOpen(false)}
                sources={sources}
                setSources={setSources}
                categories={categories}
                setCategories={setCategories}
            />
            <NewsFilter
                query={query}
                fromDate={fromDate}
                toDate={toDate}
                sources={sources}
                categories={categories}
                setQuery={setQuery}
                setSources={setSources}
                setCategories={setCategories}
                setFromDate={setFromDate}
                setToDate={setToDate}
            />
            {articles?.length > 0 && <NewsListing articles={articles} />}
            {articles?.length == 0 && (
                <Empty
                    style={{ marginTop: 50 }}
                    description={
                        <span style={{ color: "#fff" }}>
                            No articles found
                        </span>
                    }
                />
            )}
        </Spin>
    );
};


export default NewsFeed;