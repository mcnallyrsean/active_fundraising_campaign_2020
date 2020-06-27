import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { format, parseISO } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Admin({
  goal,
  setGoal,
  endDate,
  setEndDate,
  minimumDonation,
  setMinimumDonation,
}) {
  console.log(endDate);
  const [potentialGoal, setPotentialGoal] = useState(0);
  const [potentialMinimum, setPotentialMinimum] = useState(0);
  const [potentialEndDate, setPotentialEndDate] = useState(parseISO(endDate));

  const handleMoneyChange = (val, setFormatted) => {
    setFormatted(val);
  };

  const handleSubmit = () => {
    setGoal(potentialGoal);
    setMinimumDonation(potentialMinimum);
    setEndDate(parseISO(potentialEndDate));
  };

  return (
    <div className="admin">
      <h1>
        SUPER SECRET ADMIN PAGE THAT WOULD NORMALLY BE HIDDEN BY AUTH AND/OR
        PERMISSIONS
      </h1>
      <div>
        <fieldset className="fieldset">
          <label htmlFor="goal">Goal($) - Current {goal}</label>
          <NumberFormat
            value={potentialGoal.formattedValue}
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
          <label htmlFor="goal">
            Minimum Donatation ($) - Current {minimumDonation}
          </label>
          <NumberFormat
            value={potentialMinimum.formattedValue}
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
          <label htmlFor="endDate">
            End Date - Current {format(new Date(endDate), "MM-dd-yyyy")}
          </label>
          <DatePicker
            selected={potentialEndDate}
            onChange={(val) => setPotentialEndDate(val)}
          />
        </fieldset>
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </div>
  );
}
