import React, { useState } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { useAlert } from "react-alert";
import { addMonths } from "date-fns";
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
  setTotalDonors,
  setDonationsTotal,
  setAmountToGoal,
}) {
  const alert = useAlert();
  const [potentialGoal, setPotentialGoal] = useState(goal);
  const [potentialMinimum, setPotentialMinimum] = useState(minimumDonation);
  const [potentialEndDate, setPotentialEndDate] = useState(endDate);

  const handleMoneyChange = (val, setFormatted) => {
    val ? setFormatted(val) : setFormatted(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      potentialGoal &&
      potentialGoal >= 100 &&
      potentialMinimum &&
      potentialMinimum > 1 &&
      potentialEndDate
    ) {
      setGoal(potentialGoal);
      setMinimumDonation(potentialMinimum);
      setEndDate(potentialEndDate);
      alert.success("Campaign updated.");
    } else {
      alert.error("There was a problem updating this campaign.");
    }
  };

  const resetToDefaults = (e) => {
    e.preventDefault();
    setGoal(5000.0);
    setPotentialGoal(5000.0);
    setMinimumDonation(5.0);
    setPotentialMinimum(5.0);
    setTotalDonors(0);
    setEndDate(addMonths(new Date(), 1));
    setPotentialEndDate(addMonths(new Date(), 1));
    setAmountToGoal(5000.0);
    setDonationsTotal(0);
    alert.success("Campaign reset to defaults.");
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
      <form className="admin-cnt">
        <fieldset className="fieldset">
          <label htmlFor="goal">
            Campaign Goal (Must be greater than $100)
          </label>
          <NumberFormat
            value={potentialGoal}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"$"}
            placeholder={"$"}
            displayType={"input"}
            allowNegative={false}
            onValueChange={(value) =>
              handleMoneyChange(value.floatValue, setPotentialGoal)
            }
          />
        </fieldset>
        <fieldset className="fieldset">
          <label htmlFor="goal">
            Campaign Minimum Donation (Must be greater than $1)
          </label>
          <NumberFormat
            value={potentialMinimum}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"$"}
            placeholder={"$"}
            displayType={"input"}
            allowNegative={false}
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
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>

        <button
          className="danger"
          title="Reset campaign"
          onClick={(e) => resetToDefaults(e)}
        >
          Reset Campaign
        </button>
      </form>
    </div>
  );
}

Admin.propTypes = {
  goal: PropTypes.number,
  setGoal: PropTypes.func,
  endDate: PropTypes.any,
  setEndDate: PropTypes.func,
  minimumDonation: PropTypes.number,
  setMinimumDonation: PropTypes.func,
  setTotalDonors: PropTypes.func,
  setDonationsTotal: PropTypes.func,
  setAmountToGoal: PropTypes.func,
};
