import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";

import { categoriesAtom, selectedDemographicAtom } from "../util/atoms";
import { mockData } from "../util/mock-data";

export const useCategories = () => {
  const setCategories = useSetAtom(categoriesAtom);
  const demographic = useAtomValue(selectedDemographicAtom);

  useEffect(() => {
    setCategories(mockData());
    // TODO: call API like {API_URL}/categories/{DEMOGRAPHIC} - default to ALL demographic
  }, [demographic, setCategories]);
};
