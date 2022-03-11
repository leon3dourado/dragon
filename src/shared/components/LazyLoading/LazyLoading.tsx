import React from "react";
import { LinearProgress } from "@material-ui/core";

export const LazyLoading = () => {
  return (
    <div>
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
    </div>
  );
};
