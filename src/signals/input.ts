import { effect, signal } from "@preact/signals-react";

export const LS_KEY = "USER_WORd";

const getUserWordFromLS = () => {
  return localStorage.getItem(LS_KEY) ?? "";
};

export const userWord = signal<string>(getUserWordFromLS());

effect(() => {
  localStorage.setItem(LS_KEY, userWord.value);
});
