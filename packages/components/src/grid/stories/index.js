/**
 * External dependencies
 */
import { number } from '@storybook/addon-knobs';

/**
 * Internal dependencies
 */
import View from '../../view';
import Grid from '../index';

export default {
	component: Grid,
	title: 'Components/Grid',
};

const Item = ( props ) => (
	<View
		css={ {
			borderRadius: 8,
			background: '#eee',
			padding: 8,
			textAlign: 'center',
		} }
		{ ...props }
	/>
);

export const _default = () => {
	const props = {
		columns: number( 'columns', 4 ),
		gap: number( 'gap', 2 ),
	};
	return (
		<Grid alignment="bottom" { ...props }>
			<Item>One</Item>
			<Item>Two</Item>
			<Item>Three</Item>
			<Item>Four</Item>
			<Item>Five</Item>
			<Item>Six</Item>
			<Item>Seven</Item>
			<Item>Eight</Item>
		</Grid>
	);
};
