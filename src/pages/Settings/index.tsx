import React, { useState } from "react";
import "./SettingsTab.css";

const SettingsTab: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => { 
    setGender(event.target.value);
  };

  return (
    <div className="settings-container">
      <div className="input-row">
        <label htmlFor="firstName">Имя:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="input-row">
        <label htmlFor="lastName">Фамилия:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div className="input-row">
        <label htmlFor="weight">Вес:</label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div className="input-row">
        <label htmlFor="height">Рост:</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <div className="input-row">
        <label htmlFor="gender">Пол:</label>
        <select
          id="gender"
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsTab;

