import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyInfoSection from "./CompanyInfoSection";
import SelectedCnaesSection from "./SelectedCnaesSection";
import CnaeSelectionSection from "./CnaeSelectionSection";

const Form = () => {
  const [cnaeList, setCnaeList] = useState([]);
  const [selectedCnaeNumbers, setSelectedCnaeNumbers] = useState([]);
  const [selectedCnae, setSelectedCnae] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v2/cnae/subclasses")
      .then((response) => {
        const cnaeData = response.data.map((cnae) => ({
          value: cnae.id,
          label: `${cnae.id} - ${cnae.descricao}`,
        }));

        const uniqueCnaeData = cnaeData.filter((cnae, index, self) => {
          return (
            index ===
            self.findIndex((c) => c.value === cnae.value && c.label === cnae.label)
          );
        });

        setCnaeList(uniqueCnaeData);
      })
      .catch((error) => {
        console.error("Erro ao buscar CNAEs da API:", error);
      });
  }, []);

  const handleAddCnae = () => {
    if (selectedCnae) {
      const cleanedCnaeNumber = selectedCnae.value.replace(/[^0-9]/g, '');
      setSelectedCnaeNumbers([...selectedCnaeNumbers, cleanedCnaeNumber]);
      setSearchTerm("");
      setSelectedCnae(null);
    }
  };

  const handleRemoveCnae = (cnaeNumber) => {
    const updatedCnaeNumbers = selectedCnaeNumbers.filter((number) => number !== cnaeNumber);
    setSelectedCnaeNumbers(updatedCnaeNumbers);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedCnae(selectedOption);
  };

  const filteredCnaes = cnaeList.filter((cnae) =>
    cnae.label.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <section className="formEnterprise">
      <form>
        <h2>Cadastro da empresa</h2>
        <CompanyInfoSection />
        <SelectedCnaesSection
          selectedCnaeNumbers={selectedCnaeNumbers}
          handleRemoveCnae={handleRemoveCnae}
        />
        <CnaeSelectionSection
          selectedCnae={selectedCnae}
          searchTerm={searchTerm}
          filteredCnaes={filteredCnaes}
          handleAddCnae={handleAddCnae}
          handleSelectChange={handleSelectChange}
          setSearchTerm={setSearchTerm}
        />
      </form>
    </section>
  );
};

export default Form;
