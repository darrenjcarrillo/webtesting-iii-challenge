// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Controls from "../Controls/Controls";
import Display from "./Display";

test("Display renders correctly", () => {
  render(<Display />);
});

test("Displays 'Closed' if the `closed` prop is `true`", () => {
  const closedGate = jest.fn();

  const { getByText } = render(<Display closed={true} />);

  fireEvent.click(getByText(/Closed/i));
  expect(closedGate).toHaveBeenCalledTimes(0);
});

test("Displays 'Locked' if the `locked` prop is `true`", () => {
  const lockedGate = jest.fn();

  const { getByText } = render(<Display locked={true} />);

  fireEvent.click(getByText(/Locked/i));
  expect(lockedGate).toHaveBeenCalledTimes(0);
});

test("When locked or closed use the `red-led` class", () => {
  const lockedOrClosed = jest.fn();

  const { container } = render(<Display closed={true} />);

  expect(container.firstChild.classList.contains(/red-led/i));
});

test("When unlocked or open use the `red-led` class", () => {
  const lockedOrClosed = jest.fn();

  const { container } = render(<Display locked={false} />);

  expect(container.firstChild.classList.contains(/green-led/i));
});
