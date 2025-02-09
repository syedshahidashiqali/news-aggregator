# News Aggregator

## Overview
This is a **React + TypeScript** project that aggregates news from multiple sources, allowing users to **search, filter, and customize** their news feed. The application is containerized using Docker and available on **Docker Hub** for easy deployment.

## Features
- 🔍 **Article Search & Filtering** – Search articles by keyword and filter them by date, category, and source.
- 📰 **Personalized News Feed** – Customize the feed by selecting preferred sources, categories, and authors.
- 📱 **Mobile-Responsive Design** – Optimized for various screen sizes.
- 🐳 **Dockerized Application** – Easily run the app using Docker.

## Tech Stack
- **Frontend:** React, TypeScript, SCSS, Ant Design
- **State Management:** React Context API
- **Data Sources:** NewsAPI, New York Times API
- **Containerization:** Docker

---

## 🚀 Quick Start

### Run Locally

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/syedshahidashiqali/news-aggregator.git
   cd news-aggregator
   ```
2. **Install Dependencies:**
   ```sh
   yarn install
   ```
3. **Add Environment Variables:** Create a `.env` file in the root directory and add:
   ```sh
   REACT_APP_NEWS_API_KEY=your_newsapi_key
   REACT_APP_NYT_API_KEY=your_nyt_key
   ```
4. **Start the Development Server:**
   ```sh
   yarn dev
   ```

---

## 🐳 Run with Docker

### Pull from Docker Hub (Recommended)

```sh
 docker pull syedshahidashiqali/news-aggregator:latest
 docker run -d -p 3000:3000 syedshahidashiqali/news-aggregator
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.


### Docker Image URL
[https://hub.docker.com/r/syedshahidashiqali/news-aggregator](https://hub.docker.com/r/syedshahidashiqali/news-aggregator)
### Build and Run Locally
```sh
docker build -t news-aggregator .
docker run -d -p 3000:3000 news-aggregator
```

---

## 📜 API Configuration
- **NewsAPI**: [Get API Key](https://newsapi.org/)
- **New York Times API**: [Get API Key](https://developer.nytimes.com/)

Add the API keys to the `.env` file before running the app.

---

## 📂 Project Structure
```
├── public/       # Static assets
├── src/
│   ├── components/ # Reusable UI components
│   ├── services/   # API calls
│   ├── context/    # State management
│   ├── styles/     # SCSS
│   ├── App.tsx
│   ├── index.tsx
├── Dockerfile
├── .env   # Sample environment file
├── package.json
```



---

### 🔗 Links
- **GitHub Repo**: [news-aggregator](https://github.com/syedshahidashiqali/news-aggregator)
- **Docker Hub**: [syedshahidashiqali/news-aggregator](https://hub.docker.com/r/syedshahidashiqali/news-aggregator)

---

