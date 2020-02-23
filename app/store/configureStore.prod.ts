import { createHashHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { init } from "@rematch/core";
import { models, Store } from "../models";

const history = createHashHistory();
const router = routerMiddleware(history);

const reducers = { router: connectRouter(history) };

function configureStore(): Store {
  return init({
    models,
    redux: {
      reducers,
      middlewares: [router],
      devtoolOptions: {},
    },
  });
}

export default { configureStore, history };
