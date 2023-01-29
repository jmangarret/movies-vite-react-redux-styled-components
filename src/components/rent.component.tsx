import React, { useState } from "react";
import { MovieRent, Search } from "../interfaces/movie.interface";
import { Form } from "../styles/form";

interface Props {
    item: Search,
    onSubmit: (movie: MovieRent) => void;
    onFinish: () => void;
}

const FormRent: React.FC<Props> = ({ item, onSubmit, onFinish }) => {
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const movie: MovieRent = {...item, date, quantity}
    onSubmit(movie);
  };

  return (
    <Form onSubmit={handleSubmit}>
        <h3>{item.Title} ({item.Year})</h3>
      <label>
        Fecha:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Cantidad:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={onFinish}>Finalizar</button>
    </Form>
  );
};

export default FormRent;
