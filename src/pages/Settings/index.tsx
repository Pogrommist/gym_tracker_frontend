import React, { useState } from "react";
import styled from "styled-components";

const SettingsTab: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    weight: "",
    height: "",
    gender: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  };

  return (
    <SettingsContainer>
      <InputRow>
        <label htmlFor="firstName">Имя:</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </InputRow>
      <InputRow>
        <label htmlFor="lastName">Фамилия:</label>
        <input
          type="text"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </InputRow>
      <InputRow>
        <label htmlFor="weight">Вес:</label>
        <input
          type="text"
          id="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </InputRow>
      <InputRow>
        <label htmlFor="height">Рост:</label>
        <input
          type="text"
          id="height"
          value={formData.height}
          onChange={handleChange}
        />
      </InputRow>
      <InputRow>
        <label htmlFor="gender">Пол:</label>
        <select
          id="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </InputRow>
    </SettingsContainer>
  );
};

const SettingsContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const InputRow = styled.div`
  margin-bottom: 10px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  select {
    padding: 8px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
`;

export default SettingsTab;
