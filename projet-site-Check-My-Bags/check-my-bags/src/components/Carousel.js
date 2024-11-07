import React from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css'; // Assurez-vous de créer un fichier CSS

const Carousel = () => {
  const images = [
    {
      src: "https://pictures.corsematin.com/cdn-cgi/image/width=3840,format=auto,quality=80/media/melody/2023/06/28/gr-20-randonneurs-capitellu_49e68e6001a164de68e6001a111f68v_.jpg",
      caption: "Le GR20 en Corse"
    },
    {
      src: "https://www.via-compostela.com/sites/default/files/inline-images/marcheurs-chemin-compostelle-coquille.jpg",
      caption: "Premier rando sur le chemin de compostelle"
    },
    {
      src: "https://www.levelovoyageur.com/doc/photos/photos/dp0501/montignac-a-velo.jpg",
      caption: "Ma première rando vélo !"
    },
    {
      src: "https://www.chemin-compostelle.fr/wp-content/uploads/2017/01/carte-voie-vezelay-e1485013690959.jpg",
      caption: "Ma seconde rando compostelle!"
    },
    {src: "https://linstantvagabond.fr/wp-content/uploads/2020/09/IMG_2714-1140x855.jpg",
      caption: "Chemin de Compostelle"
    },
    {src: "https://www.via-compostela.com/sites/default/files/styles/566x428_desktop_/public/2023-04/randonneur-chemin-compostelle-fleurs-adobestock.jpg?itok=1KNRc9CF",
     caption: "suite Chemins de Compostelle"
    },
    {src: "https://www.lozere-tourisme.com/sites/www.lozere-tourisme.com/files/styles/large_retina/public/thumbnails/image/blog_chemins_grande_randonnee_lozere_article_06.jpg?itok=IsoAny9T",
     caption: "Les 5 chemins de grande randonnée les plus populaires de Lozère"
    },
    
  ];

  return (
    <div className="carousselContainer">
      {images.map((image, index) => (
        <CarouselItem key={index} src={image.src} caption={image.caption} />
      ))}
    </div>
  );
};

export default Carousel;
