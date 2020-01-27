const min = 0;
const max = 5;

export const actions = {
  dec: "dec",
  inc: "inc"
};

export const initialState = 0;

export const reducer = (state, action) => {
  switch (action) {
    case actions.dec:
      return state === min ? state : state - 1;
    case actions.inc:
      return state === max ? state : state + 1;
    default:
      throw new Error(`Unknown action: ${action}`);
  }
};
