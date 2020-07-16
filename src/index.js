import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store/store";
import App from "./app/app";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider
      messages={{
        ...require("./app/locale/en"),
      }}
      locale="en"
    >
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
