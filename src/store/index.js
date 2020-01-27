const min = 0;
const max = 100;

export const actions = {
  dec: "dec",
  inc: "inc",
  set: "set"
};

export const initialState = 0;

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.dec:
      return state === min ? state : state - 1;
    case actions.inc:
      return state === max ? state : state + 1;
    case actions.set:
      return action.payload;
    default:
      throw new Error(`Unknown action: ${action}`);
  }
};
