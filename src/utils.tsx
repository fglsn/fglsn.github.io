import { Variant } from './types';

export const getVariantColor = (variant: Variant) => {
	switch (variant) {
		case 'protein':
			return '#9b9a9a';
		case 'carbs':
			return '#ffcf07';
		case 'fat':
			return '#a04444';
		case 'veggies':
			return '#ff9900';
		default:
			return 'grey';
	}
};

export const getVariantLabel = (variant: Variant) => {
	switch (variant) {
		case 'protein':
			return '🥚';
		case 'carbs':
			return '🌾';
		case 'fat':
			return '🌰';
		case 'veggies':
			return '🥕';
	}
};
