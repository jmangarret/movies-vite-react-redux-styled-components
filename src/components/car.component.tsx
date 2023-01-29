import { CellMovie, RowMovie, TableMovies } from "../styles/table";
import { getFromLocalStorage } from "../commons/localStorage";
import { MovieRent, MovieSale } from "../interfaces/movie.interface";

export function CarList() {

    const itemsLocal = getFromLocalStorage<MovieRent | MovieSale>() ?? [];

    return (
        <div>
            <TableMovies>
                <RowMovie>
                    <CellMovie font="bold">Titulo</CellMovie>
                    <CellMovie font="bold">Año</CellMovie>
                    <CellMovie font="bold">Tipo</CellMovie>
                    <CellMovie font="bold">Cantidad</CellMovie>
                </RowMovie>
                {itemsLocal.map((row, i) => (
                    <RowMovie key={i}>
                        <CellMovie>{row.Title}</CellMovie>
                        <CellMovie>{row.Year}</CellMovie>
                        <CellMovie>{row.Type}</CellMovie>
                        <CellMovie>{row.quantity}</CellMovie>
                    </RowMovie>
                ))}
            </TableMovies>
        </div>
    );
}

export default CarList;