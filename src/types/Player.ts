import type { Category } from "./Category"

export type Sex = "F";

export type PlayerTitle =
    | "GM"
    | "IM"
    | "FM"
    | "CM"
    | "NM"
    | "WGM"
    | "WIM"
    | "WFM"
    | "WCM";

export interface PlayerSummary {
  id: number;
  name: string;
  fed: string
  rating: number;
  category: Category;
  title?: PlayerTitle;
}

export interface PlayerDetail extends PlayerSummary {
  birthday: string;
  sex?: Sex;
  club?: string;
  k: number;
}
