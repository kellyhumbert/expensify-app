import { createStore } from 'redux';

// Action Generators
const incrementCount = ( { incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({ count } ) => ({
    type: 'SET',
    count
});
const resetCount = () => ({ 
    type: 'RESET' 
});

// reducers
// 1. reducers are pure functions - only rely on what is passed in and don't change anything putside
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Increment
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount());


// Decrement
// store.dispatch({
//     type: 'DECREMENT'
// });
store.dispatch(decrementCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });
store.dispatch(decrementCount({ decrementBy: 10 }));

// Required args
// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({ count: 101 }));