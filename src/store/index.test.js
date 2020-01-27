import { reducer, initialState, actions } from "./index";

test("initial state", () => {
  expect(initialState).toBe(0);
});

test("dec/inc/set actions work properly", () => {
  expect(reducer(4, { type: actions.dec })).toBe(3);
  expect(reducer(0, { type: actions.dec })).toBe(0);

  expect(reducer(4, { type: actions.inc })).toBe(5);
  expect(reducer(100, { type: actions.inc })).toBe(100);

  expect(reducer(100, { type: actions.set, payload: 7 })).toBe(7);
});

test("throw error for unknown action", () => {
  expect(() => reducer(100, { type: actions.asdasd })).toThrow(Error);
});
