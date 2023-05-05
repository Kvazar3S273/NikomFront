import React from "react";

const CreateCategory = () => {
  return (
    <div>
      <h1 className="text-center mt-3 mb-3">Додавання нової категорії</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div>
            <div className="form-group mb-3">
              <label for="name">Назва:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Введіть назву категорії"
              />
            </div>

            <div className="d-grid gap-1 mt-4">
              <button type="submit" className="btn btn-lg btn-success">
                Додати категорію
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
