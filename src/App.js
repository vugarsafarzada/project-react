import React from "react";
import MainRouter from "./MainRouter";
import Layout from "./components/Layouts/Layout";
import {Provider, useSelector} from "react-redux";
import store from "./store";

function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <Layout>
                    <MainRouter/>
                </Layout>
            </Provider>
        </div>
    );
}

export default App;
