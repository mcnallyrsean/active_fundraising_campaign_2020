import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import {
  addMonths,
  differenceInCalendarDays,
  isValid,
  parseISO,
} from "date-fns";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./styles/app.scss";
import DonationCard from "./components/DonationCard/DonationCard";
import Admin from "./components/Admin/Admin";
import createPersistedState from "use-persisted-state";

const useGoalState = createPersistedState("goal");
const useMinimumDonationState = createPersistedState("minimumDonation");
const useEndDateState = createPersistedState("endDate");
const useDaysRemainingState = createPersistedState("daysRemaining");
const useGoalReachedState = createPersistedState("goalReached");
const useDonationsTotalState = createPersistedState("donationsTotal");
const useAmountToGoalState = createPersistedState("amountToGoal");
const useTotalDonorsState = createPersistedState("totalDonors");

export default function App() {
  const [goal, setGoal] = useGoalState(5000.0);
  const [minimumDonation, setMinimumDonation] = useMinimumDonationState(5.0);
  const [endDate, setEndDate] = useEndDateState(addMonths(new Date(), 1));
  const [daysRemaining, setDaysRemaining] = useDaysRemainingState(0);
  const [goalReached, setGoalReached] = useGoalReachedState(false);
  const [donationsTotal, setDonationsTotal] = useDonationsTotalState(0);
  const [amountToGoal, setAmountToGoal] = useAmountToGoalState(
    goal - donationsTotal
  );
  const [totalDonors, setTotalDonors] = useTotalDonorsState(0);

  useEffect(() => {
    setAmountToGoal(goal - donationsTotal);
  }, [goal, donationsTotal]);

  useEffect(() => {
    amountToGoal <= 0 ? setGoalReached(true) : setGoalReached(false);
  }, [goal, amountToGoal]);

  useEffect(() => {
    if (isValid(endDate)) {
      setDaysRemaining(differenceInCalendarDays(endDate, new Date()));
    } else {
      setDaysRemaining(differenceInCalendarDays(parseISO(endDate), new Date()));
    }
  }, [endDate]);

  const alertOptions = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "15px",
    transition: transitions.SCALE,
  };

  return (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
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
              minimumDonation={minimumDonation}
              daysRemaining={daysRemaining}
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
              setTotalDonors={setTotalDonors}
              setDonationsTotal={setDonationsTotal}
              setAmountToGoal={setAmountToGoal}
            />
          </Route>
          <Route path="*">
            <DonationCard goal={goal} endDate={endDate} />
          </Route>
        </AnimatedSwitch>
      </Router>
    </AlertProvider>
  );
}
