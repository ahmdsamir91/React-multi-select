import React, { useState } from "react";
import { CustomMultipleSelect } from "./CustomMultipleSelect";
import "./styles.css";

const dropDownNutrientFourRsData = [
  { id: 1, name: "Right Source" },
  { id: 2, name: "Right Rate" },
  { id: 3, name: "Right Time" },
  { id: 4, name: "Right Place" }
];

export default function App() {
  const [nutrientFourRs, setNutrientFourRs] = useState("");

  const onChange = (e) => {
    let fieldName;
    fieldName = e.target.name.replace("Select", "");
    console({ fieldName, value: e.target.value });
  };

  return (
    <div className="App">
      <CustomMultipleSelect
        label={<span>Nutrient stewardship?</span>}
        id="nutrientFourRs"
        idProperty="id"
        nameProperty="name"
        value={nutrientFourRs}
        values={dropDownNutrientFourRsData}
        onChange={onChange}
        includeEmptyValue
      />
    </div>
  );
}
