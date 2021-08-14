import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./views/Products";
import Product from "./views/Product";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Products} />
      <Route exact path="/Product/:Id?" component={Product} />
    </Router>
  );
}

export default App;
