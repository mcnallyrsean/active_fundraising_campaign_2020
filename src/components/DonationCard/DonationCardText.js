import React, { useState } from "react";
import { differenceInCalendarDays, parseISO } from "date-fns";
import converter from "number-to-words";

export default function DonationCardText({
  totalDonors,
  endDate,
  goalReached,
}) {
  const [daysRemaining] = useState(
    differenceInCalendarDays(parseISO(endDate), new Date())
  );

  return (
    <div>
      {goalReached && <h1>Goal reached!</h1>}
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
}
