import { CellMovie, RowMovie, TableMovies } from "../styles/table";

import { useSelector } from "react-redux";
import { RootState } from "../redux/car.combine";

export function CarList() {

    const itemsStore = useSelector((state: RootState) => state.car.data);

    // const itemsLocal = getFromLocalStorage<MovieRent | MovieSale>() ?? [];

    return (
        <div>
            <TableMovies>
                <RowMovie>
                    <CellMovie font="bold">Titulo</CellMovie>
                    <CellMovie font="bold">Año</CellMovie>
                    <CellMovie font="bold">Tipo</CellMovie>
                    <CellMovie font="bold">Cantidad</CellMovie>
                </RowMovie>
                {itemsStore.map((row, i) => (
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