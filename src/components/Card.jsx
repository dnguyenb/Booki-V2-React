import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ id, cover, title }) {
  return (
		<Link to={`/hebergements/${id}`} className="lodging-card">
			<img src={cover} alt={title} />
			<h3 className="lodging-title">{title}</h3>
		</Link>
	);
}
