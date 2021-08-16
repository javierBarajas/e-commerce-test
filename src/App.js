import React, { Suspense, lazy } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

const Products = lazy(() => import("./views/Products"));
const Product = lazy(() => import("./views/Product"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Switch>
          <Route
            path="/Product"
            exact
            name="Products"
            render={(props) => <Products {...props} />}
          />
          <Route
            path="/Product/:id"
            exact
            name="Product"
            render={(props) => <Product {...props} />}
          />

          <Redirect from="/" to="/Product" />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
