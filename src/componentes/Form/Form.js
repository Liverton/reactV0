import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyInfoSection from "./CompanyInfoSection";
import SelectedCnaesSection from "./SelectedCnaesSection";
import CnaeSelectionSection from "./CnaeSelectionSection";
import "../Form/Form.css";

const Form = () => {
  const [cnaeList, setCnaeList] = useState([]);
  const [selectedCnaes, setSelectedCnaes] = useState([]);
  const [selectedCnae, setSelectedCnae] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://servicodados.ibge.gov.br/api/v2/cnae/subclasses");
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
      } catch (error) {
        console.error("Erro ao buscar CNAEs da API:", error);
        // Adicione tratamento de erros aqui, como exibir uma mensagem ao usuário.
      }
    };

    fetchData();
  }, []);

  const handleAddCnae = () => {
    if (selectedCnae) {
      const cleanedCnaeNumber = selectedCnae.value.replace(/[^0-9]/g, '');
      const newCnae = {
        number: cleanedCnaeNumber,
        label: selectedCnae.label
      };
      setSelectedCnaes([...selectedCnaes, newCnae]);
      setSearchTerm("");
      setSelectedCnae(null);
    }
  };

  const handleRemoveCnae = (cnaeNumber) => {
    const updatedCnaes = selectedCnaes.filter((cnae) => cnae.number !== cnaeNumber);
    setSelectedCnaes(updatedCnaes);
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
        <div>
          <label htmlFor="cnaeSelect" className="customLabel">
            CNAE
          </label>
          <CnaeSelectionSection
            selectedCnae={selectedCnae}
            filteredCnaes={filteredCnaes}
            handleCnaeSelectChange={handleSelectChange}
            handleAddCnae={handleAddCnae}
          />
        </div>
        <SelectedCnaesSection
          selectedCnaeNumbers={selectedCnaes.map((cnae) => cnae.number)}
          handleRemoveCnae={handleRemoveCnae}
        />
      </form>
    </section>
  );
};

export default Form;