import TextField from "../TextField/TextField";
import React from "react";

const SelectedCnaesList = ({ selectedCnaeNumbers, handleRemoveCnae }) => (
  <div className="cnae-fields">
    {selectedCnaeNumbers.map((cnaeNumber, index) => (
      <div key={index}>
        <TextField label={`CNAE ${index + 1}`} value={cnaeNumber} />
        <button onClick={() => handleRemoveCnae(cnaeNumber)}>Remover</button>
      </div>
    ))}
  </div>
);

export default SelectedCnaesList;
