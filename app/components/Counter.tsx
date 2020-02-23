import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.css";
import routes from "../constants/routes.json";
import { iRootState, Dispatch } from "../models";

export default function Counter() {
  const counter = useSelector<iRootState, number>(state => state.counter);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {counter}
      </div>
      <div className={styles.btnGroup}>
        <button
          className={styles.btn}
          onClick={() => dispatch.counter.increment(1)}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-plus" />
        </button>
        <button
          className={styles.btn}
          onClick={() => dispatch.counter.decrement(1)}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-minus" />
        </button>
        <button
          className={styles.btn}
          onClick={() => dispatch.counter.incrementIfOdd(1)}
          data-tclass="btn"
          type="button"
        >
          odd
        </button>
        <button
          className={styles.btn}
          onClick={() => dispatch.counter.incrementAsync(1)}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div>
    </div>
  );
}
