import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Ajout de l'importation de Link
import Home from "./Home";
import Articles from "./Articles";
import ArticleDetail from "./ArticleDetail";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>  {/* Lien vers la page d'accueil */}
            </li>
            <li>
              <Link to='/articles'>Articles</Link>  {/* Lien vers la page des articles */}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
}
