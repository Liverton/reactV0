import React from "react";
import TextField from "../TextField/TextField";

const CompanyInfoSection = () => {
  return (
    <div>
      <TextField label="Nome" placeholder="Digite o nome da empresa." />
      <TextField label="CNPJ" placeholder="Digite o CNPJ." />
    </div>
  );
};

export default CompanyInfoSection;
