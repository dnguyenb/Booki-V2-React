import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sass/_Cards.scss';
import RatingScale from './RatingScale';

export default function Card({ id, cover, title, price, rating }) {

	return (
		<article class="lodgings__card card-hover">
			<Link to={`/hebergements/${id}`} className="lodging-card">
				<img src={cover} alt={title} />
				<div class="lodgings__info">
					<div class="lodgings__info-text">
					<h3 className="lodging-title">{title}</h3>
						<p>Nuit à partir de {price}</p>
						</div>
					<RatingScale scaleValue={rating} />
				</div>
			</Link>
		</article>
	);
}
