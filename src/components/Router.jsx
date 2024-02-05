import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/sass/_App.scss';
import Home from '../pages/Home';
import NoPage from '../pages/NoPage';

export default function Router() {
  return (
    	<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
					<Route path="*" element={<NoPage />} />
			</Routes>
		</BrowserRouter>
	)
};
