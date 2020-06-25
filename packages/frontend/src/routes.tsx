import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import CreatePoint from './pages/CreatePoint';
import Home from './pages/Home';

const Routes = () => (
	<BrowserRouter>
		<Route path="/" component={Home} exact />
		<Route path="/create-point" component={CreatePoint} />
	</BrowserRouter>
);

export default Routes;
