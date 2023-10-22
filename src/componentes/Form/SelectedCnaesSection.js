import React from "react";
import TextField from "../TextField/TextField";

const SelectedCnaesSection = ({ selectedCnaeNumbers, handleRemoveCnae }) => {
  return (
    <div label="CNAE">
      <div className="cnae-fields">
        {selectedCnaeNumbers.map((cnaeNumber, index) => (
          <div key={index}>
            <TextField label={`CNAE ${index + 1}`} value={cnaeNumber} />
            <button onClick={() => handleRemoveCnae(cnaeNumber)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedCnaesSection;
