/// <reference types="vitest" />
/// <reference types="@vitest/browser/providers/playwright" />

import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./src/setupTests.ts"],
    browser: {
      enabled: true,
      name: "chromium",
      // Vitest v4 以降は factory を指定する必要あり
      provider: () => playwright(),
    },
  }
})
