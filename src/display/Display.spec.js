// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "../Controls/Controls";
import Display from "./Display";

test("Controls renders correctly", () => {
  render(<Controls />);
});

// test("Display if gate is open/closed and if it is locked/unlocked", () => {
//   const displayOpenGate = jest.fn();

//   const { getByText } = render(<Controls locked={false} locked={false} />);

//   fireEvent.click(getByText(/open/i));
//   expect(displayOpenGate).toHaveBeenCalledTimes(1);
// });
// test("Display if gate is open/closed and if it is locked/unlocked", () => {
//   const displayOpenGate = jest.fn();

//   const { getByText } = render(<Controls locked={false} closed={false} />);

//   fireEvent.click(getByClass(/open/i));
//   expect(displayOpenGate).toHaveBeenCalledTimes(0);
// });

test("Displays 'Closed' if the `closed` prop is `true`", () => {
  const lockedGate = jest.fn();

  const { getByText } = render(
    <Display toggleClosed={lockedGate} locked={false} closed={true} />
  );

  fireEvent.click(getByText(/open/i));
  expect(lockedGate).toHaveBeenCalledTimes(1);
  expect(lockedGate).toBeTruthy();
});
