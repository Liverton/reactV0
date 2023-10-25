import React from "react";
import TextField from "../TextField/TextField";

const SelectedCnaesList = ({ selectedCnaeNumbers, handleRemoveCnae }) => (
  <div className="cnae-fields">
    {selectedCnaeNumbers.map((cnaeNumber, index) => (
      <div key={index} className="cnae-item">
        <div className="cnae-info">
          <div className="cnae-label">
            CNAE {index + 1}:
          </div>
          <div>
            <TextField value={cnaeNumber} />
          </div>
          <button type="button" onClick={() => handleRemoveCnae(cnaeNumber)} className="delete-button">
            <img src="img/deleteIcon.svg" alt="delete" className="deleteIcon" />
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default SelectedCnaesList;
