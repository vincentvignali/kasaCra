import { FC } from "react";

import { Routes as Switch, Route } from "react-router-dom";
import About from "./About";
import Accomodation from "./Accomodation";
import Error from "./Error";
import Home from "./Home";

const CustomRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accomodation/:id" element={<Accomodation />} />
      <Route path="*" element={<Error />} />
    </Switch>
  );
};

export default CustomRoutes;
