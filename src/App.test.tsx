import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";
import { renderCount } from "./trackRender";
import Counter from "./Counter";

it("should count when clicked", async () => {
  render(<App />);
  expect(screen.getByRole("button").textContent).toEqual("count is 0");
  expect(renderCount(App.name)).toEqual(1);
  expect(renderCount(Counter.name)).toEqual(1);
  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button").textContent).toEqual("count is 1");
  expect(renderCount(App.name)).toEqual(1);
  expect(renderCount(Counter.name)).toEqual(2);
});
