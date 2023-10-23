import React from "react";
import Select from "react-select";

const CnaeSelectionSection = ({ selectedCnae, filteredCnaes, handleCnaeSelectChange, handleAddCnae }) => (
  <div>
    <Select
      value={selectedCnae}
      options={filteredCnaes}
      isSearchable
      placeholder={`Selecione ou digite um CNAE`}
      onChange={handleCnaeSelectChange}
    />
    <button type="button" onClick={handleAddCnae}>Adicionar CNAE</button>
  </div>
);

export default CnaeSelectionSection;