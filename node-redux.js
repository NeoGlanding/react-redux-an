const { initial } = require('lodash');
const redux = require('redux');

const initialState = {
    counter: 0
}

const reducerFunction = (currentState = initialState, action) => {
    return {
        counter: currentState.counter + 1
    }
}
const store = redux.createStore(reducerFunction);

const storeSubscriber = () => {
    const state = store.getState();
    console.log(state)
}

// console.log(store.getState())

store.subscribe(storeSubscriber);

store.dispatch({type: 'increment'})