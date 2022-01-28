import { combineReducers } from "redux";
import repositorieReducers from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositorieReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
