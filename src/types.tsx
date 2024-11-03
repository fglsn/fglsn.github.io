export type Variant = 'protein' | 'carbs' | 'fat' | 'veggies';
export type Color = 'grey' | 'yellow' | 'brown' | 'orange';

export interface PortionsCount {
	protein: number;
	carbs: number;
	fat: number;
	veggies: number;
}
