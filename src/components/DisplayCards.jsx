import React from 'react';
import dataMarseilles from '../data/marseillesLodgings.json';
import Card from './Card';

export default function DisplayCards() {
	return (
		<section class="lodgings">
			<div class="lodgings-container">
				<h2 id="lodgings" class="lodgings-title">
					Hébergements à Marseille
				</h2>
				<div class="lodgings-list">
					{dataMarseilles.map(({ id, title, cover, price, rating }) => (
						<Card
							key={id}
							id={id}
							title={title}
							cover={cover}
							price={price}
							rating={rating}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
