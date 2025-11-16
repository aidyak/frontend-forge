/// <reference types="vitest" />
/// <reference types="@vitest/browser/providers/playwright" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";

const useBrowser = process.env.VITEST_BROWSER === "true";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./src/setupTests.ts"],
    environment: useBrowser ? undefined : "jsdom",
    browser: useBrowser
      ? {
          enabled: true,
          provider: playwright(),
          instances: [{ browser: "chromium" }],
          api: {
            host: "127.0.0.1",
          },
        }
      : undefined,
  }
})
