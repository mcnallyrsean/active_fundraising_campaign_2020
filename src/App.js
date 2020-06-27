import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/app.scss";
import DonationCard from "./components/DonationCard/DonationCard";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="*">
          <DonationCard />
        </Route>
      </Switch>
    </Router>
  );
}
