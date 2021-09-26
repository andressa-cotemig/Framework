import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
  newValue: ''
};
export const clickReducer = (state = initialState, action) => {
  console.log({state, action})
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};