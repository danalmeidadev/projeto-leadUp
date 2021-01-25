import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './routes';
import store from './store';
// import store from './store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar barStyle="light-content" />
                <Routes />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
