import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useAlert } from "react-alert";

export default function Form({
  handleDonation,
  totalDonors,
  setTotalDonors,
  minimumDonation,
  daysRemaining,
}) {
  const alert = useAlert();
  const [inputAmount, setInputAmount] = useState("");
  const [formattedAmount, setFormattedAmount] = useState("");

  const handleChange = (value) => {
    setFormattedAmount(value.formattedValue);
    setInputAmount(value.floatValue);
  };

  const handleSubmit = (value) => {
    if (value >= minimumDonation) {
      handleDonation(value);
      setTotalDonors(totalDonors + 1);
      setInputAmount("");
      setFormattedAmount("");
      alert.success("Donation submitted. Thank you!");
    } else {
      alert.error(`You must donate at least $${minimumDonation}`);
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
          disabled={daysRemaining < 0 ? true : false}
        />
      </label>

      <button
        disabled={daysRemaining < 0 ? true : false}
        type="submit"
        onClick={() => handleSubmit(inputAmount)}
      >
        Give Now
      </button>
    </div>
  );
}
