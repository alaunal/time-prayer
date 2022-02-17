import { Switch, Route, withRouter  } from "react-router-dom";

import Home from "../pages/Home";
import Errors from "../pages/Errors";

const Index = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* <Route path="/about" exact component={About} /> */}

    {/* 404 */}
    <Route render={() => <Errors />} />
  </Switch>
);

export default withRouter(Index);
