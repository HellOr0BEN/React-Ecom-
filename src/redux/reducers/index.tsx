import React from "react";
import counter from "../reducers/quntity";

import { combineReducers } from "redux";

const reducers = combineReducers({
  counter,
});
export default reducers;
