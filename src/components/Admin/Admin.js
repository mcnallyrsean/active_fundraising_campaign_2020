import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { useAlert } from "react-alert";
import { format, parseISO } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Arrow from "../Arrow/Arrow";

export default function Admin({
  goal,
  setGoal,
  endDate,
  setEndDate,
  minimumDonation,
  setMinimumDonation,
}) {
  const alert = useAlert();
  const [potentialGoal, setPotentialGoal] = useState(goal);
  const [potentialMinimum, setPotentialMinimum] = useState(minimumDonation);
  const [potentialEndDate, setPotentialEndDate] = useState(endDate);

  const handleMoneyChange = (val, setFormatted) => {
    val ? setFormatted(val) : setFormatted(0);
  };

  const handleSubmit = () => {
    if (potentialGoal && potentialMinimum && potentialEndDate) {
      setGoal(potentialGoal);
      setMinimumDonation(potentialMinimum);
      setEndDate(potentialEndDate);
      alert.success("Campaign updated.");
    } else {
      alert.error("There was a problem updating this campaign.");
    }
  };

  return (
    <div className="admin">
      <div className="link-to-donation">
        <Link to="/">
          <div className="link-to-donation-cnt">
            <div className="rotate-arrow">
              <Arrow></Arrow>
            </div>
            <span>Back to Donation Page</span>
          </div>
        </Link>
      </div>
      <h1>
        SUPER SECRET ADMIN PAGE THAT WOULD NORMALLY BE HIDDEN BY AUTH AND/OR
        PERMISSIONS
      </h1>
      <div className="admin-cnt">
        <fieldset className="fieldset">
          <label htmlFor="goal">Campaign Goal($)</label>
          <NumberFormat
            value={potentialGoal}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"$"}
            placeholder={"$"}
            displayType="input"
            onValueChange={(value) =>
              handleMoneyChange(value.floatValue, setPotentialGoal)
            }
          />
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="goal">Campaign Minimum Donation ($)</label>
          <NumberFormat
            value={potentialMinimum}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"$"}
            placeholder={"$"}
            displayType="input"
            onValueChange={(value) =>
              handleMoneyChange(value.floatValue, setPotentialMinimum)
            }
          />
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="endDate">Campaign End Date</label>
          <DatePicker
            selected={potentialEndDate ? new Date(potentialEndDate) : null}
            onChange={(val) => setPotentialEndDate(new Date(val))}
          />
        </fieldset>
        <button type="submit" onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
    </div>
  );
}
