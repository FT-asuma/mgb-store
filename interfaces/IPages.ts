import { ICard } from "./ICard";

export interface IPages {
  result: {
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
    content: ICard[];
  };
}
