import styled from "styled-components";

export const TableMovies = styled.div`
  display: table;
  width: 100%;
`;

export const RowMovie = styled.div`
  display: table-row;
`;

interface CellProps {
  font?: string;
}

export const CellMovie = styled.div<CellProps>`
  display: table-cell;
  padding: 10px;
  border: 1px solid black;
  vertical-align: middle;
  font-weight: ${(props) => props.font || "normal"};
`;
