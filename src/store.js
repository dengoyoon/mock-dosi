import { atom } from "recoil";

export const headerState = atom({
  key: "headerState",
  default: {
    isDark: true,
  },
});

export const userProfileState = atom({
  key: "userProfile",
  default: {
    isLogin: false,
  },
});
