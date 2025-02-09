import { Button } from "antd"

const NewsHeader = ({ openPreferenceModal }: { openPreferenceModal: () => void }) => {
    return (
        <div className="news-feed-header">
            <h2>News Feed</h2>
            <Button
                style={{ color: "#242151", background: "#fff" }}
                onClick={openPreferenceModal}
            >
                ⚙️ Personalize News
            </Button>
        </div>
    )
}

export default NewsHeader;