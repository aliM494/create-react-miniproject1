import React from "react";

const App = () => {
  return (
    <div className="container w-100 h-100 p-3">
      <div className="row h-100 justify-content-center align-align-items-start">
        <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
          <h4 className="text-center text-info text_shdow">
            به کدیاد خوش اومدید
          </h4>
          <form>
            <div className="form-group d-flex">
              <input type="text" className="form-control" />
              <button type="submit" className="btn btn-success me-1">
                ثبت
              </button>
            </div>
          </form>
          <ul className="list-group m-0 p-0 mt-2">
            <li className="list-group-item d-flex justify-content-between">
              کار شماره 1
              <span>
                <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>
                <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>
                <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              کار شماره 2
              <span>
                <i className="me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"></i>
                <i className="me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow"></i>
                <i className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
