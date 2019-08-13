import {createStore} from "redux"
import reducer from "./reducer"
import uuid from "uuid/v4"
const initialState = {
  counters: [
    { id: uuid(), count: 0 },
  ]
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store