export interface Movies {
    Search:       Search[];
    totalResults: string;
    Response:     string;
}

export interface Search {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   Type;
    Poster: string;
}

export enum Type {
    Movie = "movie",
}

export interface MovieRent extends Search {
    date: string,
    quantity: number
}

export interface MovieSale extends Search {
    quantity: number
}