import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk';

export default function configureStore(initialState) {
	const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  	if (module.hot) {
    	// Enable Webpack hot module replacement for reducers
    	module.hot.accept('../reducers', () => {
      		const nextRootReducer = require('../reducers');
      		store.replaceReducer(nextRootReducer);
    	});
	}
	
  	return store;
}