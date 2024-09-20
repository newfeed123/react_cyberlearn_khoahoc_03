import { combineReducers } from "redux";
import ToDoListReducer from "./ToDoListReducer";
import FakeBookReducer from "./FakebookReducer";
import { BurgerReducer } from "./BurgerReducer";
export const rootReducer = combineReducers({
    ToDoListReducer,
    FakeBookReducer,
    BurgerReducer,
})