import { applyMiddleware, compose } from "redux";

import { createHashHistory } from "history";
import {
  routerMiddleware,
  routerActions,
  connectRouter,
} from "connected-react-router";
import { createLogger } from "redux-logger";
import { init } from "@rematch/core";
import { models, Store } from "../models";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      obj: Record<string, any>,
    ) => Function;
  }
  interface NodeModule {
    hot?: {
      accept: (path: string, cb: () => void) => void;
    };
  }
}

const history = createHashHistory();

// const rootReducer = createRootReducer(history);

const configureStore = (): Store => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk Middleware
  // middleware.push(thunk);

  // Logging Middleware
  const logger = createLogger({
    level: "info",
    collapsed: true,
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== "test") {
    middleware.push(logger);
  }

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    // ...counterActions,
    ...routerActions,
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://extension.remotedev.io/docs/API/Arguments.html
        actionCreators,
      })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  // const store = createStore(rootReducer, initialState, enhancer);

  const reducers = { router: connectRouter(history) };

  const store = init({
    models,
    redux: {
      reducers,
      // middlewares: [router, logger],
      enhancers: enhancer,
      devtoolOptions: {},
    },
  });

  if (module.hot) {
    module.hot.accept(
      "../models",
      // eslint-disable-next-line global-require
      () => {
        // eslint-disable-next-line global-require
        const nextModels = require("../models").default;

        Object.keys(nextModels).forEach(modelKey => {
          store.model({
            name: modelKey,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(models as any)[modelKey],
          });
        });
      },
    );
  }

  return store;
};

export default { configureStore, history };
