import { atom } from "recoil";

export const headerState = atom({
  key: "headerState",
  default: {
    isDark: true,
  },
});
