import React from 'react';
import Card from './Card';
import dataMarseille from "../data/marseilleLodgings.json";

export default function Gallery() {
  return (
		<div>
			{dataMarseille.map((lodging) => (
				<Card
					key={lodging.id}
					title={lodging.title}
					cover={lodging.cover}
					id={lodging.id}
				/>
			))}
		</div>
	);
}
