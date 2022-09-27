import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";// para async functions
import reducer from "../Reducer/index.js"


const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store