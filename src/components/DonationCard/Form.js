import React, { useState } from "react";
import NumberFormat from "react-number-format";

export default function Form({ handleDonation, totalDonors, setTotalDonors }) {
  const [inputAmount, setInputAmount] = useState("");
  const [formattedAmount, setFormattedAmount] = useState("");

  const handleChange = (value) => {
    setFormattedAmount(value.formattedValue);
    setInputAmount(value.floatValue);
  };

  const handleSubmit = (value) => {
    if (value >= 5) {
      handleDonation(value);
      setTotalDonors(totalDonors + 1);
      setInputAmount("");
      setFormattedAmount("");
    } else {
      console.log("plz give us more");
    }
  };

  return (
    <div className="form">
      <label>
        <span className="aria-text">Donation Form:</span>
        <NumberFormat
          value={formattedAmount}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={2}
          prefix={"$"}
          placeholder={"$"}
          displayType="input"
          onValueChange={(value) => handleChange(value)}
        />
      </label>

      <button type="submit" onClick={() => handleSubmit(inputAmount)}>
        Give Now
      </button>
    </div>
  );
}
