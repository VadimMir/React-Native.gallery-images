import React from 'react'
import {
    AppRegistry
} from 'react-native'

import {Provider} from 'react-redux'
import configureStore from './configureStore'
import App from './app'
import {name as appName} from './app.json';

const store = configureStore();

const ReduxApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
