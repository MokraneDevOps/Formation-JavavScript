const OneOffer = () => {
  const { id } = useParams(); // Récupère l'ID de l'offre depuis l'URL
  const navigate = useNavigate(); // Pour la redirection en cas d'erreur
  const [dataOffer, setDataOffer] = useState({ photos: [] });
  const [imgNum, setImgNum] = useState(0); // État pour la photo principale

  // Appel API pour récupérer les données de l'offre
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://x8ki-letl-twmt.n7.xano.io/api:TU--mlzk/product/${id}`);
        setDataOffer(response.data);
      } catch (e) {
        toast("Il y a eu une erreur, êtes-vous bien connecté ?", { type: "error" });
        navigate("/"); // Redirection vers la page d'accueil en cas d'erreur
      }
    };
    fetchData();
  }, [id, navigate]);

  // Gestion de la date de création de l'annonce
  const created = new Date(dataOffer.created_at);
  
  return (
    <div className="oneOffer">
      {/* Retour à la recherche */}
      <Link to="/offers" className="back-to-search">
        Retour à la recherche
      </Link>

      <div className="offer-details">
        <div className="main-image">
          {/* Affichage de l'image principale */}
          {dataOffer.photos[imgNum] && <img src={dataOffer.photos[imgNum].url} alt="Image principale" />}
        </div>
        
        <div className="thumbnail-images">
          {/* Affichage des petites vignettes */}
          {dataOffer.photos.map((photo, index) => (
            <img
              key={index}
              src={photo.url}
              alt={`photo ${index}`}
              className={`thumbnail ${index === imgNum ? 'active' : ''}`}
              onClick={() => setImgNum(index)} // Change l'image principale lors du clic
            />
          ))}
        </div>

        {/* Détails de l'annonce */}
        <div className="offer-info">
          <h2>{dataOffer.title}</h2>
          <p>{dataOffer.description}</p>
          <p><strong>Vendeur :</strong> {dataOffer.seller_name}</p>
          <p><strong>Prix :</strong> {dataOffer.price} €</p>
          <p>
            <strong>Annonce créée le :</strong> {created.getDate()} / {created.getMonth() + 1} / {created.getFullYear()} à {created.getHours()} h {created.getMinutes()} mn
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneOffer;
