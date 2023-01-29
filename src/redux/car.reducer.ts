import { CarState, CarActionsTypes, ADD_CAR, CLEAR_CAR, ClearActionsTypes } from "./car.types";

const initialState: CarState = {
  data: []
};

export default function carReducer(
  state = initialState,
  action: CarActionsTypes | ClearActionsTypes
): CarState {
  switch (action.type) {
    case ADD_CAR:
      return {
        data: [...state.data, action.payload.movie]
      };

    case CLEAR_CAR:
        return {
            data: []
        };

    default:
      return state;
  }
}