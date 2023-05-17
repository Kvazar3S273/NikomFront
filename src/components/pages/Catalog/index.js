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
import classNames from "classnames";
import Find from "./Find";

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
            // className="btn btn-secondary me-2"
            className={classNames(
              "btn me-2",
              { "btn-primary": isCardsCatalog || !isTableCatalog },
              { "btn-secondary": isTableCatalog }
            )}
            onClick={handleClickCardsCatalog}
          >
            <i style={{ fontSize: "1.5em", color: "#fff" }}>
              <FontAwesomeIcon icon={faTableCellsLarge} />
            </i>
          </button>
          <button
            type="button"
            // className="btn btn-secondary"
            className={classNames(
              "btn me-2",
              { "btn-secondary": isCardsCatalog || !isTableCatalog },
              { "btn-primary": isTableCatalog }
            )}
            onClick={handleClickTableCatalog}
          >
            <i style={{ fontSize: "1.5em", color: "#fff" }}>
              <FontAwesomeIcon icon={faThList} />
            </i>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Find/>
        </div>
        <div className="col-md-9">
          <div className="container">
            {!isCardsCatalog && !isTableCatalog && <CardsCatalog />}
            {isCardsCatalog ? <CardsCatalog /> : ""}
            {isTableCatalog ? <TableCatalog /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
