import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/sass/_RatingScale.scss';

const star = <FontAwesomeIcon icon={faStar} />;
const starGrey = <FontAwesomeIcon icon={faStar} />;


const RatingScale = (props) => {
	const scaleValue = props.scaleValue;

	const range = [1, 2, 3, 4, 5];

	return (
		<div class="stars">
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? 
					 <span key={rangeElem.toString()} className='stars--blue'>{star}</span> 
                    : <span key={rangeElem.toString()} className='stars--grey'>{starGrey}</span>
			)}
		</div>
	);
};

export default RatingScale;
