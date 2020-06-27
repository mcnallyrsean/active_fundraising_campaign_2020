import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

export default function ProgressText({ goal, amountToGoal, goalReached }) {
  return (
    <div className="progress-text-arrow">
      <p className="progress-text">
        <strong>
          <sup>$</sup>
          <NumberFormat
            value={Math.abs(amountToGoal)}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
          />
        </strong>
        {goalReached
          ? " over the project goal!"
          : " still needed to fund the project."}
      </p>
    </div>
  );
}

ProgressText.propTypes = {
  goal: PropTypes.number,
  goalReached: PropTypes.bool,
  amountToGoal: PropTypes.number,
};
