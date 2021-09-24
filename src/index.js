import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list/List';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
		<List />
	</Provider>,
	document.getElementById('root')
);
