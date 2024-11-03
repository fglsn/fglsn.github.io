import { styled } from 'styled-components';
import { PortionsCount, Variant } from '../types';
import { Button } from './Button';
import { getVariantColor, getVariantLabel } from '../utils';

interface RowProps {
	variant: Variant;
	portionsCount: PortionsCount;
	onButtonClick: (index: number, variant: Variant) => void;
}

const Wrapper = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
	height: 32px;
`;

const Label = styled.p`
	font-size: 26px;
	margin-right: 10px;
`;

const CountIndicator = styled.p<{ $variant: Variant }>`
	color: ${({ $variant }) => getVariantColor($variant)};
	margin-start: 10px;
`;

export const Row = ({ variant, portionsCount, onButtonClick }: RowProps) => {
	const renderButtons = () =>
		Array.from({ length: 7 }, (_, index) => (
			<Button
				key={index}
				variant={variant}
				onClick={() => onButtonClick(index, variant)}
				isSelected={
					index < portionsCount[variant] || index + 1 === portionsCount[variant]
				}
			/>
		));

	return (
		<Wrapper>
			<Label>{getVariantLabel(variant)}</Label>
			{renderButtons()}
			<CountIndicator $variant={variant}>
				{portionsCount[variant]}
			</CountIndicator>
		</Wrapper>
	);
};
