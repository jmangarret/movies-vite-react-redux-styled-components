import { MovieRent, MovieSale } from "../interfaces/movie.interface";
import { CarActionsTypes, ADD_CAR, CLEAR_CAR, ClearActionsTypes } from "./car.types";

export function AddCar(movie: MovieRent | MovieSale): CarActionsTypes {
  return {
    type: ADD_CAR,
    payload: { movie }
  };
}

export function ClearCar(): ClearActionsTypes {
  return {
    type: CLEAR_CAR
  };
}