import {applyMiddleware, combineReducers, createStore,compose} from "redux";
import categoriesReducer from './reducer/categories-reducer.ts'
import projectsReducer from './reducer/projects-reducer.ts'
import formReducer from './reducer/forms-reducer.ts'
import {thunk as ThunkMiddleware} from "redux-thunk";

let rootReducer = combineReducers({
    categoriesPage: categoriesReducer,
    projectsPage: projectsReducer,
    formPage:formReducer,
});

// @ts-ignore
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(ThunkMiddleware)));

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch