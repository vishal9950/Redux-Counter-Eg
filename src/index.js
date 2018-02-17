import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import actions from './redux/actions';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

store.subscribe(render);

const App = () => (
  <div>Counter: {store.getState().counter.abc}
    <button onClick={() => { store.dispatch({ type: 'INCREMENT' }); }}>Increment</button>
    <button onClick={() => { store.dispatch({ type: 'DECREMENT' }); }}>Decrement</button>
  </div>
);


store.dispatch(actions.increment);
