import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import App from "./App";

test("loads and displays greeting", async () => {
  const screen = render(<App />)

  await expect.element(screen.getByText("Vite + React")).toBeInTheDocument();
})
