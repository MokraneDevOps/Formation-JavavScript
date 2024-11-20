// Importer les packages nécessaires
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importer les pages utilisées dans les routes
import Offers from "./containers/Offers";
import OneOffer from "./containers/OneOffer";
import SignUp from "./containers/SignUp";
import Publish from "./containers/Publish";

// Importer les composants
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* # # # # # # # HEADER # # # # # # # # # # # #  */}
      <Header user={" "} />
      <div className="headerGhost"></div>

      {/* ToastContainer pour les notifications */}
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
        theme="light"
      />

      {/* Route principale */}
      <main>
        <Routes>
          {/* Route pour afficher une offre spécifique */}
          <Route path="/oneoffer/:id" element={<OneOffer />} />

          {/* Route pour publier une annonce */}
          <Route path="/publish" element={<Publish />} />

          {/* Route pour l'inscription */}
          <Route path="/signup" element={<SignUp />} />

          {/* Route par défaut : affiche toutes les offres */}
          <Route path="/" element={<Offers />} />
        </Routes>
      </main>

      {/* Footer de la page */}
      <Footer />
    </Router>
  );
};

export default App;
