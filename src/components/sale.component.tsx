import React, { useState } from "react";
import { MovieSale, Search } from "../interfaces/movie.interface";
import { Form } from "../styles/form";

interface Props {
  item: Search,
  onSubmit: (movie: MovieSale) => void;
  onFinish: () => void;
}

const FormSale: React.FC<Props> = ({item, onSubmit, onFinish }) => {
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const movie: MovieSale = {...item, quantity}
    onSubmit(movie);
  };

  return (
    <Form onSubmit={handleSubmit}>
        <h3>{item.Title} ({item.Year})</h3>
      <label>
        Cantidad:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Agregar</button>
      <button type="button" onClick={onFinish}>Finalizar</button>
    </Form>
  );
};

export default FormSale;
