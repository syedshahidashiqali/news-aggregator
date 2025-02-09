import { SourceTypes } from "../types/Article";


export const getSourceName = (src: SourceTypes) => {
    switch (src) {
        case "bbc-news":
            return "BBC"
        case "reuters":
            return "Reuters"
        case "nyt":
            return "New York Times"
    }
}

export const setLocalStorageItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorageItem = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

export const removeLocalStorageItem = (key: string) => {
    localStorage.removeItem(key);
}