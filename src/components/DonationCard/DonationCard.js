import React from "react";
import { Link } from "react-router-dom";
import ProgressText from "./ProgressText";
import ProgressBar from "./ProgressBar";
import DonationCardText from "./DonationCardText";
import Form from "./Form";
import Arrow from "../Arrow/Arrow";

export default function DonationCard({
  goal,
  endDate,
  goalReached,
  donationsTotal,
  amountToGoal,
  totalDonors,
  setDonationsTotal,
  setTotalDonors,
  minimumDonation,
  daysRemaining,
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
          daysRemaining={daysRemaining}
        ></DonationCardText>
        <Form
          daysRemaining={daysRemaining}
          handleDonation={handleDonation}
          totalDonors={totalDonors}
          setTotalDonors={setTotalDonors}
          minimumDonation={minimumDonation}
        ></Form>
        <div className="link-to-admin">
          <Link to="/super-secret-admin-page">
            <div className="link-to-admin-cnt">
              <Arrow></Arrow>
              <span>Super Secret Admin Page</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
