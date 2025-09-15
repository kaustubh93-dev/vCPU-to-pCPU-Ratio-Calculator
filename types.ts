
export enum RatioCategory {
  Optimal = 'Optimal',
  Balanced = 'Balanced',
  High = 'High',
  Overprovisioned = 'Overprovisioned',
  Invalid = 'Invalid',
}

export interface RatioInterpretation {
  category: RatioCategory;
  min: number;
  max: number;
  color: string;
  textColor: string;
  description: string;
}
