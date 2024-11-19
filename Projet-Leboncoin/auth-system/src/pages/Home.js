import React, { useState, useEffect } from 'react';
import AdCard from '../components/AdCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [ads, setAds] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);

  useEffect(() => {
    // Simuler la récupération des annonces
    const fetchAds = () => {
      const adData = [
        { id: 1, title: 'Vente voiture', price: 5000, image: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Location appartement', price: 700, image: 'https://via.placeholder.com/150' },
        { id: 3, title: 'Canapé en cuir', price: 300, image: 'https://via.placeholder.com/150' },
      ];
      setAds(adData);
      setFilteredAds(adData);
    };

    fetchAds();
  }, []);

  const handleSearch = (query) => {
    const filtered = ads.filter(ad => ad.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredAds(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="ads-list">
        {filteredAds.map(ad => (
          <AdCard key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default Home;
