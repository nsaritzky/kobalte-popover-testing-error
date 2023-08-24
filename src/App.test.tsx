import { render, screen } from "@solidjs/testing-library";
import userEvent from "@testing-library/user-event";
import { test, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom";

import App from "./App";

test("Clicking 'open' sets aria-expanded to true", async () => {
  const user = userEvent.setup();
  render(() => <App />);
  const open = screen.getByRole("button", { name: "open" });
  await user.click(open);
  expect(open).toHaveAttribute("aria-expanded", "true");
});

test("Clicking 'open' opens a dialog", async () => {
  const user = userEvent.setup();
  render(() => <App />);
  const open = screen.getByRole("button", { name: "open" });
  await user.click(open);
  expect(screen.getByRole("dialog"));
});
