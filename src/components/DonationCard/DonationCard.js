import React, { useState, useEffect } from "react";
import ProgressText from "./ProgressText";
import ProgressBar from "./ProgressBar";
import DonationCardText from "./DonationCardText";
import Form from "./Form";

export default function DonationCard() {
  const [goal, setGoal] = useState(5000.0);
  const [goalReached, setGoalReached] = useState(false);
  const [donationsTotal, setDonationsTotal] = useState(0);
  const [amountToGoal, setAmountToGoal] = useState(goal - donationsTotal);
  const [totalDonors, setTotalDonors] = useState(0);
  const [endDate, setEndDate] = useState(new Date(2020, 6, 2, 0, 0));

  const handleDonation = (amount) => {
    setDonationsTotal(donationsTotal + amount);
  };

  useEffect(() => {
    setAmountToGoal(goal - donationsTotal);
  }, [donationsTotal]);

  useEffect(() => {
    if (amountToGoal <= 0) {
      setGoalReached(true);
    }
  }, [amountToGoal]);

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
