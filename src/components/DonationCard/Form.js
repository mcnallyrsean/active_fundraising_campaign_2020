import React, { useState } from "react";
import PropTypes from "prop-types";
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

  const handleSubmit = (e, value) => {
    e.preventDefault();
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
    <form className="form">
      <label>
        <span className="aria-text">Donation Form:</span>
        <NumberFormat
          value={formattedAmount}
          thousandSeparator={true}
          decimalScale={2}
          prefix={"$"}
          placeholder={"$"}
          displayType={"input"}
          allowNegative={false}
          onValueChange={(value) => handleChange(value)}
          disabled={daysRemaining < 0 ? true : false}
        />
      </label>

      <button
        disabled={daysRemaining < 0 ? true : false}
        type="submit"
        onClick={(e) => handleSubmit(e, inputAmount)}
      >
        Give Now
      </button>
    </form>
  );
}

Form.propTypes = {
  handleDonation: PropTypes.func,
  setTotalDonors: PropTypes.func,
  totalDonors: PropTypes.number,
  minimumDonation: PropTypes.number,
  daysRemaining: PropTypes.number,
};
