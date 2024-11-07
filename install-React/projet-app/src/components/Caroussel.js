import React from 'react';
import CarousselArticle from './CarousselArticle';
import './Caroussel.css';

const articles = [
  {
    imgSrc: "https://pictures.corsematin.com/cdn-cgi/image/width=3840,format=auto,quality=80/media/melody/2023/06/28/gr-20-randonneurs-capitellu_49e68e6001a164de68e6001a111f68v_.jpg",
    title: "Le GR20 en Corse"
  },
  {
    imgSrc: "https://www.via-compostela.com/sites/default/files/inline-images/marcheurs-chemin-compostelle-coquille.jpg",
    title: "Premier rando sur le chemin de compostelle"
  },
  {
    imgSrc: "https://www.levelovoyageur.com/doc/photos/photos/dp0501/montignac-a-velo.jpg",
    title: "Ma première rando vélo !"
  },
  {
    imgSrc: "https://www.chemin-compostelle.fr/wp-content/uploads/2017/01/carte-voie-vezelay-e1485013690959.jpg",
    title: "Ma seconde rando compostelle!"
  }
];

function Caroussel() {
  return (
    <div className="carousselContainer">
      {articles.map((article, index) => (
        <CarousselArticle key={index} imgSrc={article.imgSrc} title={article.title} />
      ))}
    </div>
  );
}

export default Caroussel;
