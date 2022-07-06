import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "utils/twind";
export * from "utils/twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
};
if (IS_BROWSER) setup(config);
