import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import mergeClassNames from "classnames";
import { useDispatch } from "react-redux";

import { Dispatch } from "../../models";
import routes from "../../constants/routes.json";
import { FormIntroduceData } from "./TestIntroduce.types";

export const TestIntroduce = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch: Dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data: FormIntroduceData) => {
    if (!data.name) {
      return;
    }
    dispatch.test.addUserData(data.name);
    history.push(routes.TEST_PROCESS);
  };

  return (
    <form
      className="d-flex flex-column align-items-start p-5 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="p-2">Input your name: </h2>
      <input
        className={mergeClassNames("form-control col-md-3 m-2", {
          "border border-danger": errors.name,
        })}
        type="text"
        name="name"
        placeholder="Your name"
        ref={register({ required: true })}
      />
      <button className="btn btn-primary m-2" type="submit">
        Start Test
      </button>
      {errors.name && <span className="text-danger m-2">Name is required</span>}
    </form>
  );
};
