import { FunctionComponent } from "react";
import { BrowserRouter, Routes as Switch, Route, Link } from "react-router-dom";
import "./style/App.css";
import About from "./pages/About";
import Error from "./pages/Error";
import Accomodation from "./pages/Accomodation";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import Footer from "./components/Footer";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Layout>
        <>
          <Header />
          <ContentWrapper>
            <Switch>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/accomodation/:id" element={<Accomodation />} />
              <Route path="*" element={<Error />} />
            </Switch>
          </ContentWrapper>
        </>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
