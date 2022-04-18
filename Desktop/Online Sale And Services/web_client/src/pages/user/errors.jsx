import React from "react";
import { ErrorMessage } from "formik";

const Error = ({ name }) => {
  return (
    <div className="error_outer">
      <ErrorMessage className="error_inner" name={name} />
    </div>
  );
};

export default Error;
