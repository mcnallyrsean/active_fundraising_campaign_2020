import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import App from "../App";
import DonationCard from "../components/DonationCard/DonationCard";

describe("App", () => {
  test("snapshot renders", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the inner DonationCard", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("DonationCard").length).toEqual(1);
  });
});

describe("DonationCard", () => {
  test("snapshot renders", () => {
    const component = renderer.create(
      <AlertProvider template={AlertTemplate}>
        <BrowserRouter>
          <DonationCard></DonationCard>
        </BrowserRouter>
      </AlertProvider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the inner Progress Text", () => {
    const wrapper = mount(
      <AlertProvider template={AlertTemplate}>
        <BrowserRouter>
          <DonationCard></DonationCard>
        </BrowserRouter>
      </AlertProvider>
    );
    expect(wrapper.find("ProgressText").length).toEqual(1);
  });

  it("renders the inner Progress Bar", () => {
    const wrapper = mount(
      <AlertProvider template={AlertTemplate}>
        <BrowserRouter>
          <DonationCard></DonationCard>
        </BrowserRouter>
      </AlertProvider>
    );
    expect(wrapper.find("ProgressBar").length).toEqual(1);
  });

  it("renders the inner Donation Card Text", () => {
    const wrapper = mount(
      <AlertProvider template={AlertTemplate}>
        <BrowserRouter>
          <DonationCard></DonationCard>
        </BrowserRouter>
      </AlertProvider>
    );
    expect(wrapper.find("DonationCardText").length).toEqual(1);
  });

  it("renders the inner Form", () => {
    const wrapper = mount(
      <AlertProvider template={AlertTemplate}>
        <BrowserRouter>
          <DonationCard></DonationCard>
        </BrowserRouter>
      </AlertProvider>
    );
    expect(wrapper.find("Form").length).toEqual(1);
  });
});
