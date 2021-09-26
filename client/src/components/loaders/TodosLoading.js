import React from 'react';
import { css } from '@emotion/react';
import ClockLoader from 'react-spinners/ClockLoader';

//?STYLES
import './TodosLoading.css';

const TodosLoading = ({ loading }) => {
	const override = css`
		display: absolute;
	`;
	return (
		<div className="TodosLoading">
			<div className="tl-box">
				<ClockLoader
					color={'red'}
					loading={loading}
					css={override}
					size={150}
				/>
			</div>
		</div>
	);
};

export default TodosLoading;
