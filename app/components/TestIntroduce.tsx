import React from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes.json";

export const TestIntroduce = () => {
  return (
    <>
      <div className="pl-3 pt-4">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className="d-flex flex-column align-items-start p-5 mt-5">
        <h2 className="p-2">Input your name: </h2>
        <input
          className="form-control col-md-3 m-2"
          type="text"
          placeholder="Your name"
        />
        <button className="btn btn-primary m-2" type="button">
          Start Test
        </button>
      </div>
    </>
  );
};
