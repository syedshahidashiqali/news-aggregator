import { Select, Input, DatePicker } from "antd";
import dayjs from "dayjs";
import { SourcesI } from "../types/Article";

const { Option } = Select;
const { RangePicker } = DatePicker;

const sourcesList: SourcesI[] = [
    { value: "bbc-news", label: "BBC News" },
    { value: "reuters", label: "Reuters" },
    { value: "nyt", label: "New York Times" },
];
const categoriesList = ["Business", "Health", "Science", "Sports", "Technology"]


interface NewsFilterPropsI {
    query: string;
    fromDate: string;
    toDate: string;
    sources: string[];
    categories: string[];
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    setSources:React.Dispatch<React.SetStateAction<string[]>>;
    setCategories:React.Dispatch<React.SetStateAction<string[]>>;
    setFromDate: React.Dispatch<React.SetStateAction<string>>;
    setToDate: React.Dispatch<React.SetStateAction<string>>;
}

const NewsFilter = ({
    query,
    setQuery,
    fromDate,
    toDate,
    setToDate,
    setFromDate,
    categories,
    setCategories,
    sources,
    setSources,
}: NewsFilterPropsI) => {
    return (
        <div style={{ display: "flex", alignItems: "self-end", flexWrap: "wrap", gap: "16px" }}>
            <Input
                style={{ width: "250px" }}
                placeholder="Search news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <RangePicker
                style={{ width: "250px" }}
                format="YYYY-MM-DD"
                value={fromDate && toDate ? [dayjs(fromDate), dayjs(toDate)] : null}
                onChange={(dates, dateStrings) => {
                    setFromDate(dateStrings[0]);
                    setToDate(dateStrings[1]);
                }}
            />

            <Select
                mode="multiple"
                placeholder="Select Sources"
                style={{ width: "250px" }}
                value={sources}
                onChange={setSources}
            >
                {sourcesList.map((source) => (
                    <Option key={source.value} value={source.value}>
                        {source.label}
                    </Option>
                ))}
            </Select>

            <Select
                mode="multiple"
                placeholder="Select Categories"
                style={{ width: "250px" }}
                value={categories}
                onChange={setCategories}
            >
                {categoriesList.map((category) => (
                    <Option key={category} value={category}>
                        {category}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default NewsFilter;
