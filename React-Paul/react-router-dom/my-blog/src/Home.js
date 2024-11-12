import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur le Blog</h1>
      <p>
        Découvrez nos derniers articles !{" "}
        <Link to="/articles">Voir les articles</Link>
      </p>
    </div>
  );
}
