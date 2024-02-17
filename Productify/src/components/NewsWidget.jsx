import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsWidget.css";
import { NEWS_API_KEY } from "../config";

const NewsWidget = ({ removeWidget }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setNews(response.data.articles.slice(4, 7));
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <div className="Widget">
      <h2>News Headlines</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={removeWidget} className="removeButton">
        Remove
      </button>
    </div>
  );
};

export default NewsWidget;
