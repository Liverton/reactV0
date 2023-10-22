// CnaeFilter.js
import React from "react";

const CnaeFilter = ({ searchTerm, handleFilterChange }) => (
  <div>
    <input
      type="text"
      placeholder="Filtrar CNAE"
      value={searchTerm}
      onChange={handleFilterChange}
    />
  </div>
);

export default CnaeFilter;
