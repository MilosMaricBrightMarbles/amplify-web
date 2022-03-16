import { atom } from "jotai";

import { ConversationCategory } from "./types";

export const selectedDemographicAtom = atom<string>("");

export const categoriesAtom = atom<ConversationCategory[]>([]);
export const activeCategoryIndexAtom = atom<number | null>(null);
export const activeCategoryAtom = atom<ConversationCategory | null>(
  (get) =>
    get(categoriesAtom).filter(
      (c, i) => i === get(activeCategoryIndexAtom)
    )?.[0]
);
