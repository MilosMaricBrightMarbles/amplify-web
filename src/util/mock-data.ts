import format from "date-fns/format";
import subDays from "date-fns/subDays";

import { dateFormat } from "./constants";
import { ConversationCategory, Term } from "./types";

const random = (min = 0, max = 1, round = true) => {
  const x = Math.round(10 * (Math.random() * max)) / 10;

  return round ? Math.max(min, Math.floor(x)) : x;
};
type Props = { maxCount: number; termNames: string[] };
const generateTerms = ({ maxCount, termNames }: Props): Term[] =>
  Array(10)
    .fill({})
    .map((x, i) => ({
      count: random(1, maxCount),
      name: termNames[i],
    }));

const keywords = [
  "variant",
  "omicron",
  "covid",
  "delta",
  "virus",
  "people",
  "strain",
  "vaccine",
  "time",
  "vaccinated",
];
const hashes = [
  "#COVID19",
  "#COVID",
  "#Omicron",
  "#OMICRON",
  "#comics",
  "#Color",
  "#BA2",
  "#MultiverseOfMadness",
  "#omicron",
  "#DoctorStrange",
];
const now = new Date();
export const mockData = (): ConversationCategory[] =>
  [
    {
      name: "COVID-19 Testing",
      percentage: random(0, 5, false),
      percentageDelta: random(0, 1, false),
    },
    {
      name: "COVID-19 Treatments",
      percentage: random(0, 5, false),
      percentageDelta: -random(0, 1, false),
    },
    {
      name: "COVID-19 Vaccines",
      percentage: random(0, 5, false),
      percentageDelta: random(0, 1, false),
    },
  ].map((x) => ({
    ...x,
    hashtags: generateTerms({ maxCount: 50, termNames: hashes }),
    keywords: generateTerms({
      maxCount: 5000,
      termNames: keywords,
    }),
    opinions: [1, 2, 3, 4, 5, 6, 7].map((days) => ({
      count: random(200, 1000),
      date: format(subDays(now, days), dateFormat),
    })),
  }));
