import React from "react";
import { useParams } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams(); // Récupère l'ID de l'article via l'URL

  return (
    <div>
      <h1>Détails de l'article {id}</h1>
      <p>
        Ici vous pouvez afficher le contenu détaillé de l'article avec l'ID{" "}
        {id}.
      </p>
    </div>
  );
}
