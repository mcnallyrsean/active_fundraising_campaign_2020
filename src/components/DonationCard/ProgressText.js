import React from "react";
import NumberFormat from "react-number-format";

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
