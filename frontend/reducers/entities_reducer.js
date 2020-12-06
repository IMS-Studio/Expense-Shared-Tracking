import { combineReducers } from "redux";
import users from "./users_reducer";
import friends from "./friends_reducer"
import bills from "./bills_reducer"
import comments from "./comments_reducer"

const entitiesReducer = combineReducers({
  users,
  friends,
  bills,
  comments
});

export default entitiesReducer;


