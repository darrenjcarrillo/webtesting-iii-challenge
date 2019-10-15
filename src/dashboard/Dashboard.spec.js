// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Dashboard from "./Dashboard";
import Controls from "../Controls/Controls";

test("Dashboard renders correctly", () => {
  render(<Dashboard />);
});

test("Gate is default to unlocked", () => {
  const unlockedGate = jest.fn();

  const { getByText } = render(<Controls locked={false} closed={false} />);

  fireEvent.click(getByText(/close gate/i));
  expect(unlockedGate).toHaveBeenCalledTimes(0);
});

test("cant be closed or opened if its locked", () => {
  const superLockedGate = jest.fn();

  const { getByText } = render(
    <Controls toggleLocked={superLockedGate} locked={true} closed={true} />
  );

  fireEvent.click(getByText(/unlock gate/i));
  expect(superLockedGate).toHaveBeenCalledTimes(1);
  expect(superLockedGate).toBeTruthy();
});

test("cant be closed or opened if its locked", () => {
  const lockedGate = jest.fn();

  const { getByText } = render(
    <Controls toggleClosed={lockedGate} locked={false} closed={true} />
  );

  fireEvent.click(getByText(/open gate/i));
  expect(lockedGate).toHaveBeenCalledTimes(1);
  expect(lockedGate).toBeTruthy();
});
