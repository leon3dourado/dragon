/* eslint-disable react/react-in-jsx-scope */
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { CustomRoute } from "../shared/components/CustomRoute/CustomRoute";
import { LazyLoading } from "../shared/components/LazyLoading/LazyLoading";

function AppRoutes() {
  const routes = (
    <BrowserRouter>
      <Switch>
        <CustomRoute isPrivate path="/home" component={Home} />
        <Route path="*" component={Login} />
      </Switch>
    </BrowserRouter>
  );

  return <Suspense fallback={<LazyLoading />}>{routes}</Suspense>;
}

export default AppRoutes;
