import React from "react";
import Select from "react-select";
import TextField from "../TextField/TextField"; 

const CnaeSelectionSection = ({
  selectedCnae,
  searchTerm,
  filteredCnaes,
  handleAddCnae,
  handleSelectChange,
  setSearchTerm,
}) => {
  return (
    <div>
      <TextField label="CNAE" placeholder="" />
      <Select
        value={selectedCnae}
        options={filteredCnaes}
        isSearchable
        placeholder={`Selecione ou digite um CNAE`}
        onInputChange={(inputValue) => setSearchTerm(inputValue)}
        onChange={handleSelectChange}
      />
      <button onClick={handleAddCnae}>Adicionar CNAE</button>
    </div>
  );
};

export default CnaeSelectionSection;
