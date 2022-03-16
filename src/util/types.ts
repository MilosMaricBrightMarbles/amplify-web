import { ReactNode } from "react";

export type ChildrenOnly = { children?: ReactNode };
export type ChildrenAndClass = ChildrenOnly & { className?: string };

export type Term = { name: string; count: number };
export type ConversationCategory = {
  name: string;
  keywords: Term[];
  hashtags: Term[];
  percentage: number;
  percentageDelta: number;
  opinions: { date: string; count: number }[];
};
