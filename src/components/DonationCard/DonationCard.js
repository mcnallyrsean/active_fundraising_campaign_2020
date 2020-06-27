import React, { useState, useEffect } from "react";
import ProgressText from "./ProgressText";
import ProgressBar from "./ProgressBar";
import DonationCardText from "./DonationCardText";
import Form from "./Form";

export default function DonationCard({
  goal,
  endDate,
  goalReached,
  donationsTotal,
  amountToGoal,
  totalDonors,
  setDonationsTotal,
  setTotalDonors,
}) {
  const handleDonation = (amount) => {
    setDonationsTotal(donationsTotal + amount);
  };

  return (
    <div className="card-container">
      <div className="card-top">
        <ProgressText
          goal={goal}
          amountToGoal={amountToGoal}
          goalReached={goalReached}
        ></ProgressText>
      </div>
      <div className="card-main">
        <ProgressBar donationsTotal={donationsTotal} goal={goal}></ProgressBar>
        <DonationCardText
          goalReached={goalReached}
          endDate={endDate}
          totalDonors={totalDonors}
        ></DonationCardText>
        <Form
          handleDonation={handleDonation}
          totalDonors={totalDonors}
          setTotalDonors={setTotalDonors}
        ></Form>
      </div>
    </div>
  );
}
