import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsWidget.css";

const NewsWidget = ({ removeWidget }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = "5aebf04ccc25485f97bc5809d2c1b182"; // Replace with your actual API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setNews(response.data.articles.slice(0, 3));
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
