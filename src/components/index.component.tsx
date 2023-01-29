import { useState } from "react";
import { getMovies } from "../commons/http"
import { Movies, Search, MovieRent, MovieSale } from "../interfaces/movie.interface";
import { Select } from "../styles/form";
import { getFromLocalStorage, saveToLocalStorage } from "../commons/localStorage";
import CarList from "./car.component";
import Modal from "./modal.component";
import FormRent from "./rent.component";
import FormSale from "./sale.component";
import Table from "./table.component";

import { useDispatch } from "react-redux";
import { AddCar, ClearCar } from "../redux/car.actions"

const movies: Movies = await getMovies();

export function MoviesIndex(){

    const [item, setItem] = useState<Search>();
    const [items, setItems] = useState<Search[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [typeRequest, setTypeRequest] = useState<string>("");
    const [form, setForm] = useState<React.ReactNode>(<></>);

    const dispatch = useDispatch();

    const addCart = (movie: Search) => {
        if (!typeRequest){
            setForm(<h3>Debe Seleccionar el tipo de solicitud!</h3>)
            setOpen(true)
            return false;
        }
        setItem(movie)
        setForm(setFormCar(movie))
        setOpen(true)
    }

    const handleTypeRequest = (e: React.ChangeEvent<HTMLSelectElement>) => {
        saveToLocalStorage([]);
        dispatch(ClearCar());
        setTypeRequest(e.target.value)
    }

    const setFormCar = (movie: Search) => {
        if (typeRequest == "renta"){
            return <>
            <FormRent item={movie} onSubmit={rentSubmit} onFinish={onFinish} />
            <CarList></CarList>
            </>
        }

        if (typeRequest == "venta"){
            return <>
            <FormSale item={movie} onSubmit={saleSubmit} onFinish={onFinish} />
            <CarList></CarList>
            </>
        }
    }

    const rentSubmit = ( movie: MovieRent) => {
        const itemsLocal = getFromLocalStorage<MovieRent>();

        if (itemsLocal){
            itemsLocal.push(movie);
            setItems(itemsLocal);
            saveToLocalStorage(itemsLocal);
        }else{
            saveToLocalStorage([movie]);
        }

        dispatch(AddCar(movie));
    }

    const saleSubmit = (movie: MovieSale) => {

        const itemsLocal = getFromLocalStorage<MovieSale>();

        if (itemsLocal){
            itemsLocal.push(movie);
            setItems(itemsLocal);
            saveToLocalStorage(itemsLocal);
        }else{
            saveToLocalStorage([movie]);
        }

        dispatch(AddCar(movie));
    }

    const onFinish = () => {
        setOpen(false)
        saveToLocalStorage([]);
        dispatch(ClearCar());
        setForm(<h3>Compra exitosa!</h3>)
        setOpen(true)
    }

    return (
        <div>
            <h3>Tipo de Solicitud:</h3>
            <Select onChange={(e)=>handleTypeRequest(e)}>
                <option value="">--Seleccione el tipo de solicitud</option>
                <option value="renta">Renta/Alquiler</option>
                <option value="venta">Venta</option>
            </Select>
            
            <Table movies={movies.Search} addCart={addCart} />

            <Modal 
                isOpen={open} 
                onClose={()=> setOpen(false) } 
                children={form}   
            />
        </div>
    );
}

export default MoviesIndex;