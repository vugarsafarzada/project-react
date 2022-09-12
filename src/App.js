import React from "react";
import MainRouter from "./MainRouter";
import Layout from "./components/Layouts/Layout";
import {Provider, useSelector} from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Layout>
                    <MainRouter/>
                </Layout>
            </div>
        </Provider>
    );
}

export default App;
