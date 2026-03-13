const initialState = {
  count: 0,
};

export function reducer(state = initialState, action) {
  if (action.type === "ADD") {
    return { count: state.count + 1 };
  }
  return state;
}