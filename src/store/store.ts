import {useMemo} from 'react';
// import { useSubscription } from "use-subscription";

function createStore(initialState = {}) {
  let state = initialState;
  const listeners = new Set();

  function getState() {
    return state;
  }

  function subscription(selector: string) {}

  function setState(partial) {
    const nextState = typeof partial === 'function' ? partial(state) : partial;
    state = nextState;
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
  return {getState, setState, subscribe, subscription};
}
