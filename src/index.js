import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Wrapper = ({ children }) => {         // to scrooll on top after
  const location = useLocation();
  useLayoutEffect(() => {
    // document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

root.render(
  <React.StrictMode>
    <Router>
      <Wrapper>
        <AppProvider>
          <App />
        </AppProvider>
      </Wrapper>
    </Router>
  </React.StrictMode>
);
