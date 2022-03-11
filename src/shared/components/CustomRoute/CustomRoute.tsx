import React, { ComponentType, useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { useAuthenticationContext } from "../../../contexts/authentication/authenticationContext";

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

export const CustomRoute = ({
  isPrivate = true,
  component: Component,
  ...rest
}: CustomRouteProps) => {
  const { hasToken } = useAuthenticationContext();

  const userAuthenticated = hasToken();

  const verififyAuthenticationAndRedirect = () => {
    if (isPrivate) {
      if (userAuthenticated) {
        return <Component />;
      }
      return <Redirect to="/login" />;
    }

    return (
      <>
        <Component />
      </>
    );
  };

  return <Route {...rest} render={verififyAuthenticationAndRedirect} />;
};
