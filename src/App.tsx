import { useEffect, useState } from 'react';
import { Row } from './components/Row';
import styled from 'styled-components';
import { PortionsCount, Variant } from './types';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin: 0 auto;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

const getInitialPortionsCount = (): PortionsCount => {
	const savedPortionsCount = localStorage.getItem('portionsCount');
	return savedPortionsCount
		? JSON.parse(savedPortionsCount)
		: {
				protein: 0,
				carbs: 0,
				fat: 0,
				veggies: 0,
			};
};

const useCountPortions = () => {
	const [portionsCount, setPortionsCount] = useState<PortionsCount>(
		getInitialPortionsCount
	);

	const handleClick = (index: number, variant: Variant) => {
		setPortionsCount(prev => ({
			...prev,
			[variant]: prev[variant] <= index ? index + 1 : index,
		}));
	};

	useEffect(() => {
		localStorage.setItem('portionsCount', JSON.stringify(portionsCount));
	}, [portionsCount]);

	return { portionsCount, handleClick };
};

function App() {
	const { portionsCount, handleClick } = useCountPortions();
	const variants: Variant[] = ['protein', 'carbs', 'fat', 'veggies'];

	return (
		<Wrapper>
			{variants.map(variant => (
				<Row
					key={variant}
					variant={variant}
					portionsCount={portionsCount}
					onButtonClick={handleClick}
				/>
			))}
		</Wrapper>
	);
}

export default App;
