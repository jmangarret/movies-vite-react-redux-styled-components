import { Search } from "../interfaces/movie.interface";
import { Img } from "../styles/form";
import { CellMovie, RowMovie, TableMovies } from "../styles/table";;

interface Props {
    movies: Search[],
    addCart: (row: Search) => void
}

const Table: React.FC<Props> = ({ movies, addCart }) => {
    return (
        <TableMovies>
            <RowMovie>
                <CellMovie font="bold">Seleccionar</CellMovie>
                <CellMovie font="bold">Titulo</CellMovie>
                <CellMovie font="bold">Año</CellMovie>
                <CellMovie font="bold">Tipo</CellMovie>
                <CellMovie font="bold">Imagen</CellMovie>
            </RowMovie>
            {movies.map((row, i) => (
                <RowMovie key={i}>
                    <CellMovie>
                        <button onClick={() => addCart(row)} >Agregar</button>
                    </CellMovie>
                    <CellMovie>{row.Title}</CellMovie>
                    <CellMovie>{row.Year}</CellMovie>
                    <CellMovie>{row.Type}</CellMovie>
                    <CellMovie>
                        <Img src={row.Poster} />
                    </CellMovie>
                </RowMovie>
            ))}
        </TableMovies>
    )
}

export default Table;