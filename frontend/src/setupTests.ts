// Browser専用ユーティリティはブラウザモードのときだけ読み込む
if (typeof window !== "undefined" && (globalThis as any).vitest?.browser) {
  await import("vitest-browser-react");
}

import "@testing-library/jest-dom/vitest";
