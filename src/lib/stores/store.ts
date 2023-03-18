import { writable } from "svelte/store";

export const showOverlay = writable(false);

export const slowFadeOut = (timeout = 500) => {
  setTimeout(() => {
    showOverlay.set(false);
  }, timeout);
};
