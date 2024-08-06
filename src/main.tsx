import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./routes/Home.tsx";
import {PvpEndpoints} from "./endpoints/pvp-endpoints.ts";
import EndpointScreen from "./components/EndpointScreen.tsx";
import {EsportEndpoints} from "./endpoints/esport-endpoints.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} >
                    <Route index element={<Home/>}/>
                    {PvpEndpoints.map(e => <Route
                        path={e.route.path}
                        element={<EndpointScreen endpoint={e.endpoint}/>}
                    />)}
                    {EsportEndpoints.map(e => <Route
                        path={e.route.path}
                        element={<EndpointScreen endpoint={e.endpoint}/>}
                    />)}
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
