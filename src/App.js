import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom"
import {Provider} from "react-redux";
import {HomePage} from "./pages/home-page";
import {Header} from "./components/header";
import {store} from "./redux";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                </Router>
            </div>
        </Provider>

    );
}

export default App;
