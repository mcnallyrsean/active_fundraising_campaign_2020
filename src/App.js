import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { addMonths } from "date-fns";
import "./styles/app.scss";
import DonationCard from "./components/DonationCard/DonationCard";
import Admin from "./components/Admin/Admin";
import createPersistedState from "use-persisted-state";

const useGoalState = createPersistedState("goal");
const useMinimumDonationState = createPersistedState("minimumDonation");
const useEndDateState = createPersistedState("endDate");
const useGoalReachedState = createPersistedState("goalReached");
const useDonationsTotalState = createPersistedState("donationsTotal");
const useAmountToGoalState = createPersistedState("amountToGoal");
const useTotalDonorsState = createPersistedState("totalDonors");

export default function App() {
  const [goal, setGoal] = useGoalState(5000.0);
  const [minimumDonation, setMinimumDonation] = useMinimumDonationState(5.0);
  const [endDate, setEndDate] = useEndDateState(addMonths(new Date(), 1));
  const [goalReached, setGoalReached] = useGoalReachedState(false);
  const [donationsTotal, setDonationsTotal] = useDonationsTotalState(0);
  const [amountToGoal, setAmountToGoal] = useAmountToGoalState(
    goal - donationsTotal
  );
  const [totalDonors, setTotalDonors] = useTotalDonorsState(0);

  useEffect(() => {
    console.log(goal);
    console.log(donationsTotal);
    setAmountToGoal(goal - donationsTotal);
  }, [goal, donationsTotal]);

  useEffect(() => {
    amountToGoal <= 0 ? setGoalReached(true) : setGoalReached(false);
  }, [goal, amountToGoal]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DonationCard
            goal={goal}
            endDate={endDate}
            goalReached={goalReached}
            donationsTotal={donationsTotal}
            amountToGoal={amountToGoal}
            totalDonors={totalDonors}
            setDonationsTotal={setDonationsTotal}
            setTotalDonors={setTotalDonors}
          />
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
