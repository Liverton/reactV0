import React from "react";
import SelectedCnaesList from "./SelectedCnaesList ";

const SelectedCnaesSection = ({ selectedCnaeNumbers, handleRemoveCnae }) => (
  <SelectedCnaesList selectedCnaeNumbers={selectedCnaeNumbers} handleRemoveCnae={handleRemoveCnae} />
);

export default SelectedCnaesSection;