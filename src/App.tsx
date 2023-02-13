import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import "./style/App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import Footer from "./components/Footer";
import CustomRoutes from "./pages/customRoutes";

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
      <Layout>
        <>
          <Header />
          <ContentWrapper>
            <CustomRoutes />
          </ContentWrapper>
        </>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
