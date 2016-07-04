let defaultState = {
  title: 'Home'
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'TITLE_CHANGED':
      return {...state, title: action.text};
    default:
      return state;
  }
}
