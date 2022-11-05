import { atom } from "recoil";

export const selectedHand = atom({
  key: "SelectedHand",
  default: null,
});

export const score = atom({
  key: "Score",
  default: 0,
});
