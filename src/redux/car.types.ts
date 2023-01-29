import { MovieRent, MovieSale } from "../interfaces/movie.interface";

export const ADD_CAR = "@movies/ADD_CART";

export const CLEAR_CAR = "@movies/CLEAR_CAR";

export interface CarState {
  data: MovieRent[] | MovieSale[];
}

interface AddCar {
  type: typeof ADD_CAR;
  payload: { movie: MovieRent | MovieSale };
}

interface ClearCar {
  type: typeof CLEAR_CAR;
}

export type CarActionsTypes = AddCar;
export type ClearActionsTypes = ClearCar;