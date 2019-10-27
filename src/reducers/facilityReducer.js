import { FACILITY } from "../actions/types";

const initialState = {
  amenities: {},
  list: {},
  pickedLocation: "all",
  validRequest: undefined
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FACILITY.CLEAR_AMENITIES:
      return {
        ...state,
        amenities: {}
      };
    case FACILITY.PICKED_LOCATION:
      return {
        ...state,
        pickedLocation: action.payload
      };
    case FACILITY.SET_AMENITIES:
      return {
        ...state,
        amenities: action.payload
      };
    case FACILITY.SET_LIST:
      return {
        ...state,
        list: action.payload
      };
    case FACILITY.VALID_REQUEST:
      return {
        ...state,
        validRequest: action.payload
      };
    default:
      return state;
  }
}
