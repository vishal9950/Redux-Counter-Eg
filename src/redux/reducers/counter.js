const defaultState = {
  abc: 0,
};
const reducer = (state = defaultState, action) => {
  if (action.type === 'INCREMENT') {
    return { abc: state.abc + 1 };
  } else if (action.type === 'DECREMENT') {
    return { abc: state.abc - 1 };
  }
  return state;
};

export default reducer;

