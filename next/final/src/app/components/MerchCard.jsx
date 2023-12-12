// Card.jsx
import React from 'react';

const Card = ({ merchant, handleDelete }) => (
    <div className="flex items-center">
  <div className="bg-gray-200 p-8 rounded-md shadow-md mb-4">
    <div className="card">
      <strong>{merchant.nombreComerciante}</strong>
      <div className="card-body">
        <p>id: {merchant.id}</p>
        <p>Email: {merchant.email}</p>
        <p>CIF: {merchant.cif}</p>
        <p>Ciudad: {merchant.ciudad}</p>
        <p>Teléfono: {merchant.telefono}</p>
      </div>
    </div>
  </div>
  </div>
);

export default Card;
