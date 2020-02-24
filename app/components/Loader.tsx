import * as React from "react";
import { useSelector } from "react-redux";
import { iRootState } from "../models";

export const Loader = (): React.ReactElement | null => {
  const isLoading = useSelector<iRootState, boolean>(state => state.loader);

  if (!isLoading) return null;

  return (
    <div className="w-100 p-5 d-flex justify-content-center align-items-center">
      Loading...
    </div>
  );
};
