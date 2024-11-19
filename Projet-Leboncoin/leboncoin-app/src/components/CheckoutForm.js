// src/components/CheckoutForm.js

import React, { useState } from 'react';

const CheckoutForm = ({ total }) => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Paiement effectué avec succès!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Informations de paiement</h2>
      <label>
        Nom :
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </label>
      <label>
        Numéro de carte :
        <input
          type="text"
          value={formData.cardNumber}
          onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
          required
        />
      </label>
      <label>
        Date d'expiration :
        <input
          type="text"
          value={formData.expiryDate}
          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
          required
        />
      </label>
      <label>
        CVV :
        <input
          type="text"
          value={formData.cvv}
          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
          required
        />
      </label>
      <button type="submit">Payer {total} €</button>
    </form>
  );
};

export default CheckoutForm;
