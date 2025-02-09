import { Modal, Checkbox, Button } from "antd";
import { useState } from "react";
import { SourcesI } from "../types/Article";
import { setLocalStorageItem } from "../utils/helpers";

const categoriesList = ["Technology", "Business", "Sports", "Health", "Science"];
const sourcesList: SourcesI[] = [
    { value: "bbc-news", label: "BBC News" },
    { value: "reuters", label: "Reuters" },
    { value: "nyt", label: "New York Times" },
];

const defaultStyle = { color: "#242151" }

interface NewsPreferencesPropsI {
    isOpen: boolean;
    onClose: () => void;
    sources: string[];
    setSources: React.Dispatch<React.SetStateAction<string[]>>;
    categories: string[];
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;

}
const NewsPreferences = ({
    isOpen = false,
    onClose,
    sources,
    setSources,
    categories,
    setCategories
}: NewsPreferencesPropsI) => {
    const [selectedSources, setSelectedSources] = useState<string[]>(sources);
    const [selectedCategories, setSelectedCategories] = useState<string[]>(categories);

    const savePreferences = () => {
        setSources(selectedSources);
        setCategories(selectedCategories);
        setLocalStorageItem("preferredSources", selectedSources.map(ss => ss.toLowerCase()))
        setLocalStorageItem("preferredCategories", selectedCategories.map(sc => sc.toLowerCase()))
        onClose();
    };

    console.log("selected Prefs", { selectedSources, selectedCategories })

    return (
        <Modal title={<span style={defaultStyle}>Personalize Your News</span>} open={isOpen} onCancel={onClose} footer={null}>
            <h3 style={defaultStyle}>Preferred Sources</h3>
            <Checkbox.Group options={sourcesList} value={selectedSources} onChange={setSelectedSources} />

            <h3 style={defaultStyle}>Preferred Categories</h3>
            <Checkbox.Group options={categoriesList} value={selectedCategories} onChange={setSelectedCategories} />

            <Button type="primary" onClick={savePreferences} style={{ marginTop: 20, background: "#242151", color: "#fff", padding: "20px 10px" }}>
                Save Preferences
            </Button>
        </Modal>
    );
};

export default NewsPreferences;
