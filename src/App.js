import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { addMonths } from "date-fns";
import "./styles/app.scss";
import DonationCard from "./components/DonationCard/DonationCard";
import Admin from "./components/Admin/Admin";

export default function App() {
  const [goal, setGoal] = useState(5000.0);
  const [minimumDonation, setMinimumDonation] = useState(5.0);
  const [endDate, setEndDate] = useState(addMonths(new Date(), 1));

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DonationCard goal={goal} endDate={endDate} />
        </Route>
        <Route path="/super-secret-admin-page">
          <Admin
            goal={goal}
            setGoal={setGoal}
            endDate={endDate}
            setEndDate={setEndDate}
            minimumDonation={minimumDonation}
            setMinimumDonation={setMinimumDonation}
          />
        </Route>
        <Route path="*">
          <DonationCard goal={goal} endDate={endDate} />
        </Route>
      </Switch>
    </Router>
  );
}
