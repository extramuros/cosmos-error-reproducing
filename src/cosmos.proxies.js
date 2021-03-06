import createXhrProxy from 'react-cosmos-xhr-proxy';
import createReduxProxy from 'react-cosmos-redux-proxy';
import createRouterProxy from 'react-cosmos-router-proxy';
import { configureStore } from './store';

const ReduxProxy = createReduxProxy({
    createStore: state => configureStore(state)
});

export default [
    createXhrProxy(),
    ReduxProxy,
    createRouterProxy()
];