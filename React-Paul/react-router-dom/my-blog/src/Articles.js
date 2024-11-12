import React from "react";
import { Link } from "react-router-dom";

export default function Articles() {
  
    const articles = [
      { id: 1, title: "Premier article" },
      { id: 2, title: "Deuxième article" },
      { id: 3, title: "Troisième article" },
      { id: 4, title: "Quatrième article" },
      { id: 5, title: "Cinquième article" }
    ];
    
  

  return (
    <div>
      <h1>Liste des articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
