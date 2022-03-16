export enum Demographics {
  ALL = "all",
  NON_HISPANIC_WHITES = "non_hispanic_whites",
  HISPANIC_LATINOS = "hispanic_latinos",
  AFRICAN_AMERICANS = "african_americans",
  ASIANS = "asians",
  MULTI_RACIAL = "multi_racial",
  UNCLEAR = "unclear",
}
export const DemographicsLabels: Record<string, string> = {
  [Demographics.ALL]: "All",
  [Demographics.NON_HISPANIC_WHITES]: "Non-Hispanic Whites",
  [Demographics.HISPANIC_LATINOS]: "Hispanic/Latinos",
  [Demographics.AFRICAN_AMERICANS]: "African-Americans",
  [Demographics.ASIANS]: "Asians",
  [Demographics.MULTI_RACIAL]: "Multi-racial",
  [Demographics.UNCLEAR]: "Unclear",
};
