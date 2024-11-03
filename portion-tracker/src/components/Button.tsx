import { styled } from 'styled-components';
import { Variant } from '../types';
import { getVariantColor } from '../utils';

interface ButtonProps {
	variant: Variant;
	isSelected: boolean;
	onClick: () => void;
}

const StyledButton = styled.button<{ $isSelected: boolean; $variant: Variant }>`
	width: 20px;
	height: 20px;
	border-radius: 20px;

	background-color: ${({ $variant, $isSelected }) =>
		$isSelected ? getVariantColor($variant) : 'white'};

	border: 2px solid ${({ $variant }) => getVariantColor($variant)};
`;

export const Button = ({ variant, onClick, isSelected }: ButtonProps) => {
	return (
		<StyledButton
			$variant={variant}
			$isSelected={isSelected}
			onClick={onClick}
		/>
	);
};
