import React, { useState } from "react";
import { differenceInCalendarDays } from "date-fns";

export default function DonationCardText({
  totalDonors,
  endDate,
  goalReached,
}) {
  const [daysRemaining] = useState(
    differenceInCalendarDays(endDate, new Date())
  );

  return (
    <div>
      {goalReached && <h1>Goal reached!</h1>}
      {!goalReached && (
        <h1 style={{ margin: "0" }}>
          Only {daysRemaining} day{daysRemaining > 1 ? "s" : ""} left to fund
          this project.
        </h1>
      )}

      <p className="donation-card-text">
        Join the <strong>{totalDonors}</strong> total donors who have already
        supported this project.
      </p>
    </div>
  );
}
