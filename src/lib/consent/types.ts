export type Category = "necessary" | "functional" | "analytics" | "marketing";

export type ConsentCategories = Record<Category, boolean>;

export interface ConsentRecord {
  v: number;
  ts: string;
  cats: ConsentCategories;
}
