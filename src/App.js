import React from "react";
import MainRouter from "./MainRouter";
import Layout from "./components/Layouts/Layout";

function App() {

    return (
        <div className="App">
            <Layout>
                <MainRouter/>
            </Layout>
        </div>
    );
}

export default App;
