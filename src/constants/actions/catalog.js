import {
    CATALOG_CARDS,
    CATALOG_TABLE
} from "../actionTypes";

export const Cards_Catalog = () => (dispatch) => {
    dispatch({ type: CATALOG_CARDS });
};
export const Table_Catalog = () => (dispatch) => {
    dispatch({ type: CATALOG_TABLE });
};