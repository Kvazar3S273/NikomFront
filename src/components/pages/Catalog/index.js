import React from "react";
import TableCatalog from "./TableCatalog";
import CardsCatalog from "./CardsCatalog";
import { useDispatch, useSelector } from "react-redux";
import {
  Cards_Catalog,
  Table_Catalog,
} from "../../../constants/actions/catalog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";

const Catalog = () => {
  const { isCardsCatalog, isTableCatalog } = useSelector(
    (state) => state.catalog
  );

  const dispatch = useDispatch();

  const handleClickCardsCatalog = () => {
    dispatch(Cards_Catalog());
  };
  const handleClickTableCatalog = () => {
    dispatch(Table_Catalog());
  };

  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-2"> </div>
        <div className="col-md-8">
          <h1 className="text-center mb-3">Каталог товарів</h1>
        </div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleClickCardsCatalog}
          >
            <i style={{ fontSize: "1.5em", color: "#fff" }}>
              <FontAwesomeIcon icon={faTableCellsLarge} />
            </i>
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClickTableCatalog}
          >
            <i style={{ fontSize: "1.5em", color: "#fff" }}>
              <FontAwesomeIcon icon={faThList} />
            </i>
          </button>
        </div>
      </div>

    {!isCardsCatalog && !isTableCatalog && (<TableCatalog/>)}

      {isCardsCatalog ? <CardsCatalog /> : ""}
      {isTableCatalog ? <TableCatalog /> : ""}

    </div>
  );
};

export default Catalog;
