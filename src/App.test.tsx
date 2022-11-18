import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

it("should count when clicked", async () => {
  render(<App />);
  expect(screen.getByRole("button").textContent).toEqual("count is 0");
  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button").textContent).toEqual("count is 1");
});
