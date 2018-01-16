const INITIAL_STATE = {
  isAuthenticatedUser: false
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'updateIsAuthenticatedUser') {
    return { ...state, isAuthenticatedUser: action.payload };
  }

  return state;
};
