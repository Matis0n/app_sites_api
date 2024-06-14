import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store.ts";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
