import React from "react";
import PropTypes from "prop-types";
import converter from "number-to-words";

const Header = ({ daysRemaining, goalReached }) => {
  if (daysRemaining >= 1) {
    return (
      <h1 style={{ margin: "0" }}>
        {goalReached ? "Goal Reached! You still have" : "Only"}
        {daysRemaining < 21
          ? ` ${converter.toWords(daysRemaining)} `
          : ` ${daysRemaining} `}
        day
        {daysRemaining > 1 ? "s" : ""} left to fund this project.
      </h1>
    );
  } else {
    return (
      <h1 style={{ margin: "0" }}>
        {goalReached ? "Goal Reached! " : "We're counting on you! "}
        Please contribute on this final day of the fundraising drive.
      </h1>
    );
  }
};

export default function DonationCardText({
  totalDonors,
  goalReached,
  daysRemaining,
}) {
  if (daysRemaining >= 0) {
    return (
      <div>
        <Header
          goalReached={goalReached}
          daysRemaining={daysRemaining}
        ></Header>
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
