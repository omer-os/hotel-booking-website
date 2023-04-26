import React from "react";

export default function HomeSearchBox() {
  return (
    <div className="section sec-form-search py-0 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form row aos-init aos-animate" data-aos="fade-up">
              <div className="col-lg-3">
                <div className="input-icon-wrap">
                  <span className="icon-calendar"></span>
                  <input
                    type="text"
                    className="form-control flatpickr-input"
                    id="arrival"
                    placeholder="Date Arrival"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-icon-wrap">
                  <span className="icon-calendar"></span>
                  <input
                    type="text"
                    className="form-control flatpickr-input"
                    id="departure"
                    placeholder="Date Departure"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="input-icon-wrap">
                  <span className="icon-person"></span>
                  <select
                    name=""
                    id="number-of-person"
                    className="form-control"
                  >
                    <option value=""># of Person</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5+</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3">
                <button className="btn btn-primary btn-block w-100">
                  Find now <span className=""></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
