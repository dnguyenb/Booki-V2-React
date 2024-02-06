import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const star = <FontAwesomeIcon icon={faStar} />;
const starGrey = <FontAwesomeIcon icon={faStar} />;


const RatingScale = (props) => {
	const scaleValue = props.scaleValue;

	const range = [1, 2, 3, 4, 5];

	return (
		<div class="stars">
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? 
					 <div key={rangeElem.toString()} className='stars--blue'>{star}</div> 
                    : <div key={rangeElem.toString()} className='stars--grey'>{starGrey}</div>
			)}
		</div>
	);
};

export default RatingScale;
