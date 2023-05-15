import {
    CATALOG_CARDS,
    CATALOG_TABLE
} from "../constants/actionTypes";

const initialState = {
    isCardsCatalog: false,
    isTableCatalog: false
};

function catalogReducer (state = initialState, action) {
    const {type} = action;
    switch(type) {
        case CATALOG_CARDS: {
            return {
                isCardsCatalog: true,
                isTableCatalog: false
            };
        }
        case CATALOG_TABLE: {
            return {
                isCardsCatalog: false,
                isTableCatalog: true
            };
        }
        default:{
            return state;
        }
    }
}

export default catalogReducer;