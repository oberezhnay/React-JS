const { createStore } = require('redux');

const initialValue = {
    counts: 0,
    value: 23
};

const INCREMENT_ACTION = 'INCREMENT';
const DECREMENT_ACTION = 'DECREMENT';

const store = createStore(reducer);

function reducer(state = initialValue, { type }) {
    switch (type) {
        case INCREMENT_ACTION:
            return { ...state, counts: ++state.counts };
        case DECREMENT_ACTION:
            return { ...state, counts: --state.counts };
        default:
            return state;
    }
}

console.log(store.getState());

function inrement() {
    return {
        type: INCREMENT_ACTION
    };
}
function decrement() {
    return {
        type: DECREMENT_ACTION
    };
}

store.dispatch(inrement());
store.dispatch({ type: INCREMENT_ACTION });
store.dispatch({ type: INCREMENT_ACTION });
store.dispatch(decrement());
// store.dispatch({ type: 'sub' });
console.log(store.getState());
