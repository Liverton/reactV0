import React from "react";
import TextField from "../TextField/TextField";

const SelectedCnaesList = ({ selectedCnaeNumbers, handleRemoveCnae }) => (
  <div className="cnae-fields">
    {selectedCnaeNumbers.map((cnaeNumber, index) => (
      <div key={index}>
        <TextField label={`CNAE ${index + 1}`} value={cnaeNumber} />
        <button type="button" onClick={() => handleRemoveCnae(cnaeNumber)}>Remover</button>
      </div>
    ))}
  </div>
);

export default SelectedCnaesList;