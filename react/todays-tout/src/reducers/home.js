import { handleActions } from "redux-actions";
import { Local } from "../utils/storage";
import { navList } from "./data";

const state = {
  navId: 0,
  navList: JSON.parse(Local.get("react_navList")) || navList.slice(0, 12)
};

export const home = handleActions({}, state);
