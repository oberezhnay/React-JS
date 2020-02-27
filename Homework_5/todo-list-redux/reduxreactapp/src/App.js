import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Calculator from './components/CalculatorWrapper';
console.log(store);

function App() {
    return (
        <Provider store={store}>
            <Calculator />
        </Provider>
    );
}

export default App;
