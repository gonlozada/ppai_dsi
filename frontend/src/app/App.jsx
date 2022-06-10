import React from "react";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import AppContext from "./contexts/AppContext";
import history from "history.js";
import routes from "./RootRoutes";
import { Store } from "./redux/Store";
import { GlobalCss, MatxSuspense, MatxTheme, MatxLayout } from "layout";
import { SettingsProvider } from "app/contexts/SettingsContext";

const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <SettingsProvider>
          <MatxTheme>
            <GlobalCss />
            <Router history={history}>
              <MatxSuspense>
                <Switch>
                  <MatxLayout />
                </Switch>
              </MatxSuspense>
            </Router>
          </MatxTheme>
        </SettingsProvider>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
