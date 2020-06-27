import React from "react";
import PropTypes from "prop-types";
import converter from "number-to-words";

export default function DonationCardText({
  totalDonors,
  goalReached,
  daysRemaining,
}) {
  if (daysRemaining >= 0) {
    return (
      <div>
        {goalReached && (
          <h1>
            Goal reached! You still have{" "}
            {daysRemaining < 21
              ? `${converter.toWords(daysRemaining)} `
              : `${daysRemaining} `}
            day
            {daysRemaining > 1 ? "s" : ""} left to fund this project.
          </h1>
        )}
        {!goalReached && (
          <h1 style={{ margin: "0" }}>
            Only{" "}
            {daysRemaining < 21
              ? `${converter.toWords(daysRemaining)} `
              : `${daysRemaining} `}
            day
            {daysRemaining > 1 ? "s" : ""} left to fund this project.
          </h1>
        )}
        {totalDonors > 0 ? (
          <p className="donation-card-text">
            Join the <strong>{totalDonors}</strong> total donor
            {totalDonors > 1 ? "s" : ""} who
            {totalDonors > 1 ? " have" : " has"} already supported this project.
          </p>
        ) : (
          <p className="donation-card-text">
            Please consider supporting this project.
          </p>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ margin: "0" }}>The campaign is over.</h1>
        <p className="donation-card-text">Thank you to all who donated!</p>
      </div>
    );
  }
}

DonationCardText.propTypes = {
  totalDonors: PropTypes.number,
  goalReached: PropTypes.bool,
  daysRemaining: PropTypes.number,
};
